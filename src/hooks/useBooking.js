import { useCallback, useState } from "react";
import { DEFAULT_MEETING } from "@/data/meetings";

const EMPTY_CONTACT = { name: "", email: "", phone: "" };

export default function useBooking() {
  // Modal visibility
  const [open, setOpen] = useState(false);

  // "consultation" | "demo" | "secret"
  const [meetingType, setMeetingType] = useState(DEFAULT_MEETING);

  // "details" (contact form) -> "calendar" (Cal.com embed)
  const [step, setStep] = useState("details");

  // Captured before we ever show the calendar, so every booking is a real lead
  const [contact, setContact] = useState(EMPTY_CONTACT);

  const openBooking = useCallback((type = DEFAULT_MEETING) => {
    setMeetingType(type);
    setStep("details");
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setOpen(false);
    // wait for the close animation before wiping the form
    setTimeout(() => {
      setStep("details");
      setContact(EMPTY_CONTACT);
    }, 300);
  }, []);

  const changeMeeting = useCallback((type) => {
    setMeetingType(type);
    setStep("details");
  }, []);

  const submitContact = useCallback((data) => {
    setContact(data);
    setStep("calendar");
  }, []);

  const backToDetails = useCallback(() => setStep("details"), []);

  return {
    // state
    open,
    meetingType,
    step,
    contact,

    // raw setters (kept for flexibility)
    setOpen,
    setMeetingType,

    // actions
    openBooking,
    closeBooking,
    changeMeeting,
    submitContact,
    backToDetails,
  };
}
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  Layers,
  Sparkles,
  Building2,
  Star,
  PhoneCall,
} from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import MegaMenu from "./ProductsMegaMenu";
import { products } from "../../data/products";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useLogoClick } from "@/hooks/useLogoClick";
import { SCHEDULE_CALL_HREF } from "@/constants/companyInfo";

import Karmyuglogo from "../../assets/logos/Karmyuglogo.webp";

const navLinkClass = ({ isActive }) =>
  `relative font-medium transition-colors duration-300 ${
    isActive
      ? "text-[--brand-primary]"
      : "text-slate-700 hover:text-[--brand-primary]"
  }`;

// Shared styling + a small leading icon for each mobile drawer link — purely
// a visual/hierarchy polish, no behavior change.
const mobileNavLinkClass = ({ isActive }) =>
  `flex items-center gap-3 rounded-xl px-3.5 py-3.5 font-medium transition-colors duration-200 ${
    isActive
      ? "bg-[var(--brand-primary)]/8 text-[--brand-primary]"
      : "text-slate-700 hover:bg-slate-50 active:bg-slate-100"
  }`;

export default function Navbar() {
  const [showProducts, setShowProducts] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Tells the scroll-lock hook to skip restoring the old scroll position
  // when the drawer closes *because of navigation* (a route change already
  // resets scroll to the top — restoring the old position would undo that).
  const navigatingRef = useRef(false);

  useScrollLock(mobileOpen, navigatingRef);

  // Home from another route; smooth-scroll to top if already on "/".
  const handleLogoClick = useLogoClick();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!showProducts) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setShowProducts(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showProducts]);

  // Closes the drawer smoothly on navigation. Every link inside the drawer
  // (top-level, product sub-links, and the CTA) calls this on click.
  const closeForNavigation = () => {
    navigatingRef.current = true;
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-2 md:top-5 left-0 right-0 z-50 px-2 md:px-4">
      <nav
        aria-label="Primary"
        className={`
        relative
        max-w-7xl
        mx-auto
        bg-white/80
        backdrop-blur-2xl
        border
        border-slate-200/80
        rounded-2xl
        px-6
        py-2
        transition-shadow
        duration-300
        ${scrolled ? "shadow-[0_12px_36px_rgba(15,23,42,0.1)]" : "shadow-[0_8px_30px_rgba(0,0,0,0.06)]"}
      `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3">
            <img src={Karmyuglogo} alt="Karmyug" className="h-12 w-auto" />

            <div className="flex flex-col leading-[0.9]">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900">
                KARMYUG
              </span>

              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                AI SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Products Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={showProducts}
                onFocus={() => setShowProducts(true)}
                className="flex items-center gap-1 cursor-pointer text-slate-700 font-medium hover:text-[var(--brand-primary)] transition-colors duration-300"
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    showProducts ? "rotate-180" : ""
                  }`}
                />
              </button>

              <MegaMenu open={showProducts} products={products} />
            </div>

            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>

            <NavLink to="/company" className={navLinkClass}>
              Company
            </NavLink>

            <NavLink to="/testimonials" className={navLinkClass}>
              Testimonials
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href={SCHEDULE_CALL_HREF}
              className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white px-5 py-2.5 rounded-xl font-medium transition-all inline-block"
            >
              Schedule a Call
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="p-2 cursor-pointer" aria-label="Open menu">
                  <Menu size={30} aria-hidden="true" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="flex h-dvh w-[85vw] max-w-sm flex-col overflow-hidden p-0"
              >
                {/* Header */}
                <div className="flex shrink-0 items-center gap-3 border-b border-slate-100 px-5 pt-6 pb-4">
                  <img
                    src={Karmyuglogo}
                    alt="Karmyug"
                    className="h-10 w-auto"
                  />
                  <div className="flex flex-col leading-[0.9]">
                    <span className="text-lg font-extrabold tracking-tight text-slate-900">
                      KARMYUG
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
                      AI Solutions
                    </span>
                  </div>
                </div>

                {/* Scrollable nav — independent of the locked background */}
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4">
                  <nav className="flex flex-col gap-1" aria-label="Mobile">
                    <NavLink
                      to="/"
                      onClick={closeForNavigation}
                      className={mobileNavLinkClass}
                    >
                      Home
                    </NavLink>

                    <div className="py-1">
                      <button
                        onClick={() => setMobileProductsOpen((v) => !v)}
                        aria-expanded={mobileProductsOpen}
                        className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-3.5 py-3.5 font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50"
                      >
                        <span className="flex items-center gap-3">
                          Products
                        </span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            mobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden pl-3 transition-all duration-300 ${
                          mobileProductsOpen ? "mt-2 max-h-[600px]" : "max-h-0"
                        }`}
                      >
                        <div className="space-y-2.5 pb-1">
                          {products.map((item) => (
                            <Link
                              key={item.id}
                              to={item.href}
                              onClick={closeForNavigation}
                              className={`
              block
              rounded-2xl
              p-4
              ${item.color}
              transition
              duration-200
              hover:shadow-md
              active:scale-[0.99]
            `}
                            >
                              <h3 className="font-semibold text-slate-900">
                                {item.title}
                              </h3>

                              <p className="mt-1 text-sm text-slate-600">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <NavLink
                      to="/services"
                      onClick={closeForNavigation}
                      className={mobileNavLinkClass}
                    >
                      Services
                    </NavLink>

                    <NavLink
                      to="/company/about"
                      onClick={closeForNavigation}
                      className={mobileNavLinkClass}
                    >
                      About
                    </NavLink>

                    <NavLink
                      to="/testimonials"
                      onClick={closeForNavigation}
                      className={mobileNavLinkClass}
                    >
                      Testimonials
                    </NavLink>

                    <NavLink
                      to="/contact"
                      onClick={closeForNavigation}
                      className={mobileNavLinkClass}
                    >
                      Contact
                    </NavLink>
                  </nav>
                </div>

                {/* Sticky footer CTA */}
                <div className="shrink-0 border-t border-slate-100 p-4">
                  <a
                    href={SCHEDULE_CALL_HREF}
                    onClick={closeForNavigation}
                    className="block rounded-xl bg-[var(--brand-primary)] py-3.5 text-center font-semibold text-white shadow-sm transition-colors hover:bg-[var(--brand-primary-dark)] active:scale-[0.99]"
                  >
                    Schedule a Call
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
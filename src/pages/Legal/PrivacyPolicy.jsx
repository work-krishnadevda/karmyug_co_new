import LegalLayout from "./LegalLayout";
import { COMPANY_INFO } from "@/constants/companyInfo";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="How Karmyug collects, uses and protects your information."
      path="/privacy-policy"
      updatedOn="July 2026"
    >
      <p>
        Karmyug Solutions ("Karmyug", "we", "us") builds HRMS, ValuXpert and Quixivo, along with
        custom software and consulting services. This policy explains what information we collect
        through our website and products, and how it's used.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Contact details you submit through forms — name, email, company, phone number.</li>
        <li>Usage data such as pages visited and general device/browser information.</li>
        <li>Information you provide when using our products, per the applicable product agreement.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to enquiries and schedule demos or calls.</li>
        <li>To improve our website, products and support experience.</li>
        <li>To send occasional product updates, only if you've opted in.</li>
      </ul>

      <h2>Data sharing</h2>
      <p>
        We do not sell personal information. Data is shared only with service providers who help us
        operate our website and products (e.g. hosting, email delivery), under confidentiality
        obligations.
      </p>

      <h2>Your choices</h2>
      <p>
        You can request access to, correction of, or deletion of your personal data at any time by
        emailing <a href={`mailto:${COMPANY_INFO.supportEmail}`}>{COMPANY_INFO.supportEmail}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a> or{" "}
        {COMPANY_INFO.address}.
      </p>
    </LegalLayout>
  );
}

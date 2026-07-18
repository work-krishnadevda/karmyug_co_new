import LegalLayout from "./LegalLayout";
import { COMPANY_INFO } from "@/constants/companyInfo";

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="The terms that govern use of Karmyug's website and products."
      path="/terms"
      updatedOn="July 2026"
    >
      <p>
        These terms govern your use of the Karmyug website and our products (HRMS, ValuXpert,
        Quixivo). By using our website or signing up for a product, you agree to these terms.
      </p>

      <h2>Using our website</h2>
      <p>
        You may browse this site and submit enquiries for legitimate business purposes. You agree
        not to misuse the site, attempt unauthorized access, or interfere with its normal operation.
      </p>

      <h2>Product agreements</h2>
      <p>
        Access to HRMS, ValuXpert or Quixivo is governed by a separate order form or service
        agreement signed with your organization, which takes precedence over this page for anything
        related to product usage, data ownership and support.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this site — including text, design and product screenshots — belongs to
        Karmyug Solutions or its licensors and may not be reproduced without permission.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        This website and its content are provided "as is." Karmyug is not liable for indirect or
        consequential damages arising from use of the website, to the extent permitted by law.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. Continued use of the site after changes means
        you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>.
      </p>
    </LegalLayout>
  );
}

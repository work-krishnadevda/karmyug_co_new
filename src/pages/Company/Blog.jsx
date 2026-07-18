import { Newspaper } from "lucide-react";

import Seo from "@/components/Shared/Seo";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";

export default function Blog() {
  return (
    <main id="main-content" className="overflow-x-hidden bg-brand-bg">
      <Seo
        title="Blog"
        description="Notes on product updates, engineering and workforce management from the Karmyug team."
        path="/company/blog"
      />

      <section className="flex min-h-[70vh] items-center bg-white">
        <Container className="flex flex-col items-center gap-5 py-24 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
            <Newspaper size={26} aria-hidden="true" />
          </span>
          <SectionHeading
            as="h1"
            title="The blog is coming soon"
            description="We're writing about product updates, workforce management and everything we learn shipping HRMS, ValuXpert and Quixivo. Check back shortly."
          />
        </Container>
      </section>
    </main>
  );
}

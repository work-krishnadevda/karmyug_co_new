import Seo from "@/components/Shared/Seo";
import Container from "@/components/Shared/Container";

/**
 * Shared layout for Privacy Policy / Terms — long-form legal text needs
 * consistent typography and spacing, not bespoke markup per page.
 */
export default function LegalLayout({ title, description, path, updatedOn, children }) {
  return (
    <main id="main-content" className="overflow-x-hidden bg-brand-bg">
      <Seo title={title} description={description} path={path} />

      <section className="bg-white pt-32 pb-12 sm:pt-40">
        <Container className="max-w-3xl">
          <h1 className="font-heading text-3xl font-extrabold text-brand-text sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-brand-text-secondary">Last updated {updatedOn}</p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <article className="flex flex-col gap-6 text-sm leading-relaxed text-brand-text-secondary [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-text [&_h2]:mt-4 [&_a]:text-brand-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
            {children}
          </article>
        </Container>
      </section>
    </main>
  );
}

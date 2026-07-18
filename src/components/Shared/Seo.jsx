import { Helmet } from "react-helmet-async";
import { COMPANY_INFO } from "@/constants/companyInfo";

const SITE_URL = "https://karmyug.co";
const DEFAULT_OG_IMAGE = `${SITE_URL}/karmyuglogo.png`;

/**
 * Drop-in SEO block for every page/route. Handles title, description,
 * canonical, Open Graph, Twitter Card and optional JSON-LD structured data
 * (pass an object or array of objects for `schema`, e.g. FAQPage, Product).
 *
 * Usage:
 *   <Seo title="Services" description="..." path="/services" schema={faqSchema} />
 */
export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  schema,
  noindex = false,
}) {
  const fullTitle = title ? `${title} | ${COMPANY_INFO.name}` : COMPANY_INFO.name;
  const canonical = `${SITE_URL}${path}`;
  const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemaList.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}

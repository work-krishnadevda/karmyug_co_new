import { useParams, Navigate } from "react-router-dom";

import ServiceLanding from "@/components/Service/ServiceLanding";
import { services } from "@/data/services";

/**
 * One dedicated landing page per service (e.g. /services/it-solutions),
 * driven entirely by the existing services.js data — mirrors the pattern
 * already used for products (ProductLanding + productDetails).
 */
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return <ServiceLanding service={service} />;
}

import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PageLoader from "@/components/Shared/PageLoader";

// Route-level code splitting — every page is its own chunk.
const Home = lazy(() => import("@/pages/Home/Home"));
const Company = lazy(() => import("@/pages/Company/Company"));
const About = lazy(() => import("@/pages/Company/About"));

const Partners = lazy(() => import("@/pages/Company/Partners"));
const Blog = lazy(() => import("@/pages/Company/Blog"));
const Services = lazy(() => import("@/pages/Services/Services"));
const ServiceDetail = lazy(() => import("@/pages/Services/ServiceDetail"));
const Products = lazy(() => import("@/pages/Products/Products"));
const ValuXpert = lazy(() => import("@/pages/Products/ValuXpert/ValuXpert"));
const HRMS = lazy(() => import("@/pages/Products/HRMS/HRMS"));
const Quixivo = lazy(() => import("@/pages/Products/Quixivo/Quixivo"));
const Testimonials = lazy(() => import("@/pages/Testimonials/Testimonials"));
const Contact = lazy(() => import("@/pages/Contact/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/Legal/PrivacyPolicy"));
const Terms = lazy(() => import("@/pages/Legal/Terms"));
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/company" element={<Company />} />
        <Route path="/company/about" element={<About />} />
       
        <Route path="/company/partners" element={<Partners />} />
        <Route path="/company/blog" element={<Blog />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/valuxpert" element={<ValuXpert />} />
        <Route path="/products/hrms" element={<HRMS />} />
        <Route path="/products/quixivo" element={<Quixivo />} />
        {/* Backward-compatible alias for the old product name/url */}
        <Route path="/products/crane" element={<Navigate to="/products/hrms" replace />} />

        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

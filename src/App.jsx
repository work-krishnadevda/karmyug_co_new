import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/Shared/ScrollToTop";
import AppRoutes from "@/routes/AppRoutes";
import { LenisProvider } from "@/context/LenisProvider";

const App = () => {
  return (
    <LenisProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-[var(--brand-primary)] focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content.
      </a>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </LenisProvider>
  );
};

export default App;

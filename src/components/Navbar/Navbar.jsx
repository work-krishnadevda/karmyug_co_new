import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import Karmyuglogo from "../../assets/logos/Karmyuglogo.png";

export default function Navbar() {
  return (
    <header className="fixed top-2 md:top-5 left-0 right-0 z-50 px-2 md:px-4">
      <nav
        className="
    max-w-7xl
    mx-auto
    bg-white/80
    backdrop-blur-2xl
    border
    border-slate-200/80
    rounded-2xl
    px-6
    py-2
    shadow-[0_8px_30px_rgba(0,0,0,0.06)]
  "
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={Karmyuglogo} alt="Karmyug" className="h-12 w-auto" />

            <div className="flex flex-col leading-[0.9]">
              <span
                className="
      text-xl
      md:text-2xl
      font-extrabold
      tracking-tight
      text-slate-900
    "
              >
                KARMYUG
              </span>

              <span
                className="
      text-[10px]
      uppercase
      tracking-[0.25em]
      text-slate-500
    "
              >
                IT SOLUTIONS
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <button
              className="flex items-center gap-1 text-slate-700
font-medium
hover:text-[#2563EB]
transition-colors
duration-300"
            >
              Products
              <ChevronDown size={16} />
            </button>

            <Link
              to="/services"
              className="
text-slate-700
font-medium
hover:text-[#2563EB]
transition-colors
duration-300
"
            >
              Services
            </Link>

            <button
              className="flex items-center gap-1 text-slate-700
font-medium
hover:text-[#2563EB]
transition-colors
duration-300"
            >
              Company
              <ChevronDown size={16} />
            </button>

            <Link
              to="/testimonials"
              className="
text-slate-700
font-medium
hover:text-[#2563EB]
transition-colors
duration-300
"
            >
              Testimonials
            </Link>

            <Link
              to="/contact"
              className="
text-slate-700
font-medium
hover:text-[#2563EB]
transition-colors
duration-300
"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <button
              className="
      bg-[#2563EB]
      hover:bg-[#1D4ED8]
      text-white
      px-5
      py-2.5
      rounded-xl
      font-medium
      transition-all
    "
            >
              Schedule a Call
            </button>
          </div>

          {/* Mobile Menu */}

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2">
                  <Menu size={30} />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px]">
                <div className="mt-10 ml-10 flex flex-col gap-6">
                  <Link to="/">Home</Link>

                  <Link to="/products">Products</Link>

                  <Link to="/services">Services</Link>

                  <Link to="/company/about">About</Link>

                  <Link to="/testimonials">Testimonials</Link>

                  <Link to="/contact">Contact</Link>

                  <button
                    className="
            mt-4
            bg-[#2563EB]
            text-white
            py-3
            rounded-xl
            font-medium
            mr-6
          "
                  >
                    Schedule a Call
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

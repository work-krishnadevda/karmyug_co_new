import realapple from "../../assets/logos/realapple.webp";
import RcsIcon from "../../assets/logos/Rcslogo.webp";
import himveda from "../../assets/logos/himVedaLogo.webp";
import aryn from "../../assets/logos/arynlogo.webp";
import madhukar from "./../../assets/logos/madhukar_associates.png"
import kidzee from "./../../assets/logos/Kidzeelogo.png"

import taxwise from "./../../assets/logos/LogoTaxWise.png"

export default function LogoMarquee() {
  const logos = [
    {
      src: realapple,
      className: "h-12",
    },
    {
      src: RcsIcon,
      className: "h-10", // slightly smaller
    },
    {
      src: himveda,
      className: "h-25", // slightly bigger
    },
    {
      src: aryn,
      className: "h-12",
    },
    {
      src: madhukar,
      className: "h-35", 
    },
    {
     src: taxwise,
      className: "h-25", 
    },
    {
     src: kidzee,
      className: "h-20", 
    }
  ];

  return (
    <section className="w-full overflow-hidden py-8">
      <div className="marquee">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="
              flex-shrink-0
              w-40
              h-20
              flex
              items-center
              justify-center
              mx-4
            "
          >
            <img
              src={logo.src}
              alt=""
              className={`${logo.className} w-auto max-w-[130px] object-contain`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

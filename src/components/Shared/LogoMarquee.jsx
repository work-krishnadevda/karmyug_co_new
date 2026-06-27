import realapple from "../../assets/logos/realapplelogo.png.jpeg";
import RcsIcon from "../../assets/logos/Rcslogo.png";
import himveda from "../../assets/logos/himvedalogo.png.jpeg";
import aryn from "../../assets/logos/arynlogo.png.jpeg";

export default function LogoMarquee() {
  const logos = [realapple, RcsIcon, himveda, aryn];

  return (
    <div className="overflow-hidden mt-10">
      <div className="marquee gap-16">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="
w-[220px]
h-[90px]
flex
items-center
justify-center
flex-shrink-0
"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="
max-h-[70px]
max-w-[180px]
object-contain
transition-all
duration-300
hover:scale-105
"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

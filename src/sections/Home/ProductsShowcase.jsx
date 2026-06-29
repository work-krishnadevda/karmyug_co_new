// import crane from "../../assets/images/products/crane/HRMS overview.png";
// import valuxpert from "../../assets/images/products/valuxpert/valuXpertOverview.png";
// import quixivo from "../../assets/images/products/quixivo/Quixivo overview.png";
// import { ArrowUpRight } from "lucide-react";

// export default function ProductsShowcase() {
//   const projects = [
//     {
//       id: 1,
//       name: "HRMS Crane | Employee, Attendance & Payroll Management System",
//       image: crane,
//       description:
//         "Streamline workforce operations with HRMS Crane. Manage employees, attendance, payroll, advances, expenses, approvals, and workforce analytics through secure Admin and Staff portals.",
//     },
//     {
//       id: 2,
//       name: "ValuXpert Property Valuation Platform | Valuation Operations & Field Management",
//       image: valuxpert,
//       description:
//         "Optimize property valuation workflows with ValuXpert. Automate case allocation, field inspections, workforce management, reporting, analytics, approvals, and business intelligence from a unified platform.",
//     },
//     {
//       id: 3,
//       name: "Quixivo Institute Management Platform | Student, Fees & Learning Management Software",
//       image: quixivo,
//       description:
//         "Manage students, attendance, fees, communication, examinations, and online learning from one platform. Quixivo helps coaching institutes, schools, and educational organizations streamline operations and scale efficiently.",
//     },
//   ];

//   return (
//     <div className="overflow-hidden mt-10">
//       {/* Container for the sliding effect */}
//       <div className="marquee flex gap-8">
//         {[...projects, ...projects].map((project, index) => (
//           <div
//             key={index}
//             className="group w-[500px] border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex-shrink-0 hover:shadow-lg"
//           >
//             {/* Image Container with overflow-hidden for the hover zoom effect */}
//             <div className="group relative overflow-hidden rounded-lg mb-4 bg-gray-50 group">
//               {/* Arrow */}
//               <div
//                 className="
//       absolute top-3 right-3 z-10
//       w-10 h-10
//       rounded-lg
//       bg-white
//       shadow-lg
//       flex items-center justify-center
//       opacity-0
//       translate-y-2
//       transition-all
//       duration-300
//       group-hover:opacity-100
//       group-hover:translate-y-0
//       pointer-events-none
//     "
//               >
//                 <ArrowUpRight size={18} />
//               </div>

//               {/* Image */}
//               <div className="h-[320px] flex items-center justify-center">
//                 <img
//                   src={project.image}
//                   alt={project.name}
//                   className="
//     w-full
//     h-full
//     object-contain
//     transition-all
//     duration-500
//     group-hover:rotate-2
//     group-hover:translate-x-2
//     group-hover:translate-y-2
//   "
//                 />
//               </div>
//             </div>
//             <h3 className="font-bold text-lg p-[1%]">{project.name}</h3>
//             <p className="text-sm text-gray-500 p-[1%] mt-[1%]">
//               {project.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import crane from "../../assets/images/products/crane/HRMS overview.png";
// import valuxpert from "../../assets/images/products/valuxpert/valuXpertOverview.png";
// import quixivo from "../../assets/images/products/quixivo/Quixivo overview.png";
// import { ArrowUpRight } from "lucide-react";

// export default function ProductsShowcase() {
//   const projects = [
//     {
//       id: 1,
//       name: "HRMS Crane",
//       description:
//         "Streamline workforce operations: manage employees, attendance, payroll, and analytics through secure portals.",
//     },
//     {
//       id: 2,
//       name: "ValuXpert",
//       description:
//         "Optimize valuation workflows with automated case allocation, field inspections, and business intelligence.",
//     },
//     {
//       id: 3,
//       name: "Quixivo",
//       description:
//         "All-in-one institute management: handle students, fees, communication, and learning from a single platform.",
//     },
//   ];

//   return (
//     <div className="overflow-hidden mt-10 py-8 bg-slate-50/50">
//       <div className="marquee flex gap-6 px-4">
//         {[...projects, ...projects].map((project, index) => (
//           <div
//             key={index}
//             className="group w-[85vw] md:w-[380px] border border-blue-100 rounded-2xl p-5 bg-white shadow-sm flex-shrink-0 hover:shadow-blue-100 hover:shadow-xl transition-all duration-300"
//           >
//             {/* Image Container */}
//             <div className="relative overflow-hidden rounded-xl mb-5 bg-blue-50/80 h-[220px] flex items-center justify-center">
//               <div className="absolute top-3 right-3 z-10 w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-blue-600">
//                 <ArrowUpRight size={18} />
//               </div>

//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>

//             <h3 className="font-bold text-xl text-slate-800 mb-2">
//               {project.name}
//             </h3>
//             <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
//               {project.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import crane from "../../assets/images/products/crane/HRMS overview.png";
import valuxpert from "../../assets/images/products/valuxpert/valuXpertOverview.png";
import quixivo from "../../assets/images/products/quixivo/Quixivo overview.png";
import { ArrowUpRight } from "lucide-react";

export default function ProductsShowcase() {
  const projects = [
    {
      id: 1,
      name: "HRMS Crane",
      description:
        "Streamline workforce operations: manage employees, attendance, payroll, and analytics through secure portals.",
      image: crane,
    },
    {
      id: 2,
      name: "ValuXpert",
      description:
        "Optimize valuation workflows with automated case allocation, field inspections, and business intelligence.",
      image: valuxpert,
    },
    {
      id: 3,
      name: "Quixivo",
      description:
        "All-in-one institute management: handle students, fees, communication, and learning from a single platform.",
      image: quixivo,
    },
  ];

  return (
    <section className="py-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid Layout: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col border border-blue-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-blue-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl mb-6 bg-blue-50/80 h-64 flex items-center justify-center">
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-blue-600">
                  <ArrowUpRight size={20} />
                </div>

                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                {project.name}
              </h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

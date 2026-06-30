import features from "../../data/features";
const WhyKarmyug = () => {
  return (
    <section className="relative bg-[#0B8F45]  overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <div>
            <span className="text-green-200 uppercase tracking-[4px] font-semibold">
              Why Choose Karmyug
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white leading-tight">
              Technology That Helps Your
              <br />
              Business Grow Faster
            </h2>

            <p className="mt-8 text-green-100 text-lg leading-8 max-w-xl">
              Karmyug develops scalable websites, enterprise software,
              AI-powered automation, CRM, ERP and HRMS solutions that simplify
              operations, improve productivity and accelerate business growth.
            </p>

            <button className="mt-10 bg-white text-[#0B8F45] font-semibold rounded-full px-8 py-4 hover:scale-105 duration-300">
              Start Your Project
            </button>
          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">
            <img
              src="/images/phone1.png"
              className="w-[310px] rounded-[45px] shadow-2xl z-20"
            />

            <img
              src="/images/phone2.png"
              className="absolute top-16 right-0 lg:-right-12 w-[280px] rounded-[45px] shadow-2xl"
            />
          </div>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-28">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 hover:-translate-y-3 duration-300 shadow-lg hover:shadow-2xl border border-green-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0B8F45]">
                  <Icon
                    size={28}
                    className="text-[#0B8F45] group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WhyKarmyug;

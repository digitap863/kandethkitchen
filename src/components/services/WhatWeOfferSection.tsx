import { Check } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  highlights: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Kitchen Accessories & Hardware Solutions",
    description:
      "Premium kitchen fittings designed for performance, durability, and aesthetics.",
    highlights: [
      "Modular kitchen hardware",
      "Baskets, pull-outs & organizers",
      "Soft-close hinges & drawer systems",
      "Handles, edge profiles & accessories",
      "Premium fittings from trusted global brands",
    ],
  },
  {
    id: 2,
    title: "Built-in Kitchen Appliances",
    description:
      "High-performance appliances that blend seamlessly with modern kitchens.",
    highlights: [
      "Chimneys & hoods",
      "Hobs & cooktops",
      "Built-in ovens & microwaves",
      "Sinks, faucets & waste systems",
      "Energy-efficient and smart appliances",
    ],
  },
  {
    id: 3,
    title: "Appliance Installation & Commissioning",
    description:
      "Professional installation for safe and long-lasting performance.",
    highlights: [
      "Trained technicians",
      "Brand-authorized installation",
      "Safety checks & compliance",
      "Clean, damage-free fitting",
      "Post-installation guidance",
    ],
  },
  {
    id: 4,
    title: "Wardrobe & Furniture Fittings",
    description: "Smart storage solutions that enhance everyday living.",
    highlights: [
      "Wardrobe fittings & sliding systems",
      "Soft-close channels & hinges",
      "Lift-up systems & organizers",
      "Office furniture fittings",
      "Premium motion and load-tested hardware",
    ],
  },
  {
    id: 5,
    title: "Interior Accessories & Lighting",
    description: "Functional lighting and accessories that elevate interiors.",
    highlights: [
      "Interior & cabinet lighting",
      "Motion sensor lights",
      "Architectural & accent lighting",
      "Modern utility accessories",
      "Space-enhancing solutions",
    ],
  },
  {
    id: 6,
    title: "Support, Service & Maintenance",
    description: "Reliable support to keep everything running smoothly.",
    highlights: [
      "Quick response service support",
      "Genuine spare parts",
      "Annual maintenance options",
      "Appliance troubleshooting",
      "Warranty & replacement assistance",
    ],
  },
];

const WhatWeOfferSection = () => {
  return (
    <div className=" w-full min-h-screen relative">
      <div className=" w-full flex flex-col justify-center items-center relative z-30">
        <h1 className="md:text-[52px] text-[24px] text-center diamond-text leading-none font-semibold font-raleway">
          Why Choose Kandeth?
        </h1>
        <p className="text-[16px] md:text-[28px] mt-5 font-light font-roboto text-center">
          Experience the difference of working with
          <br /> Kerala&apos;s trusted kitchen experts
        </p>
        <section className="relative w-full py-24 overflow-hidden">
          {/* Background glow */}

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-8 font-raleway">
            {services.map((service) => (

              <div
                key={service.id}
                className={`rounded-2xl flex flex-col justify-between p-8 border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.05)_57%,rgba(255,255,255,0.05)_61%,rgba(255,255,255,0)_79%,rgba(255,255,255,0.02)_99%)] hover:bg-[linear-gradient(135deg,rgba(206,25,25,0.02)_0%,rgba(206,25,25,0)_40%,rgba(206,25,25,0.05)_57%,rgba(206,25,25,0.05)_61%,rgba(206,25,25,0)_79%,rgba(206,25,25,0.02)_99%)] cursor-pointer hover:border-[#CE1919]/15 hover:-translate-y-10 transition-all duration-500`}
              >
                <h3 className="text-white font-medium text-[20px]">
                  {service.title}
                </h3>

                <p className="mt-4 text-white/50 text-sm">
                  {service.description}
                </p>

                <div className="mt-6">
                  <div className="flex justify-between gap-2 items-center mb-6">
                    <span className="h-0.5 w-full bg-white/10"></span>
                    <p className="text-base shrink-0 uppercase tracking-widest text-white/40">
                      Service Highlights
                    </p>
                    <span className="h-0.5 w-full bg-white/10"></span>
                  </div>

                  <ul className="space-y-3">
                    {service.highlights.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-white/60 text-sm"
                      >
                        <span className="mt-1 w-4 h-4 rounded-full bg-linear-to-b from-[#CE1919]/20 to-[#560909]/20 shrink-0 flex justify-center items-center">
                          <Check size={10} className="text-[#680C0C]" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatWeOfferSection;

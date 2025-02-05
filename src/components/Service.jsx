import { Truck, Shield, Award, Leaf } from "lucide-react";

export default function Service() {
  return (
    <section className="py-16 bg-amber-100 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {[
          {
            icon: <Truck size={32} />, // Adjusted size for better visibility
            title: "Free Shipping",
            desc: "On orders over $50",
          },
          {
            icon: <Shield size={32} />, // Adjusted size
            title: "100% Pure",
            desc: "Quality guaranteed",
          },
          {
            icon: <Award size={32} />, // Adjusted size
            title: "Award Winning",
            desc: "Best honey 2023",
          },
          {
            icon: <Leaf size={32} />,
            title: "Organic",
            desc: "Natural goodness",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl text-center shadow-md"
          >
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-200 text-amber-500 border-4 border-amber-500">
              {service.icon}
            </div>
            <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

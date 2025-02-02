import { Truck, Shield, Award, Leaf } from "lucide-react";

export default function Service() {
  return (
    <section className="py-16 bg-amber-100 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {[
          {
            icon: <Truck />,
            title: "Free Shipping",
            desc: "On orders over $50",
          },
          {
            icon: <Shield />,
            title: "100% Pure",
            desc: "Quality guaranteed",
          },
          {
            icon: <Award />,
            title: "Award Winning",
            desc: "Best honey 2023",
          },
          { icon: <Leaf />, title: "Organic", desc: "Natural goodness" },
        ].map((service, i) => (
          <div key={i} className="bg-white p-6 rounded-xl text-center">
            <div className="text-amber-500 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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

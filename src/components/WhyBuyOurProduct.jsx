import {
  CheckCircle,
  DollarSign,
  Headphones,
  Shield,
  Truck,
  Award,
} from "lucide-react";

const WhyBuyOurProduct = () => {
  const features = [
    {
      icon: <CheckCircle className="text-green-500 w-12 h-12" />,
      title: "High Quality",
      description:
        "Crafted with the finest materials, ensuring durability and long-lasting performance.",
    },
    {
      icon: <DollarSign className="text-yellow-500 w-12 h-12" />,
      title: "Affordable Pricing",
      description:
        "We offer competitive pricing without compromising on quality, making it accessible for everyone.",
    },
    {
      icon: <Headphones className="text-blue-500 w-12 h-12" />,
      title: "24/7 Support",
      description:
        "We provide round-the-clock customer support to assist you with any questions or issues.",
    },
    {
      icon: <Shield className="text-purple-500 w-12 h-12" />,
      title: "Secure & Reliable",
      description:
        "Our product ensures the highest level of security and reliability for your peace of mind.",
    },
    {
      icon: <Truck className="text-red-500 w-12 h-12" />,
      title: "Fast Delivery",
      description:
        "Get your product delivered quickly and hassle-free with our trusted delivery partners.",
    },
    {
      icon: <Award className="text-amber-500 w-12 h-12" />,
      title: "Award Winning",
      description:
        "Recognized by industry experts for outstanding quality and service.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-amber-50 to-amber-100 py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Why Choose Our Product?
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Here are some compelling reasons why our product is the best choice
          for you.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBuyOurProduct;

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faqq() {
  const [openFaq, setOpenFaq] = useState(null);

  const scrollToOrder = () => {
    const orderSection = document.querySelector("#order-section");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      question: "আপনার মধুর বিশেষত্ব কী?",
      answer:
        "আমাদের মধু ১০০% খাঁটি, কাঁচা এবং স্থানীয় মৌমাছির খামার থেকে সংগ্রহ করা। আমরা কঠোর মান নিয়ন্ত্রণ ও ঐতিহ্যবাহী সংগ্রহ পদ্ধতি অনুসরণ করি।",
    },
    {
      question: "মধুর মেয়াদ কতদিন?",
      answer:
        "যথাযথভাবে সংরক্ষিত হলে আমাদের মধুর মেয়াদ অনির্দিষ্টকালীন। এটি সময়ের সাথে জমাট বাঁধতে পারে, তবে হালকা গরম করলে এটি তরল অবস্থায় ফিরে আসবে।",
    },
    {
      question: "আপনার মধু কি অর্গানিক?",
      answer:
        "হ্যাঁ, আমাদের মধু প্রত্যয়িত অর্গানিক, যা কীটনাশকমুক্ত নিরাপদ পরিবেশ থেকে সংগ্রহ করা হয়।",
    },
    {
      question: "মধু সংরক্ষণের সঠিক উপায় কী?",
      answer:
        "মধু একটি ঠান্ডা, শুকনো স্থানে সংরক্ষণ করা উচিত এবং সোজা অবস্থায় শক্ত ঢাকনাযুক্ত কাচের বয়ামে রাখা ভালো।",
    },
    {
      question: "মধু কি শিশুদের খাওয়ানো যায়?",
      answer:
        "এক বছরের কম বয়সী শিশুদের মধু খাওয়ানো উচিত নয়, কারণ এতে বোটুলিজম ব্যাকটেরিয়া থাকতে পারে যা শিশুর জন্য ক্ষতিকর।",
    },
    {
      question: "আপনার মধুর উৎপত্তি কোথা থেকে?",
      answer:
        "আমাদের মধু বাংলাদেশের বিভিন্ন জৈব কৃষি অঞ্চল থেকে সংগ্রহ করা হয়, যেখানে মৌমাছিগুলো ফুল থেকে খাঁটি ও প্রাকৃতিকভাবে মধু সংগ্রহ করে।",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
          প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-amber-200">
              <button
                className="w-full text-left py-4 px-4 flex justify-between items-center focus:outline-none bg-amber-100 hover:bg-amber-200 rounded-lg transition-all"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openFaq === index
                    ? "max-h-40 opacity-100 bg-white px-4 py-2 rounded-lg"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Centered Buy Now Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={scrollToOrder}
            className="bg-amber-500 hover:bg-amber-600 px-6 py-2 rounded-full flex items-center gap-2 text-white font-medium"
          >
            এখনি কিনুন
          </button>
        </div>
      </div>
    </section>
  );
}

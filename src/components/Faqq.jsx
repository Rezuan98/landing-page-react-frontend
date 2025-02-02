import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function Faqq() {
  const [openFaq, setOpenFaq] = useState(null); // Remove <number | null>

  const faqs = [
    {
      question: "What makes your honey special?",
      answer:
        "Our honey is 100% pure, raw, and sourced from pristine local apiaries. We maintain strict quality controls and traditional harvesting methods.",
    },
    {
      question: "How long does the honey last?",
      answer:
        "Our honey has an indefinite shelf life when properly stored in a cool, dry place. It naturally crystallizes over time but can be gently warmed to restore liquid form.",
    },
    {
      question: "Is your honey organic?",
      answer:
        "Yes, our honey is certified organic, harvested from hives placed in protected areas far from pesticide use.",
    },
  ];
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-amber-200">
              <button
                className="w-full text-left py-4 flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`transform transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <p className="pb-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

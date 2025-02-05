import { Phone, ShoppingCart } from "lucide-react";
export default function Header() {
  const scrollToOrder = () => {
    const orderSection = document.querySelector("#order-section");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="bg-amber-900/90 text-white py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Pure Honey</div>
        <div className="hidden md:flex items-center gap-2">
          <Phone size={20} />
          <span>+8801768261278</span>
        </div>
        <button
          onClick={scrollToOrder}
          className="bg-amber-500 hover:bg-amber-600 px-6 py-2 rounded-full flex items-center gap-2"
        >
          <ShoppingCart size={20} />
          Buy Now
        </button>
      </div>
    </header>
  );
}

export default function Title() {
  const scrollToOrder = () => {
    const orderSection = document.querySelector("#order-section");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
        Pure Natural Honey
        <br />
        From Natures Heart
      </h1>
      <p className="text-amber-800 mb-8 text-lg">
        Experience the pure, golden goodness of our premium honey. Harvested
        with care, delivered with love.
      </p>
      <button
        onClick={scrollToOrder}
        className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
      >
        Order Now
      </button>
    </div>
  );
}

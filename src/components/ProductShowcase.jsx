import img1 from "../assets/honey.jpg";

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-amber-100 px-6">
      <div className="container mx-auto grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <img
            src={img1}
            alt="Premium Honey Product"
            className="rounded-lg w-full h-[500px] object-cover"
          />
        </div>
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            Special Offer!
          </h2>
          <p className="text-lg mb-4">
            Get 20% off on your first purchase. Pure, natural honey straight
            from the hive to your table.
          </p>
          <div className="text-2xl font-bold text-amber-500 mb-6">
            $24.99
            <span className="text-lg line-through text-gray-500 ml-2">
              $29.99
            </span>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold w-full">
            Claim Offer
          </button>
        </div>
      </div>
    </section>
  );
}

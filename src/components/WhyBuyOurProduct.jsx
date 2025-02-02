const WhyBuyOurProduct = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Why Choose Our Product?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Here are some compelling reasons why our product is the best choice
          for you.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reason 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-semibold text-gray-900">
              High Quality
            </h3>
            <p className="mt-2 text-gray-600">
              Our product is crafted with the finest materials, ensuring
              durability and long-lasting performance.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-900">
              Affordable Pricing
            </h3>
            <p className="mt-2 text-gray-600">
              We offer competitive pricing without compromising on quality,
              making it accessible for everyone.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold text-gray-900">
              Eco-Friendly
            </h3>
            <p className="mt-2 text-gray-600">
              Our product is environmentally friendly, helping you reduce your
              carbon footprint.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-gray-900">
              24/7 Support
            </h3>
            <p className="mt-2 text-gray-600">
              We provide round-the-clock customer support to assist you with any
              questions or issues.
            </p>
          </div>

          {/* Reason 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-gray-900">
              Innovative Design
            </h3>
            <p className="mt-2 text-gray-600">
              Our product features a sleek, modern design that stands out and
              enhances your experience.
            </p>
          </div>

          {/* Reason 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">😊</div>
            <h3 className="text-xl font-semibold text-gray-900">
              Satisfaction Guaranteed
            </h3>
            <p className="mt-2 text-gray-600">
              We offer a 100% satisfaction guarantee, so you can buy with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBuyOurProduct;

export default function Order() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
          Place Your Order
        </h2>
        <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Quantity</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
          >
            Submit Order
          </button>
        </form>
      </div>
    </section>
  );
}

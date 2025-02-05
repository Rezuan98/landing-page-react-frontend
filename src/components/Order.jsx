import { useState } from "react";
import axios from "axios";

const Order = () => {
  const [quantity, setQuantity] = useState(1);
  const [shippingOption, setShippingOption] = useState("outside");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const productPrice = 500;
  const insideDhakaShipping = 80;
  const outsideDhakaShipping = 140;

  const subtotal = quantity * productPrice;
  const shippingCost =
    shippingOption === "inside" ? insideDhakaShipping : outsideDhakaShipping;
  const total = subtotal + shippingCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post("http://your-api-url/api/orders", {
        ...formData,
        quantity,
        shipping_option: shippingOption,
        subtotal,
        shipping_cost: shippingCost,
        total,
      });

      if (response.data.status === "success") {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          city: "",
          address: "",
        });
        setQuantity(1);
        setShippingOption("outside");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order-section" className="py-16 px-6">
      <div className="max-w-4xl mx-auto p-6 bg-amber-50 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-8 text-amber-900">
          অর্ডার করতে আপনার সঠিক তথ্য দিয়ে নিচের ফর্মটি সম্পূর্ণ পূরন করুন।
        </h2>
        <p className="text-center mb-8 text-amber-800">
          (আগে থেকে কোন টাকা দেয়া লাগবে না। প্রোডাক্ট হাতে পাবার পর টাকা দিবেন)
        </p>

        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Order placed successfully! We will contact you soon.
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Billing Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Billing Details</h3>

              <div>
                <label className="block mb-2">আপনার নাম লিখুন *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">
                  আপনার মোবাইল নাম্বারটি লিখুন *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">আপনার শহরের নাম লিখুন *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">
                  আপনার সম্পূর্ণ ঠিকানা লিখুন *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
                  rows="4"
                  required
                />
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Your Order</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">পরিমাণ (কেজি)</span>
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 bg-amber-100 rounded"
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 bg-amber-100 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>সাবটোটাল</span>
                    <span>{subtotal} টাকা</span>
                  </div>

                  <div className="mb-4">
                    <span className="block mb-2">Shipping</span>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingOption === "inside"}
                          onChange={() => setShippingOption("inside")}
                          className="mr-2"
                        />
                        ঢাকার ভিতরে: {insideDhakaShipping} টাকা
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingOption === "outside"}
                          onChange={() => setShippingOption("outside")}
                          className="mr-2"
                        />
                        ঢাকার বাহিরে: {outsideDhakaShipping} টাকা
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between border-t pt-4 font-semibold">
                    <span>Total</span>
                    <span>{total} টাকা</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2">ক্যাশ অন ডেলিভারি</h4>
                  <p className="text-gray-600 text-sm">
                    পণ্য হাতে পেয়ে ডেলিভারি ম্যানকে পেমেন্ট করতে পারবেন।
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg mt-6 font-semibold disabled:opacity-50"
                >
                  {loading
                    ? "Processing..."
                    : `অর্ডার কনফার্ম করুন - ${total} টাকা`}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Order;

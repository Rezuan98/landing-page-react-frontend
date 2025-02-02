import WhyBuyOurProduct from "./components/WhyBuyOurProduct";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Service from "./components/Service";
import Faqq from "./components/Faqq";
import ProductShowcase from "./components/ProductShowcase";
import Order from "./components/Order";
import SocialIcon from "./components/SocialIcon";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Hero />
        </div>
      </section>

      {/* Service Section */}
      <Service />

      {/* FAQ Section */}

      <Faqq />
      {/* Product Showcase */}
      <ProductShowcase />

      <WhyBuyOurProduct />
      {/* Order Form */}
      <Order />

      {/* Social Media */}
      <SocialIcon />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

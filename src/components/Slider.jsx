import { useState } from "react";
import img1 from "../assets/slider/1.jpg";
import img3 from "../assets/slider/3.jpg";
import img4 from "../assets/slider/4.jpg";
const slides = [img1, img3, img4];

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Debugging: Log the current slide and image paths
  console.log("Current Slide:", currentSlide);
  console.log("Image Paths:", slides);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <img
          src={slides[currentSlide]}
          alt="Honey product"
          className="w-full h-[400px] object-cover"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white/100 transition-colors"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white/100 transition-colors"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

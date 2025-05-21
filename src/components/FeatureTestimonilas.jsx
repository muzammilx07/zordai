import React from "react";
import Slider from "react-slick";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial data
const testimonials = [
  {
    quote:
      "Working with Zordie on our hiring platform was a seamless experience. They understood our vision and delivered beyond expectations.",
    name: "Michael Chen",
    title: "Store Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Zordie helped streamline our entire hiring process. The AI-driven filtering saved us weeks of manual work!",
    name: "Rachel Smith",
    title: "HR Manager",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "Our cost-per-hire dropped significantly thanks to Zordie. Highly recommended for modern recruiting.",
    name: "James Lee",
    title: "Talent Lead",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
  >
    <ChevronLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
  >
    <ChevronRight size={20} />
  </button>
);

// Slider Component
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full py-16 bg-white">
      {/* Badge */}
      <div className="text-center mb-4">
        <span className="inline-block px-4 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full">
          Trusted by Industry Leaders
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">
        What Our Clients Say
      </h2>

      {/* Slider */}
      <div className="relative max-w-4xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i}>
              <div className="bg-gray-50 p-8 rounded-lg shadow text-center relative">
                <Quote className="mx-auto text-gray-300 mb-4" size={32} />
                <p className="italic text-gray-700 max-w-2xl mx-auto mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;

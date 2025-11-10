import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import '../../src/index.css'
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";

const images = [event1, event2, event3, event4];

const Gallery = () => {
  return (
    <section className="gallery-section py-20 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-indigo-800 mb-6">
        Event Gallery
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Explore moments from our past social development events.
      </p>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-8 slider"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;

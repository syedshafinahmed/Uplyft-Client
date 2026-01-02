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
import event5 from "../assets/event5.png";
import event6 from "../assets/event6.png";
import event7 from "../assets/event7.png";
import event8 from "../assets/event8.png";
import event9 from "../assets/event9.png";
import event10 from "../assets/event10.png";

const images = [event1, event2, event3, event4, event5, event6, event7, event8, event9, event10];

const Gallery = () => {
  return (
    <section className="gallery-section py-20 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-indigo-800 dark:text-violet-600 mb-6">
        Event Gallery
      </h2>
      <p className="text-gray-500 font-bold max-w-2xl mx-auto mb-12">
        Explore moments from our past social development events.
      </p>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
          }}
          className="slider"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-2xl shadow-lg mb-10">
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="w-full h-60 rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
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

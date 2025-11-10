import React, { useEffect } from "react";
// import AOS from 'aos';
// import "aos/dist/aos.css";
const Newsletter = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  //   setTimeout(() => AOS.refresh(), 100);
  // }, []);
  return (
    <section className="py-20 px-6 flex justify-center">
      <div data-aos="fade-up" className="bg-violet-200 rounded-3xl shadow-2xl p-20 max-w-3xl w-full text-center border-2 border-indigo-800">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">Stay Updated!</h2>
        <p className="text-gray-800 mb-8">Subscribe to our newsletter and never miss upcoming events and community updates.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input type="email" placeholder="Enter your email" className="w-full sm:w-2/3 px-6 py-3 rounded-full text-gray-800 border border-indigo-800 outline-0" />
          <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 hover:scale-105 transition-all">Subscribe</button>
        </div>
        <p className="text-gray-800 mt-4 text-sm">We respect your privacy. No spam ever.</p>
      </div>
    </section>
  );
};

export default Newsletter;

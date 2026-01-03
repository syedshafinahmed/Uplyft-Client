import React from "react";

const Newsletter = () => {
  return (
    <section className="py-24 px-4 flex justify-center">
      <div className="relative max-w-7xl w-full h-120 rounded-3xl overflow-hidden shadow-2xl">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/GppLhJCB/premium-photo-1661277890047-53356eb1b1fd.avif)",
          }}
        />

        <div
          className="absolute inset-0 bg-linear-to-r 
          from-transparent via-indigo-800/70 to-indigo-800
          dark:from-transparent dark:via-black/70 dark:to-black"
        />


        {/* Content */}
        <div className="relative flex justify-end">
          <div className="w-full lg:w-1/2 p-8 sm:p-14">
            <div className="p-8 sm:p-12">

              <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-violet-600 mb-4">
                Stay Updated
              </h2>

              <p className="text-white dark:text-gray-400 mb-8 leading-relaxed">
                Subscribe to our newsletter to receive the latest updates on
                events, community initiatives, and important announcements
                directly in your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-transparent focus:border-indigo-800 focus:dark:border-violet-600 focus:ring-2 focus:ring-indigo-800 focus:dark:ring-violet-600 outline-none transition"
                />
                <button className="px-8 py-3 rounded-full border border-white dark:border-gray-900 bg-indigo-600 dark:bg-violet-600 text-white dark:text-gray-900 font-semibold hover:bg-indigo-700 hover:dark:bg-violet-600 hover:scale-105 transition-all">
                  Subscribe
                </button>
              </div>

              <p className="text-xs text-white dark:text-gray-400 mt-5">
                We respect your privacy. No spam.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

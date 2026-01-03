import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [allEventTypes, setAllEventTypes] = useState([]);

  //  pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch("https://uplyft-server.vercel.app/events")
      .then((res) => res.json())
      .then((data) => {
        const types = Array.from(new Set(data.map((e) => e.event_type))).sort();
        setAllEventTypes(types);
      })
      .catch((err) => console.error("Error fetching all event types:", err));
  }, []);

  useEffect(() => {
    setLoading(true);
    setCurrentPage(1);

    const params = new URLSearchParams();
    if (selectedType) params.append("type", selectedType);
    if (searchQuery) params.append("search", searchQuery);

    fetch(`https://uplyft-server.vercel.app/events?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, [searchQuery, selectedType]);

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  const renderSkeleton = () => (
    <div className="max-w-7xl mx-auto mt-10 px-5 md:px-0 animate-pulse">
      {/* Header */}
      <div className="h-10 md:h-14 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-6 md:h-8 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mb-10"></div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full md:w-1/3"></div>
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full md:w-1/4"></div>
      </div>

      {/* Event cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pb-40">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-2xl shadow-md border border-indigo-800/20 dark:border-violet-600/20"
            >
              <div className="w-full h-46 bg-gray-300 dark:bg-gray-700 rounded-t-2xl"></div>
              <div className="p-5 space-y-2">
                <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
                <div className="flex justify-between mt-4">
                  <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                  <div className="flex gap-2">
                    <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                    <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  if (loading) return renderSkeleton();

  //  pagination calculations
  const reversedEvents = [...events].reverse();
  const totalPages = Math.ceil(reversedEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = reversedEvents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0">
      {/* HEADER */}
      <div className="text-start mt-10 mb-8">
        <p className="text-2xl md:text-5xl font-extrabold text-indigo-800 dark:text-violet-600">
          Where Moments Become Memories!
        </p>
        <p className="text-xl mt-2 font-semibold text-indigo-800 dark:text-violet-600">
          Join events that bring people together.
        </p>
      </div>

      {/* SEARCH & FILTER */}
      <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-4 mb-10">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search events by name..."
            className="input border border-indigo-800 outline-none input-bordered w-full rounded-full pr-28"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-linear-to-b from-indigo-800 to-violet-500 text-base-200 text-xs font-semibold px-6 py-3 rounded-tr-full rounded-br-full"
          >
            Search
          </button>
        </div>

        <select
          className="select select-bordered outline-0 border border-indigo-800 rounded-full w-full md:w-1/4"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Filter Event Type</option>
          {allEventTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* EVENTS GRID */}
      {currentEvents.length === 0 ? (
        <p className="text-center text-gray-600 text-lg min-h-screen">
          No events found.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 px-5 md:px-0 gap-5 pb-20">
            {currentEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center items-center gap-2 pb-40">
            {/* Previous */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`btn btn-sm transition-all
      ${currentPage === 1
                  ? "bg-gray-500 text-white cursor-not-allowed"
                  : "bg-indigo-800 dark:bg-violet-600 text-white dark:text-gray-900 hover:opacity-90"
                }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages).keys()].map((num) => {
              const page = num + 1;
              const isActive = currentPage === page;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`btn btn-sm transition-all
          ${isActive
                      ? "bg-indigo-800 dark:bg-violet-600 text-white dark:text-gray-900 hover:opacity-90"
                      : "bg-gray-500 text-white dark:text-gray-900 hover:opacity-80"
                    }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`btn btn-sm transition-all
      ${currentPage === totalPages
                  ? "bg-gray-500 text-white cursor-not-allowed"
                  : "bg-indigo-800 dark:bg-violet-600 text-white dark:text-gray-900 hover:opacity-90"
                }`}
            >
              Next
            </button>
          </div>


        </>
      )}
    </div>
  );
};

export default AllEvents;

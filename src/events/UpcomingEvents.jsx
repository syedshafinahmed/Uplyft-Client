import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import { Link } from "react-router";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [allEventTypes, setAllEventTypes] = useState([]);

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

  // Skeleton loader for the whole page
  const renderSkeleton = () => (
    <div className="max-w-7xl mx-auto mt-10 px-5 md:px-0 animate-pulse">
      {/* Header */}
      <div className="h-10 md:h-14 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-6 md:h-8 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mb-10"></div>

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

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0">
      <div className="text-start mt-10 mb-8">
        <p className="text-2xl md:text-5xl font-extrabold text-indigo-800 dark:text-violet-600">
          Get Ready for What's Coming!
        </p>
        <p className="text-xl mt-2 font-semibold text-indigo-800 dark:text-violet-600">
          Something inspiring awaits.
        </p>
      </div>



      {events.length === 0 ? (
        <p className="text-center text-gray-600 text-lg min-h-screen">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 px-5 md:px-0 gap-5">
          {events.slice(0, 4).map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
      <div className="text-end mt-10 pb-40">
        <Link to='/all-events' className="btn bg-base-200 border border-indigo-800 dark:border-violet-600  text-indigo-800 dark:text-violet-600 text-xs font-semibold rounded-full">
          View All Events
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;

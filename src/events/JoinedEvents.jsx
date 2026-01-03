import React, { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const JoinedEvents = () => {
  const { user, loading } = useContext(AuthContext);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [fetching, setFetching] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      Swal.fire({
        icon: "info",
        title: "Login Required",
        text: "You must be logged in to view joined events.",
        confirmButtonColor: "#4F46E5",
      }).then(() => navigate("/login"));
      return;
    }

    setFetching(true);
    fetch(`https://uplyft-server.vercel.app/joined/${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setJoinedEvents(data))
      .catch((err) =>
        console.error("Error fetching joined events:", err)
      )
      .finally(() => setFetching(false));
  }, [user, loading, navigate]);

  const renderSkeleton = () => {
    return Array(4)
      .fill(0)
      .map((_, index) => (
        <div
          key={index}
          className="bg-base-200 mt-20 mb-20 rounded-2xl shadow-md animate-pulse border border-indigo-800/20 dark:border-violet-600/20"
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
      ));
  };

  if (loading || fetching) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
        {renderSkeleton()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black mb-8 text-center bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">
          Events I have joined
        </h1>

        {joinedEvents.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">
            You haven’t joined any events yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-30">
            {joinedEvents.map((event) => (
              <div key={event.id} className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-indigo-800/20 dark:border-violet-600/20">
                <figure className="overflow-hidden rounded-t-2xl">
                  <img
                    src={event.thumbnail_url}
                    alt={event.title}
                    className="w-full h-46 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </figure>

                <div className="p-5 space-y-2 text-left">
                  <h2 className="text-sm font-bold text-indigo-800 dark:text-violet-600 line-clamp-2">{event.title}</h2>

                  <div className="text-xs space-y-0.5">
                    <p><span className="font-bold text-black dark:text-white">Date:</span> {event.event_date}</p>
                    <p className='line-clamp-1'><span className="font-bold text-black dark:text-white">Location:</span> {event.location}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center bg-base-200 text-indigo-800 dark:text-violet-600 border border-indigo-800 dark:border-violet-600 font-semibold text-xs px-3 py-1 rounded-full">
                      {event.event_type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinedEvents;

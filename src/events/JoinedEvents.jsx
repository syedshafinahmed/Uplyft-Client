import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router";

const JoinedEvents = () => {
  const { user, loading } = use(AuthContext);
  const [joinedEvents, setJoinedEvents] = useState([]);
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

    fetch(`http://localhost:3000/joined/${user.email}`)
      .then(res => res.json())
      .then(data => setJoinedEvents(data))
      .catch(err => console.error("Error fetching joined events:", err));
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading your joined events...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black mb-8 text-center bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">
          My Joined Events
        </h1>

        {joinedEvents.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">
            You haven’t joined any events yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20 pb-30">
            {joinedEvents.map(event => (
              // <EventCard key={event._id} event={event} />
              <div key={event._id} className="bg-violet-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-violet-400/40">
                <figure className="overflow-hidden rounded-t-2xl">
                  <img
                    src={event.thumbnail_url}
                    alt={event.title}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </figure>

                <div className="p-5 space-y-2 text-left">
                  <h2 className="text-lg font-bold text-indigo-800">{event.title}</h2>

                  <div className="text-sm text-gray-500 space-y-0.5">
                    <p><span className="font-bold text-gray-800">Date:</span> {event.event_date}</p>
                    <p><span className="font-bold text-gray-800">Location:</span> {event.location}</p>
                  </div>

                  <span className="inline-block bg-base-200 text-violet-500 font-semibold text-xs px-3 py-1 rounded-full mt-2">
                    {event.event_type}
                  </span>
                  <div className="text-sm text-gray-500 space-y-0.5">
                    <p><span className="font-medium text-xs text-gray-800">Created by:</span> {event.created_by}</p>
                  </div>

                  <p className="line-clamp-2 text-sm text-gray-700">{event.description}</p>

                  <NavLink to={`/event-details/${event.eventId}`} className="btn w-full mt-4 py-2 border-none rounded-full bg-linear-to-b from-indigo-800 to-violet-500 text-base-200 text-sm font-semibold hover:from-indigo-500 hover:to-violet-700 transition-all duration-300">
                    View Event
                  </NavLink>
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

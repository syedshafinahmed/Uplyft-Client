import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { use } from "react";
import { NavLink } from "react-router";

const ManageEvents = () => {
  const { user } = use(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/events/user/${user.email}`)
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(error => console.log(error));
  }, [user.email]);

  return (
    <div className="bg-base-200 pt-10 pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">
          Manage Your Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20 px-5 md:px-0">
          {events.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">
              You haven't created any events yet.
            </p>
          ) : (
            events.map(event => (

              <div className="bg-violet-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-violet-400/40">
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

                  <NavLink to={`/event-details/${event._id}`} className="btn w-full mt-4 py-2 border-none rounded-full bg-linear-to-b from-indigo-800 to-violet-500 text-base-200 text-sm font-semibold hover:from-indigo-500 hover:to-violet-700 transition-all duration-300">
                    Update Event
                  </NavLink>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;

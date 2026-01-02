import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router";
import { Tooltip } from "@mui/material";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";

const ManageEvents = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://uplyft-server.vercel.app/events/user/${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [user.email]);

  const renderSkeleton = () => {
    return Array(4)
      .fill(0)
      .map((_, index) => (
        <div
          key={index}
          className="bg-base-200 rounded-2xl shadow-md animate-pulse border border-indigo-800/20 dark:border-violet-600/20"
        >
          <div className="w-full h-56 bg-gray-300 dark:bg-gray-700 rounded-t-2xl"></div>
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
  

  return (
    <div className="bg-base-200 pt-10 pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">
          Manage Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-10 px-5 md:px-0">
          {loading
            ? renderSkeleton()
            : events.length === 0
            ? (
              <p className="text-center text-gray-600 text-lg">
                You haven't created any events yet.
              </p>
            )
            : events.map((event) => (
              <div
                key={event._id}
                className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-indigo-800/20 dark:border-violet-600/20"
              >
                <figure className="overflow-hidden rounded-t-2xl">
                  <img
                    src={event.thumbnail_url}
                    alt={event.title}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </figure>
                <div className="p-5 space-y-2 text-left">
                  <h2 className="text-sm font-bold text-indigo-800 dark:text-violet-600 line-clamp-2">
                    {event.title}
                  </h2>

                  <div className="text-xs space-y-0.5">
                    <p>
                      <span className="font-bold text-black dark:text-white">
                        Date:
                      </span>{" "}
                      {event.event_date}
                    </p>
                    <p className="line-clamp-1">
                      <span className="font-bold text-black dark:text-white">
                        Location:
                      </span>{" "}
                      {event.location}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center bg-base-200 text-indigo-800 dark:text-violet-600 border border-indigo-800 dark:border-violet-600 font-semibold text-xs px-3 py-1 rounded-full">
                      {event.event_type}
                    </span>

                    <div className="flex">
                      <Tooltip title="View Event Details" arrow>
                        <NavLink
                          to={`/event-details/${event._id}`}
                          className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-indigo-800 dark:hover:bg-violet-600 
               transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                          aria-label="View event details"
                        >
                          <BsBoxArrowUpRight className="text-indigo-800 dark:text-violet-600 group-hover:text-white transition-colors duration-300" />
                        </NavLink>
                      </Tooltip>

                      <Tooltip title="Update Event" arrow>
                        <NavLink
                          to={`/update-events/${event._id}`}
                          className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-indigo-800 dark:hover:bg-violet-600 
               transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                          aria-label="Edit event"
                        >
                          <FiEdit3 className="text-indigo-800 dark:text-violet-600 group-hover:text-white transition-colors duration-300" />
                        </NavLink>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;

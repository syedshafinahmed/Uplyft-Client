import React from 'react';
import { NavLink } from 'react-router';

const EventCard = ({ event }) => {
  const { title, thumbnail_url, event_type, event_date, location, description, created_by, _id } = event;

  return (
    <div className="bg-violet-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-violet-400/40">
      <figure className="overflow-hidden rounded-t-2xl">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
      </figure>

      <div className="p-5 space-y-2 text-left">
        <h2 className="text-lg font-bold text-indigo-800">{title}</h2>

        <div className="text-sm text-gray-500 space-y-0.5">
          <p><span className="font-bold text-gray-800">Date:</span> {event_date}</p>
          <p><span className="font-bold text-gray-800">Location:</span> {location}</p>
        </div>

        <span className="inline-block bg-base-200 text-violet-500 font-semibold text-xs px-3 py-1 rounded-full mt-2">
          {event_type}
        </span>
        <div className="text-sm text-gray-500 space-y-0.5">
          <p><span className="font-medium text-xs text-gray-800">Created by:</span> {created_by}</p>
        </div>

        <p className="line-clamp-2 text-sm text-gray-700">{description}</p>

        <NavLink to={`/event-details/${_id}`} className="btn w-full mt-4 py-2 border-none rounded-full bg-linear-to-b from-indigo-800 to-violet-500 text-base-200 text-sm font-semibold hover:from-indigo-500 hover:to-violet-700 transition-all duration-300">
          View Event
        </NavLink>
      </div>
    </div>
  );
};

export default EventCard;

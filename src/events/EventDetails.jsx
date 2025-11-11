import React from 'react';
import { useLoaderData } from 'react-router';
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaTag } from "react-icons/fa";

const EventDetails = () => {
  const event = useLoaderData();
  const { title, event_type, description, location, thumbnail_url, event_date, created_by } = event;
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-violet-200 shadow-xl rounded-2xl overflow-hidden border-2 border-indigo-800">

        <div className="h-64 md:h-96 w-full overflow-hidden">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 space-y-4">
          <h1 className="text-4xl font-extrabold bg-linear-to-r from-indigo-800 to-violet-500 bg-clip-text text-transparent">
            {title}
          </h1>

          <div className="flex flex-wrap gap-3 text-gray-800">
            <span className="flex items-center gap-2 font-medium">
              <FaTag className="text-indigo-600" /> {event_type}
            </span>

            <span className="flex items-center gap-2 font-medium">
              <FaCalendarAlt className="text-indigo-600" /> {event_date}
            </span>

            <span className="flex items-center gap-2 font-medium">
              <FaMapMarkerAlt className="text-indigo-600" /> {location}
            </span>

            <span className="flex items-center gap-2 font-medium">
              <FaUser className="text-indigo-600" /> Hosted by: {created_by}
            </span>
          </div>

          <hr className="my-4 border-base-200" />

          <p className="text-sm text-justify leading-relaxed text-gray-800">
            {description}
          </p>

          <div className="pt-6">
            <button className="btn border-none rounded-full w-full bg-linear-to-b from-indigo-800 to-violet-500 text-base-200">
              Join This Event
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventDetails;
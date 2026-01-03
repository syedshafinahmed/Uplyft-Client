import { Tooltip } from '@mui/material';
import React from 'react';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { NavLink } from 'react-router';

const EventCard = ({ event }) => {
  const { title, thumbnail_url, event_type, event_date, location, description, created_by, _id } = event;

  return (
    <div className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-indigo-800/20 dark:border-violet-600/20">
      <figure className="overflow-hidden rounded-t-2xl">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-46 object-cover transition-transform duration-500 hover:scale-110"
        />
      </figure>

      <div className="p-5 space-y-2 text-left">
        <h2 className="text-sm font-bold text-indigo-800 dark:text-violet-600 line-clamp-2">{title}</h2>

        <div className="text-xs space-y-0.5">
          <p><span className="font-bold text-black dark:text-white">Date:</span> {event_date}</p>
          <p className='line-clamp-1'><span className="font-bold text-black dark:text-white">Location:</span> {location}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center bg-base-200 text-indigo-800 dark:text-violet-600 border border-indigo-800 dark:border-violet-600 font-semibold text-xs px-3 py-1 rounded-full">
            {event_type}
          </span>

          <Tooltip title="View Event Details" arrow>
            <NavLink
              to={`/event-details/${_id}`}
              className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-indigo-800 dark:hover:bg-violet-600 
               transition-all duration-300"
              aria-label="View event details"
            >
              <BsBoxArrowUpRight
                className="text-indigo-800 dark:text-violet-600 
                 group-hover:text-white 
                 transition-colors duration-300"
              />
            </NavLink>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

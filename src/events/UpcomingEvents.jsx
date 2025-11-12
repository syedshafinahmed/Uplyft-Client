import React from 'react';
import { useLoaderData } from 'react-router';
import EventCard from './EventCard';

const UpcomingEvents = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className='max-w-7xl mx-auto'>
      <p className="text-2xl md:text-3xl mt-15 pb-3 text-center font-extrabold bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">Get Ready for What's Coming!</p>
      <p className=" text-center font-medium bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">Something inspiring awaits.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20 pb-40 px-5 md:px-0'>
        {
          data.map(event => <EventCard key={event._id} event={event}></EventCard>)
        }
      </div>
    </div>
  );
};

export default UpcomingEvents;
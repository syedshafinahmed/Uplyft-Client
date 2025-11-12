import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import { BeatLoader } from 'react-spinners';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [allEventTypes, setAllEventTypes] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:3000/events') 
      .then(res => res.json())
      .then(data => {
        const types = Array.from(new Set(data.map(e => e.event_type))).sort();
        setAllEventTypes(types); 
      })
      .catch(err => console.error('Error fetching all event types:', err));
  }, []);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (selectedType) params.append('type', selectedType);
    if (searchQuery) params.append('search', searchQuery);

    fetch(`http://localhost:3000/events?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching events:', err);
        setLoading(false);
      });
  }, [searchQuery, selectedType]);

  const handleSearch = () => {
    setSearchQuery(searchTerm); 
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BeatLoader color="#4338CA" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0">
      <div className="text-center mt-10 mb-8">
        <p className="text-2xl md:text-3xl font-extrabold bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">
          Get Ready for What's Coming!
        </p>
        <p className="text-md font-medium bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">
          Something inspiring awaits.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-5 gap-4 mb-10">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search events by name..."
            className="input border border-indigo-800 outline-none input-bordered w-full rounded-full pr-28"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-linear-to-b from-indigo-800 to-violet-500 text-base-200 text-xs font-bold px-6 py-1 rounded-full hover:from-violet-500 hover:to-indigo-800"
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
          {allEventTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {events.length === 0 ? (
        <p className="text-center text-gray-600 text-lg min-h-screen">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-40">
          {events.map(event => <EventCard key={event._id} event={event} />)}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;

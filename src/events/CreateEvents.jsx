import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateEvents = () => {
  const [eventDate, setEventDate] = useState(null);

  return (
    <div className="hero bg-base-200 min-h-screen pt-10 pb-40">
      <div className="card bg-base-200 border-2 border-indigo-800 w-xl mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-10">
          <h2 className="text-3xl text-center font-black mb-6 bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">
            Create New Event
          </h2>

          <form className="space-y-4">
            <div>
              <label className="label font-semibold text-gray-700 mb-2">Event Title</label>
              <input
                type="text"
                name="title"
                required
                placeholder="Enter event title"
                className="input w-full rounded-full focus:border-0 focus:outline-indigo-800"
              />
            </div>

            <div>
              <label className="label font-semibold text-gray-700 mb-2">Event Type</label>
              <select
                name="event_type"
                required
                defaultValue=""
                className="select w-full rounded-full focus:border-0 focus:outline-indigo-800"
              >
                <option value="" disabled>Select event type</option>
                <option value="Cleanup">Cleanup</option>
                <option value="Plantation">Plantation</option>
                <option value="Donation">Donation</option>
                <option value="Awareness">Awareness</option>
                <option value="Workshop">Workshop</option>
                <option value="Seminar">Seminar</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="label font-semibold block text-gray-700 mb-2">Event Date </label>
              <DatePicker
                selected={eventDate}
                onChange={(date) => setEventDate(date)}
                minDate={new Date()}
                placeholderText="Select event date"
                className="input w-full rounded-full focus:border-0 focus:outline-indigo-800"
                dateFormat="MMMM d, yyyy"
              />
            </div>

            <div>
              <label className="label font-semibold text-gray-700 mb-2">Location</label>
              <input
                type="text"
                name="location"
                required
                placeholder="Enter event location"
                className="input w-full rounded-full focus:border-0 focus:outline-indigo-800"
              />
            </div>

            <div>
              <label className="label font-semibold text-gray-700 mb-2">Thumbnail URL</label>
              <input
                type="url"
                name="thumbnail_url"
                required
                placeholder="https://example.com/image.jpg"
                className="input w-full rounded-full focus:border-0 focus:outline-indigo-800"
              />
            </div>

            <div>
              <label className="label font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                rows="5"
                required
                placeholder="Enter event description"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-indigo-800"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn w-full rounded-full bg-linear-to-b from-indigo-800 to-violet-500 text-base-200 mt-3"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvents;

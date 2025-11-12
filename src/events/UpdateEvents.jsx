import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateEvents = () => {
  const event = useLoaderData();
  const { title, event_type, description, location, thumbnail_url, event_date, _id } = event;
  const [eventDate, setEventDate] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = eventDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      location: e.target.location.value,
      thumbnail_url: e.target.thumbnail_url.value,
      event_type: e.target.event_type.value,
      event_date: formattedDate,
    }

    fetch(`http://localhost:3000/events/${_id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then(res => res.json())
      .then(data => {
        Swal.fire({
          icon: 'success',
          title: 'Event Updated Successfully!',
          text: `${formData.title} has been updated.`,
          confirmButtonColor: '#4F46E5',
        })
        navigate('/upcoming-events');
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div className="hero bg-base-200 min-h-screen pt-10 pb-40">
      <div className="card bg-base-200 border-2 border-indigo-800 w-xl mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-10">
          <h2 className="text-3xl text-center font-black mb-6 bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">
            Update Existing Event
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label font-semibold text-gray-700 mb-2">Event Title</label>
              <input
                type="text"
                name="title"
                defaultValue={title}
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
                defaultValue={event_type}
                className="select w-full rounded-full focus:border-0 focus:outline-indigo-800"
              >
                <option value="" disabled>Select event type</option>
                <option value="Cleanup">Cleanup</option>
                <option value="Plantation">Plantation</option>
                <option value="Donation">Donation</option>
                <option value="Awareness">Awareness</option>
                <option value="Workshop">Workshop</option>
                <option value="Seminar">Seminar</option>
                <option value="Other">Others</option>
              </select>
            </div>

            <div>
              <label className="label font-semibold block text-gray-700 mb-2">Event Date </label>
              <DatePicker
                selected={eventDate}
                onChange={(date) => setEventDate(date)}
                minDate={new Date()}
                defaultValue={event_date}
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
                defaultValue={location}
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
                defaultValue={thumbnail_url}
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
                defaultValue={description}
                required
                placeholder="Enter event description"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-indigo-800"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn w-full rounded-full bg-linear-to-b from-indigo-800 to-violet-500 text-base-200 mt-3"
            >
              Update Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEvents;
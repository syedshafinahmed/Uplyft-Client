import React, { use, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const CreateEvents = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [eventDate, setEventDate] = useState(null);
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
      event_type: e.target.event_type.value,
      thumbnail_url: e.target.thumbnail_url.value,
      location: e.target.location.value,
      event_date: formattedDate,
      created_by: user.email,
    }
    fetch('https://uplyft-server.vercel.app/events', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(res => res.json())
      .then(data => {
        Swal.fire({
          icon: 'success',
          title: 'Event Created Successfully!',
          text: `${formData.title} has been added.`,
          confirmButtonColor: '#4F46E5',
        }).then(() => {
          navigate('/upcoming-events');
        });
        e.target.reset();
        setEventDate(null);
        // console.log(data)
      }).catch(error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });


  }

  return (
    <div className="hero bg-base-200 min-h-screen pt-10 pb-40">
      <div className="card bg-base-200 border-2 border-indigo-800 w-xl mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-10">
          <h2 className="text-3xl text-center font-black mb-6 bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">
            Create New Event
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
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
                <option value="Other">Others</option>
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

import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaTag } from "react-icons/fa";
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const EventDetails = () => {
  const event = useLoaderData();
  const { title, event_type, description, location, thumbnail_url, event_date, created_by, _id } = event;
  const { user } = use(AuthContext);
  const userEmail = user?.email;
  const navigate = useNavigate();
  const [isJoined, setIsJoined] = useState(false);
  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:3000/joined/${userEmail}`)
      .then(res => res.json())
      .then(data => {
        const alreadyJoined = data.some((j) => j.eventId === _id);
        setIsJoined(alreadyJoined);
      })
      .catch((error) => {
        console.error("Error checking joined status:", error);
      });
  }, [_id, user]);

  const handleJoinEvent = () => {
    if (!userEmail) {
      Swal.fire({
        icon: "info",
        title: "Login Required",
        text: "You must be logged in to join this event.",
        confirmButtonColor: "#4F46E5",
      }).then(() => navigate('/login', { state: { from: `/event-details/${_id}` } }));
      return;
    }

    const joinedEvent = {
      eventId: _id,
      title,
      event_type,
      description,
      location,
      thumbnail_url,
      event_date,
      created_by,
      user_email: userEmail,
      joinedAt: new Date().toISOString(),
    };

    fetch("http://localhost:3000/joined", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinedEvent),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Successfully Joined!",
          text: `You have joined "${title}".`,
          confirmButtonColor: "#4F46E5",
        });
        setIsJoined(true);
        navigate("/joined-events");
      })
      .catch((err) => {
        console.error("Join error:", err);
        Swal.fire({
          icon: "error",
          title: "Join Failed",
          text: "Something went wrong. Please try again later.",
        });
      });

  }
  return (
    <div className="min-h-screen bg-base-200 pt-12 pb-40 px-4">
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
            <button
              onClick={handleJoinEvent}
              disabled={isJoined}
              className={`btn border-none rounded-full w-full ${isJoined
                ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                : "bg-linear-to-b from-indigo-800 to-violet-500 text-base-200 hover:from-indigo-500 hover:to-violet-700"
                }`}
            >
              {isJoined ? "Already Joined" : "Join This Event"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventDetails;
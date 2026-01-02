import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaTag } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import EventCard from "./EventCard";

const EventDetails = () => {
  const event = useLoaderData();
  const {
    title,
    event_type,
    description,
    location,
    thumbnail_url,
    event_date,
    created_by,
    _id,
  } = event;

  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const navigate = useNavigate();

  const [isJoined, setIsJoined] = useState(false);
  const [loading, setLoading] = useState(true);
  const [similarEvents, setSimilarEvents] = useState([]);

  // Check if user already joined this event
  useEffect(() => {
    if (!userEmail) {
      setLoading(false);
      return;
    }

    const token = localStorage.getItem("token"); // Firebase token
    fetch(`https://uplyft-server.vercel.app/joined/${userEmail}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const alreadyJoined = Array.isArray(data)
          ? data.some((j) => j.eventId === _id)
          : false;
        setIsJoined(alreadyJoined);
      })
      .catch((err) => console.error("Error checking joined events:", err))
      .finally(() => setLoading(false));
  }, [_id, userEmail]);

  // Fetch similar events by type
  useEffect(() => {
    fetch(
      `https://uplyft-server.vercel.app/events/type/${encodeURIComponent(
        event_type
      )}`
    )
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const filtered = data.filter((ev) => ev._id !== _id);
          setSimilarEvents(filtered);
        } else {
          setSimilarEvents([]);
        }
      })
      .catch((err) => console.error("Error fetching similar events:", err));
  }, [_id, event_type]);

  const handleJoinEvent = () => {
    if (!userEmail) {
      Swal.fire({
        icon: "info",
        title: "Login Required",
        text: "You must be logged in to join this event.",
        confirmButtonColor: "#4F46E5",
      }).then(() =>
        navigate("/login", { state: { from: `/event-details/${_id}` } })
      );
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

    setLoading(true);

    fetch("https://uplyft-server.vercel.app/joined", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(joinedEvent),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId || result.success) {
          Swal.fire({
            icon: "success",
            title: "Successfully Joined!",
            text: `You have joined "${title}".`,
            confirmButtonColor: "#4F46E5",
          });
          setIsJoined(true);
          navigate("/joined-events");
        } else {
          Swal.fire({
            icon: "warning",
            title: "Already Joined",
            text: "You’ve already joined this event.",
          });
          setIsJoined(true);
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Join Failed",
          text: "Something went wrong. Please try again later.",
        });
      })
      .finally(() => setLoading(false));
  };

  // Full page skeleton loader
  const renderSkeleton = () => (
    <div className="min-h-screen bg-base-200 pt-10 pb-32 px-4 animate-pulse max-w-7xl mx-auto">
      {/* Image + Description */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-6">
        <div className="col-span-1 w-full h-64 md:h-96 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
        <div className="col-span-2 flex flex-col gap-4">
          <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* Attributes + Join Button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div className="flex flex-wrap gap-3">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded-full"
              ></div>
            ))}
        </div>
        <div className="h-10 w-40 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      </div>

      {/* Similar Events */}
      <div>
        <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-60 bg-gray-300 dark:bg-gray-700 rounded-2xl"
              ></div>
            ))}
        </div>
      </div>
    </div>
  );

  if (loading) return renderSkeleton();

  return (
    <div className="min-h-screen bg-base-200 pt-10 pb-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Image + Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="col-span-1 w-full h-64 md:h-96 rounded-xl overflow-hidden">
            <img
              src={thumbnail_url}
              alt={title}
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-start p-4 sm:p-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-indigo-800 dark:text-violet-600 mb-4">
              {title}
            </h1>
            <p className="text-sm leading-relaxed font-medium text-black dark:text-white text-justify">
              {description}
            </p>
          </div>
        </div>

        {/* Attributes + Join Button */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-3 relative static">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-800 dark:border-violet-600 text-indigo-800 dark:text-violet-600 text-xs font-bold">
              <FaTag className="text-sm" />
              {event_type}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-800 dark:border-violet-600 text-indigo-800 dark:text-violet-600 text-xs font-bold">
              <FaCalendarAlt className="text-sm" />
              {event_date}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-800 dark:border-violet-600 text-indigo-800 dark:text-violet-600 text-xs font-bold">
              <FaMapMarkerAlt className="text-sm" />
              {location}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-800 dark:border-violet-600 text-indigo-800 dark:text-violet-600 text-xs font-bold">
              <FaUser className="text-sm" />
              <strong>Created By:</strong> {created_by}
            </span>
          </div>

          <button
            onClick={handleJoinEvent}
            disabled={isJoined}
            className={`font-bold text-sm sm:text-base transition-colors px-4 py-3 rounded-full ${
              isJoined
                ? "text-gray-500 cursor-not-allowed"
                : "text-indigo-800 dark:text-violet-600 hover:bg-indigo-800 hover:text-base-200"
            }`}
          >
            {isJoined ? "Already Joined" : "Join Event →"}
          </button>
        </div>

        <div className="mt-10">
          <h2 className="text-xl text-indigo-800 dark:text-violet-600 font-bold mb-4">
            Similar Events
          </h2>
          {similarEvents.length ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {similarEvents.map((ev) => (
                <EventCard key={ev._id} event={ev} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No similar events available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

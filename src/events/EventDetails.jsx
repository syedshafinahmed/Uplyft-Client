// import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData, useNavigate } from "react-router";
// import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaTag } from "react-icons/fa";
// import { AuthContext } from "../context/AuthContext";
// import Swal from "sweetalert2";
// import { BeatLoader } from "react-spinners";

// const EventDetails = () => {
//   const event = useLoaderData();
//   const { title, event_type, description, location, thumbnail_url, event_date, created_by, _id } = event;

//   const { user } = useContext(AuthContext);
//   const userEmail = user?.email;
//   const navigate = useNavigate();

//   const [isJoined, setIsJoined] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!userEmail) {
//       setLoading(false);
//       return;
//     }

//     fetch(`https://uplyft-server.vercel.app/joined/${userEmail}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const alreadyJoined = data.some((j) => j.eventId === _id);
//         setIsJoined(alreadyJoined);
//       })
//       .catch((error) => console.error("Error checking joined status:", error))
//       .finally(() => setLoading(false));
//   }, [_id, userEmail]);


//   const handleJoinEvent = () => {
//     if (!userEmail) {
//       Swal.fire({
//         icon: "info",
//         title: "Login Required",
//         text: "You must be logged in to join this event.",
//         confirmButtonColor: "#4F46E5",
//       }).then(() =>
//         navigate("/login", { state: { from: `/event-details/${_id}` } })
//       );
//       return;
//     }

//     const joinedEvent = {
//       eventId: _id,
//       title,
//       event_type,
//       description,
//       location,
//       thumbnail_url,
//       event_date,
//       created_by,
//       user_email: userEmail,
//       joinedAt: new Date().toISOString(),
//     };

//     setLoading(true);

//     fetch("https://uplyft-server.vercel.app/joined", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(joinedEvent),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.insertedId || result.success) {
//           Swal.fire({
//             icon: "success",
//             title: "Successfully Joined!",
//             text: `You have joined "${title}".`,
//             confirmButtonColor: "#4F46E5",
//           });
//           setIsJoined(true);
//           navigate("/joined-events");
//         } else {
//           Swal.fire({
//             icon: "warning",
//             title: "Already Joined",
//             text: "You’ve already joined this event.",
//           });
//           setIsJoined(true);
//         }
//       })
//       .catch((err) => {
//         console.error("Join error:", err);
//         Swal.fire({
//           icon: "error",
//           title: "Join Failed",
//           text: "Something went wrong. Please try again later.",
//         });
//       })
//       .finally(() => setLoading(false));
//   };

//   if (loading) {
//     <div className="flex justify-center items-center min-h-screen">
//       <BeatLoader color="#db2777" />
//     </div>
//   }

//   return (
//     <div className="min-h-screen bg-base-200 pt-12 pb-40 px-4">
//       <div className="max-w-4xl mx-auto bg-violet-200 shadow-xl rounded-2xl overflow-hidden border-2 border-indigo-800">
//         <div className="h-64 md:h-96 w-full overflow-hidden">
//           <img
//             src={thumbnail_url}
//             alt={title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="p-8 space-y-4">
//           <h1 className="text-4xl font-extrabold bg-linear-to-r from-indigo-800 to-violet-500 bg-clip-text text-transparent">
//             {title}
//           </h1>

//           <div className="flex flex-wrap gap-3 text-gray-800">
//             <span className="flex items-center gap-2 font-medium">
//               <FaTag className="text-indigo-600" /> {event_type}
//             </span>
//             <span className="flex items-center gap-2 font-medium">
//               <FaCalendarAlt className="text-indigo-600" /> {event_date}
//             </span>
//             <span className="flex items-center gap-2 font-medium">
//               <FaMapMarkerAlt className="text-indigo-600" /> {location}
//             </span>
//             <span className="flex items-center gap-2 font-medium">
//               <FaUser className="text-indigo-600" /> Hosted by: {created_by}
//             </span>
//           </div>

//           <hr className="my-4 border-base-200" />

//           <p className="text-sm text-justify leading-relaxed text-gray-800">
//             {description}
//           </p>

//           <div className="pt-6">
//             <button
//               onClick={handleJoinEvent}
//               disabled={isJoined}
//               className={`btn border-none rounded-full w-full ${isJoined
//                   ? "bg-gray-400 text-gray-800 cursor-not-allowed"
//                   : "bg-linear-to-b from-indigo-800 to-violet-500 text-base-200 hover:from-indigo-500 hover:to-violet-700"
//                 }`}
//             >
//               {isJoined ? "Already Joined" : "Join This Event"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;













// import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData, useNavigate } from "react-router";
// import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaTag } from "react-icons/fa";
// import { AuthContext } from "../context/AuthContext";
// import Swal from "sweetalert2";
// import { BeatLoader } from "react-spinners";

// const EventDetails = () => {
//   const event = useLoaderData();
//   const {
//     title,
//     event_type,
//     description,
//     location,
//     thumbnail_url,
//     event_date,
//     created_by,
//     _id,
//   } = event;

//   const { user } = useContext(AuthContext);
//   const userEmail = user?.email;
//   const navigate = useNavigate();

//   const [isJoined, setIsJoined] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!userEmail) {
//       setLoading(false);
//       return;
//     }

//     fetch(`https://uplyft-server.vercel.app/joined/${userEmail}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const alreadyJoined = data.some((j) => j.eventId === _id);
//         setIsJoined(alreadyJoined);
//       })
//       .catch(() => { })
//       .finally(() => setLoading(false));
//   }, [_id, userEmail]);

//   const handleJoinEvent = () => {
//     if (!userEmail) {
//       Swal.fire({
//         icon: "info",
//         title: "Login Required",
//         text: "You must be logged in to join this event.",
//         confirmButtonColor: "#4F46E5",
//       }).then(() =>
//         navigate("/login", { state: { from: `/event-details/${_id}` } })
//       );
//       return;
//     }

//     const joinedEvent = {
//       eventId: _id,
//       title,
//       event_type,
//       description,
//       location,
//       thumbnail_url,
//       event_date,
//       created_by,
//       user_email: userEmail,
//       joinedAt: new Date().toISOString(),
//     };

//     setLoading(true);

//     fetch("https://uplyft-server.vercel.app/joined", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(joinedEvent),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.insertedId || result.success) {
//           Swal.fire({
//             icon: "success",
//             title: "Successfully Joined!",
//             text: `You have joined "${title}".`,
//             confirmButtonColor: "#4F46E5",
//           });
//           setIsJoined(true);
//           navigate("/joined-events");
//         } else {
//           Swal.fire({
//             icon: "warning",
//             title: "Already Joined",
//             text: "You’ve already joined this event.",
//           });
//           setIsJoined(true);
//         }
//       })
//       .catch(() => {
//         Swal.fire({
//           icon: "error",
//           title: "Join Failed",
//           text: "Something went wrong. Please try again later.",
//         });
//       })
//       .finally(() => setLoading(false));
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <BeatLoader color="#4F46E5" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-base-200 pt-1 pb-40">
//       <div className="max-w-7xl mx-auto">

//         {/* Image + Description */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
//           <div className="h-64 sm:h-72 md:h-full rounded-xl overflow-hidden">
//             <img
//               src={thumbnail_url}
//               alt={title}
//               className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
//             />
//           </div>

//           <div className="flex flex-col justify-between h-80 md:h-full p-6">
//             <div>
//               <h1 className="text-3xl lg:text-4xl font-extrabold text-indigo-800 dark:text-violet-600 mb-4">
//                 {title}
//               </h1>
//               <p className="text-sm leading-relaxed font-medium text-gray-600 text-justify">
//                 {description}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Attributes + Join Button */}
//         <div className="mt-6 pb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">

//           {/* Attributes */}
//           <div className="flex flex-wrap gap-3">
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-800 dark:border-violet-600 text-indigo-800 dark:text-violet-600 text-xs font-bold bg-transparent">
//               <FaTag className="text-sm" />
//               {event_type}
//             </span>

//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-800 dark:border-violet-600 text-indigo-800 dark:text-violet-600 text-xs font-bold bg-transparent">
//               <FaCalendarAlt className="text-sm" />
//               {event_date}
//             </span>

//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-800 dark:border-violet-600 text-indigo-800 dark:text-violet-600 text-xs font-bold bg-transparent">
//               <FaMapMarkerAlt className="text-sm" />
//               {location}
//             </span>

//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-800 dark:border-violet-600 text-indigo-800 dark:text-violet-600 text-xs font-bold bg-transparent">
//               <FaUser className="text-sm" />
//               {created_by}
//             </span>
//           </div>

//           <button
//             onClick={handleJoinEvent}
//             disabled={isJoined}
//             className={`font-bold text-sm sm:text-base transition-colors px-4 py-3 rounded-xl ${isJoined
//                 ? "text-gray-500 cursor-not-allowed"
//                 : "text-indigo-800 dark:text-violet-600 hover:bg-indigo-800 hover:text-base-200"
//               }`}
//           >
//             {isJoined ? "Already Joined" : "Join Event →"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;















import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaTag } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { BeatLoader } from "react-spinners";

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

  useEffect(() => {
    if (!userEmail) {
      setLoading(false);
      return;
    }

    fetch(`https://uplyft-server.vercel.app/joined/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        const alreadyJoined = data.some((j) => j.eventId === _id);
        setIsJoined(alreadyJoined);
      })
      .finally(() => setLoading(false));
  }, [_id, userEmail]);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BeatLoader color="#4F46E5" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 pt-5 pb-32 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Image + Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Image */}
          <div className="w-full h-64 sm:h-72 md:h-120 rounded-xl overflow-hidden">
            <img
              src={thumbnail_url}
              alt={title}
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col justify-start p-4 sm:p-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-indigo-800 dark:text-violet-600 mb-4">
              {title}
            </h1>
            <p className="text-sm leading-relaxed font-medium text-gray-600 text-justify">
              {description}
            </p>
          </div>
        </div>

        {/* Attributes + Join Button */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Attributes (explicitly NOT sticky) */}
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
              <FaUser className="text-sm" /><strong>Created By:</strong>{created_by}
            </span>
          </div>

          {/* Join Button */}
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
      </div>
    </div>
  );
};

export default EventDetails;

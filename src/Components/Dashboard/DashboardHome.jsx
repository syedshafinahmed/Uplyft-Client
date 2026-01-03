import React, { useEffect, useState, useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaRegCalendarAlt, FaRegCalendarCheck, FaRegCalendarPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";
import EventCard from "../../events/EventCard";
import { Tooltip } from "@mui/material";

const DashboardHome = () => {
  const { user, loading } = useContext(AuthContext);
  const [joinedCount, setJoinedCount] = useState(0);
  const [createdCount, setCreatedCount] = useState(0);
  const [upcomingCount, setUpcomingCount] = useState(0);
  const [latestJoined, setLatestJoined] = useState(null);
  const [latestCreated, setLatestCreated] = useState(null);
  const [fetching, setFetching] = useState(true);

  const CountUp = ({ value, duration = 3000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = Math.ceil(value / (duration / 16));

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value, duration]);

    return <>{count}</>;
  };

  useEffect(() => {
    if (loading) return;

    if (!user) {
      Swal.fire({
        icon: "info",
        title: "Login Required",
        text: "You must be logged in to view the dashboard.",
        confirmButtonColor: "#4F46E5",
      });
      return;
    }

    setFetching(true);

    const fetchJoined = fetch(`https://uplyft-server.vercel.app/joined/${user.email}`, {
      headers: { authorization: `Bearer ${user.accessToken}` },
    }).then((res) => res.json());

    const fetchCreated = fetch(`https://uplyft-server.vercel.app/events/user/${user.email}`, {
      headers: { authorization: `Bearer ${user.accessToken}` },
    }).then((res) => res.json());

    const fetchUpcoming = fetch(
      `https://uplyft-server.vercel.app/events`
    ).then((res) => res.json());

    Promise.all([fetchJoined, fetchCreated, fetchUpcoming])
      .then(([joinedData, createdData, upcomingData]) => {
        setJoinedCount(joinedData.length);
        setCreatedCount(createdData.length);
        setUpcomingCount(upcomingData.length);
        setLatestJoined(joinedData[0] || null);
        setLatestCreated(createdData?.at(-1) ?? null);
      })
      .catch((err) => console.error(err))
      .finally(() => setFetching(false));
  }, [user, loading]);

  const renderSkeletonCard = () => (
    <div className="bg-base-200 rounded-2xl shadow-lg p-6 flex items-center justify-between animate-pulse h-[104px]">
      <div className="space-y-3 w-full">
        <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
      <div className="h-14 w-14 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
    </div>
  );

  const renderContentSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Latest Created Event Skeleton */}
      <div className="space-y-4 animate-pulse">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="bg-base-200 rounded-2xl shadow-md h-56"></div>
      </div>

      {/* Latest Joined Event Skeleton */}
      <div className="space-y-4 animate-pulse">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="bg-base-200 rounded-2xl shadow-md h-56"></div>
      </div>

      {/* Quick Links Skeleton */}
      <div className="space-y-4 animate-pulse">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="flex flex-col gap-3 mt-4">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"
              ></div>
            ))}
        </div>
      </div>
    </div>
  );



  return (
    <div className="p-6">
      <h1 className="text-4xl font-medium mb-8 text-center bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">
        Welcome back <strong>{user?.displayName || "User"}</strong>!
      </h1>

      {/* Count Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {fetching ? (
          <>
            {renderSkeletonCard()}
            {renderSkeletonCard()}
            {renderSkeletonCard()}
          </>
        ) : (
          <>
            <div className="bg-linear-to-r from-indigo-800 to-indigo-400 dark:from-violet-600 dark:to-violet-400 rounded-2xl shadow-lg p-6 flex items-center justify-between text-white dark:text-gray-900 hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-md font-semibold">Events Created</p>
                  <Tooltip title="View All Created Events" arrow>
                    <Link to="/manage-events" className="hover:scale-110 transition-transform duration-300">
                      <FiArrowUpRight />
                    </Link>
                  </Tooltip>
                </div>
                <p className="text-4xl font-bold"><CountUp value={createdCount} /></p>
              </div>
              <div className="text-6xl opacity-40">
                <FaRegCalendarPlus />
              </div>
            </div>

            <div className="bg-linear-to-r from-indigo-800 to-indigo-400 dark:from-violet-600 dark:to-violet-400 rounded-2xl shadow-lg p-6 flex items-center justify-between text-white dark:text-gray-900 hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-md font-semibold">Events Joined</p>
                  <Tooltip title="View All Joined Events" arrow>
                    <Link to="/joined-events" className="hover:scale-110 transition-transform duration-300">
                      <FiArrowUpRight />
                    </Link>
                  </Tooltip>
                </div>
                <p className="text-4xl font-bold"><CountUp value={joinedCount} /></p>
              </div>
              <div className="text-6xl opacity-40">
                <FaRegCalendarCheck />
              </div>
            </div>

            <div className="bg-linear-to-r from-indigo-800 to-indigo-400 dark:from-violet-600 dark:to-violet-400 rounded-2xl shadow-lg p-6 flex items-center justify-between text-white dark:text-gray-900 hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-md font-semibold">Upcoming Events</p>
                  <Tooltip title="View Upcoming Events" arrow>
                    <Link to="/upcoming-events">
                      <FiArrowUpRight />
                    </Link>
                  </Tooltip>
                </div>
                <p className="text-4xl font-bold"><CountUp value={upcomingCount} /></p>
              </div>
              <FaRegCalendarAlt className="text-6xl opacity-40" />
            </div>
          </>
        )}
      </div>

      {/* Latest Events */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {fetching ? (
          <>
            {renderContentSkeleton()}
          </>
        ) : (
          <>
            {/* Latest Created Event */}
            {latestCreated ? (
              <div className="space-y-4">
                <p className="text-sm font-medium">Latest Event you Created</p>
                <EventCard event={latestCreated} />
              </div>
            ) : (
              <p className="text-center text-gray-500">No created events yet.</p>
            )}

            {/* Latest Joined Event */}
            {latestJoined ? (
              <div className="space-y-4">
                <p className="text-sm font-medium">Your Next Scheduled Event</p>
                <EventCard event={latestJoined} />
              </div>
            ) : (
              <p className="text-center text-gray-500">No joined events yet.</p>
            )}

            <div>
              <p className="text-sm font-medium">Quick Links</p>
              <div className="flex flex-col gap-3 mt-4">
                <Link to="/all-events" className="text-indigo-800 dark:text-violet-600 text-sm font-semibold hover:underline">All Events</Link>
                <Link to="/upcoming-events" className="text-indigo-800 dark:text-violet-600 text-sm font-semibold hover:underline">Upcoming Events</Link>
                <Link to="/manage-events" className="text-indigo-800 dark:text-violet-600 text-sm font-semibold hover:underline">Events you created</Link>
                <Link to="/joined-events" className="text-indigo-800 dark:text-violet-600 text-sm font-semibold hover:underline">Events you joined</Link>
                <Link to="/create-event" className="text-indigo-800 dark:text-violet-600 text-sm font-semibold hover:underline">Create New Event</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;


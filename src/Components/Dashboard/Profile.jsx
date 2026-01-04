import React, { use, useState } from "react";
import { FaEnvelope, FaUserEdit, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import Swal from "sweetalert2";

const Profile = () => {
  const { user } = use(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateName = async () => {
    if (!name.trim()) return;

    try {
      setLoading(true);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      setIsEditing(false);

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your name has been updated successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

    } catch (err) {
      console.error("Failed to update name:", err);

      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Something went wrong. Please try again.",
      });

    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="bg-gray-50 dark:bg-gray-900 px-4 py-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent">
            My Profile
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Manage your personal information and account details
          </p>
        </div>

        <div className="bg-white items-center dark:bg-gray-800 rounded-3xl shadow-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex flex-col items-center text-center">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <div className="spin-border absolute inset-0 rounded-full"></div>
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt={user?.displayName || "User Avatar"}
                className="w-26 h-26 rounded-full object-cover relative z-10"
              />
            </div>

            {isEditing ? (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-4 text-center px-3 py-1 rounded-lg border outline-none focus:ring-2 ring-indigo-800 dark:ring-violet-600 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
              />
            ) : (
              <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-100">
                {user?.displayName || "User"}
              </h2>
            )}

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Event Coordinator
            </p>

            {isEditing ? (
              <button
                onClick={handleUpdateName}
                disabled={loading}
                className="mt-2 flex items-center gap-2 btn btn-xs rounded-xl bg-green-600 text-white"
              >
                <FaCheck />
                {loading ? "Saving..." : "Save"}
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="mt-2 flex items-center gap-2 btn btn-xs rounded-xl bg-indigo-800 dark:bg-violet-600 text-white"
              >
                <FaUserEdit />
                Edit
              </button>
            )}
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Full Name
                </p>
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  {user?.displayName || "User"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Email Address
                </p>
                <p className="font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                  <FaEnvelope />
                  {user?.email || "No Email Provided"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Location
                </p>
                <p className="font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                  <FaMapMarkerAlt />
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Member Since
                </p>
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  January 2024
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

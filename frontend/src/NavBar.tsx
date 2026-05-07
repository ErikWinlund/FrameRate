import React from "react";
import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className=" sticky w-full bg-[#020617] text-white px-6 py-4 flex items-center justify-between">
      <div className="text-xl text-[#E11D48] font-bold tracking-wide">
        FrameRate
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <button
            onClick={logout}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300 transition">
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

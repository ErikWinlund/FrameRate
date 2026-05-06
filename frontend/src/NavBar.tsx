import React from "react";

function Navbar() {
  return (
    <nav className=" sticky w-full bg-[#020617] text-white px-6 py-4 flex items-center justify-between">
      <div className="text-xl text-[#E11D48] font-bold tracking-wide">
        FrameRate
      </div>

      <div className="flex items-center gap-4">
        <button className="hover:text-gray-300 transition">Sign In</button>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

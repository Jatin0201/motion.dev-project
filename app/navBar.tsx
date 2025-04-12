"use client";
import { JSX } from "react";
import { FaHome, FaCog, FaUser, FaSignInAlt } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className="w-full">
      {/* BlazeCode Centered */}
      <h1 className="text-3xl font-bold text-center mt-4 mb-2">BlazeCode</h1>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-2 bg-transparent">
        {/* Left side */}
        <div className="flex gap-6 items-center">
          <NavItem icon={<FaHome />} label="Home" />
          <NavItem icon={<FaCog />} label="Settings" />
        </div>

        {/* Right side */}
        <div className="flex gap-6 items-center">
          <NavItem icon={<FaSignInAlt />} label="Login/Signup" />
          <NavItem icon={<FaUser />} label="Profile" />
        </div>
      </nav>
    </div>
  );
}

interface NavItemProps {
  icon: JSX.Element;
  label: string;
}

function NavItem({ icon, label }: NavItemProps) {
  return (
    <div className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-black">
      {/* Icon */}
      <span className="text-xl">{icon}</span>

      {/* Label (hidden on small screens) */}
      <span className="hidden md:inline text-base">{label}</span>
    </div>
  );
}

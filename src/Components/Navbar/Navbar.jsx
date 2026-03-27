import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaVideo,
  FaUserGraduate,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Live Classes", path: "/live", icon: <FaVideo /> },
    { name: "My Learning", path: "/learning", icon: <FaUserGraduate /> },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">EduLearn</h1>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden md:flex gap-8 items-center font-medium">

          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className="flex items-center gap-2 hover:text-indigo-600"
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}

          {/* 🔥 COURSES MULTI DROPDOWN */}
          <li className="relative group">
            <button className="flex items-center gap-2 hover:text-indigo-600">
              <FaBook /> Courses
              <FaChevronDown className="text-sm" />
            </button>

            {/* Main Dropdown */}
            <div className="absolute left-0 top-full bg-white shadow-xl rounded-xl py-2 w-64 z-50 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              {/* ===== Teachers ===== */}
              <div className="relative group/teacher">
                <div className="flex justify-between items-center px-4 py-2 hover:bg-indigo-50 cursor-pointer">
                  👩‍🏫 Classes for Teachers
                  <FaChevronRight />
                </div>

                {/* Submenu */}
                <div className="absolute left-full top-0 bg-white shadow-xl rounded-xl py-2 w-56 border opacity-0 invisible group-hover/teacher:opacity-100 group-hover/teacher:visible">
                  <Link
                    to="/teachers-45days"
                    className="block px-4 py-2 hover:bg-indigo-50"
                  >
                    Course for 45 Days
                  </Link>

                  <Link
                    to="/teachers-3months"
                    className="block px-4 py-2 hover:bg-indigo-50"
                  >
                    Course for 3 Months
                  </Link>
                </div>
              </div>

              {/* ===== Students ===== */}
              <div className="relative group/student">
                <div className="flex justify-between items-center px-4 py-2 hover:bg-indigo-50 cursor-pointer">
                  🎓 Classes for Students
                  <FaChevronRight />
                </div>

                {/* Submenu */}
                <div className="absolute left-full top-0 bg-white shadow-xl rounded-xl py-2 w-56 border opacity-0 invisible group-hover/student:opacity-100 group-hover/student:visible">
                  <Link
                    to="/students-45days"
                    className="block px-4 py-2 hover:bg-indigo-50"
                  >
                    Course for 45 Days
                  </Link>

                  <Link
                    to="/students-3months"
                    className="block px-4 py-2 hover:bg-indigo-50"
                  >
                    Course for 3 Months
                  </Link>
                </div>
              </div>

            </div>
          </li>
        </ul>

        {/* ================= AUTH BUTTONS ================= */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/login"
            className="border px-4 py-1 rounded-lg font-semibold hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-indigo-600 text-white px-4 py-1 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Sign Up
          </Link>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="md:hidden text-2xl text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow">
          <ul className="flex flex-col gap-4 font-medium">

            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.icon} {item.name}
                </Link>
              </li>
            ))}

            {/* Mobile Courses Dropdown */}
            <li>
              <button
                className="flex items-center gap-2 w-full"
                onClick={() => setCourseOpen(!courseOpen)}
              >
                <FaBook /> Courses
                <FaChevronDown />
              </button>

              {courseOpen && (
                <div className="pl-6 mt-2 space-y-2 text-sm">
                  <p className="font-semibold">👩‍🏫 Teachers</p>
                  <Link to="/teachers-45days">Course for 45 Days</Link>
                  <Link to="/teachers-3months">Course for 3 Months</Link>

                  <p className="font-semibold mt-2">🎓 Students</p>
                  <Link to="/students-45days">Course for 45 Days</Link>
                  <Link to="/students-3months">Course for 3 Months</Link>
                </div>
              )}
            </li>
          </ul>

          <div className="flex gap-3 mt-4">
            <Link to="/login" className="border px-4 py-1 rounded-lg w-full text-center">
              Login
            </Link>
            <Link to="/signup" className="bg-indigo-600 text-white px-4 py-1 rounded-lg w-full text-center">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
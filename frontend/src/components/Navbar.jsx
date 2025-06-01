import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">My App</div>
      <div className="space-x-6">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold border-b-2 border-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold border-b-2 border-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Register
        </NavLink>
      </div>
    </nav>
  )
}

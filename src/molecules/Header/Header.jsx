import React from "react"
import { NavLink } from "react-router-dom"
export const Header = () => {
  return (
    <ul className="flex bg-black">
      <li className="p-5">
        <NavLink
          activeClassName="underline text-blue-400"
          className="text-white hover:text-blue-400 text-lg"
          exact
          to="/"
        >
          Table
        </NavLink>
      </li>
      <li className="p-5">
        <NavLink
          activeClassName="underline text-blue-400"
          className="text-white hover:text-blue-400 text-lg"
          to="/find-matching-character"
        >
          Find Matching Character
        </NavLink>
      </li>
      <li className="p-5">
        <NavLink
          activeClassName="underline text-blue-400"
          className="text-white hover:text-blue-400 text-lg"
          to="/find-matching-pronunciation"
        >
          Find Matching Pronunciation
        </NavLink>
      </li>
    </ul>
  )
}

import React from "react"
import { NavLink } from "react-router-dom"
export const Header = () => {
  return (
    <ul className="flex">
      <li className="mr-6">
        <NavLink className="text-black" to="/">
          Table
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink className="text-black" to="/match-sound-to-character">
          Match Sound to Character
        </NavLink>
      </li>
    </ul>
  )
}

import React from "react"
import { NavLink } from "react-router-dom"
export const Header = () => {
  return (
    <ul class="flex">
      <li class="mr-6">
        <NavLink className="text-black" to="/">
          Table
        </NavLink>
      </li>
      <li class="mr-6">
        <NavLink className="text-black" to="/match-sound-to-character">
          Match Sound to Character
        </NavLink>
      </li>
    </ul>
  )
}

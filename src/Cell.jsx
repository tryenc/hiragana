import React from "react"

export function Cell({ children }) {
  return <td className="text-center p-1">{children}</td>
}

export function Header({ children }) {
  return <th className="p-1">{children}</th>
}

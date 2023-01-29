import Navbar from './nav'
import React from "react";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <div className="overflow-hidden ">
      <Navbar/>
      <main className="overflow-hidden">{children}</main>
    </div>
  )
}
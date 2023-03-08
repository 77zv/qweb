import Navbar from "./nav";
import React from "react";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      {children}
      <div className="mt-auto ">
        <Footer />
      </div>
    </div>
  );
}
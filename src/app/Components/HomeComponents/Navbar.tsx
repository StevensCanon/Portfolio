"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from "react-icons/fa";
import "../../globals.css";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState<number | null>(null);

  const navItems = [
    { name: "Home", icon: FaHome, path: "/" },
    { name: "Projects", icon: FaBriefcase, path: "/projects" },
    { name: "About", icon: FaUser, path: "/about" },
    { name: "Contact", icon: FaEnvelope, path: "/contact" },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="logo-link">
        <div className="logo-container">
          <Image
            src="/images/logo.png"
            alt="Logo de la empresa"
            width={50}
            height={50}
            className="logo"
            priority
          />
        </div>
      </Link>

      {/* Navigation items */}
      {navItems.map((item, index) => (
        <Link href={item.path} key={index} className="nav-link">
          <div
            className={`navItem ${activeIcon === index ? "active" : ""}`}
            onMouseEnter={() => setActiveIcon(index)}
            onMouseLeave={() => setActiveIcon(null)}
          >
            <item.icon className="icon" />
            <span className="tooltip">{item.name}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from 'react-icons/fa';
import '../../globals.css'; 

const Navbar = () => {
  // Permite que el estado activeIcon sea un número o null
  const [activeIcon, setActiveIcon] = useState<number | null>(null);

  const navItems = [
    { name: 'Home', icon: FaHome, path: '/' },
    { name: 'Projects', icon: FaBriefcase, path: '/projects' },
    { name: 'About', icon: FaUser, path: '/about' },
    { name: 'Contact', icon: FaEnvelope, path: '/contact' },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Logo de la empresa"
          width={150} // Adjust width as needed
          height={50} // Adjust height as needed
          className="logo"
        />
      </Link>

      {/* Navigation items */}
      {navItems.map((item, index) => (
        <Link href={item.path} key={index}>
          <div
            className={`navItem ${activeIcon === index ? 'active' : ''}`}
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

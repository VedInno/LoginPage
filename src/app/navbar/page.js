"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";


export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-container">
          <Image src="/logo.svg" alt="Logo" className="logo" width={40} height={40} />
          <span className="brand-name">Inno Age</span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link href="/dashboard" className="nav-link">Dashboard</Link>
          <Link href="/awards" className="nav-link">Awards</Link>
          <Link href="/activities" className="nav-link">Fun & Social Activities</Link>
          <Link href="/cart" className="nav-link">Cart</Link>
        </div>

        {/* Profile Dropdown */}
        <div className="profile-dropdown">
          <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="profile-btn">
            Profile ▼
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link href="/profile/edit" className="dropdown-item">Edit Profile</Link>
              <button className="dropdown-item logout-btn">Log Out</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css"; // Import CSS file
import { IoCartOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa"



export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-container">
          <Image src="/logo.svg" alt="Logo" className="logo" width={40} height={40} />
          <span className="brand-name">Inno Age</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className={`nav-links ${isMobileMenuOpen ? "mobile-show" : ""}`}>
          <Link href="/dashboard" className="nav-link">Dashboard</Link>
          <Link href="/awards" className="nav-link">Awards</Link>
          <Link href="/activities" className="nav-link">Fun & Social Activities</Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>

        {/* Profile Button */}
     
      </div>
      <div className="profile-container">
  {/* Profile Dropdown */}
  <div className="profile-dropdown">
    <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="profile-btn">
      <Image src="/profile1.webp" alt="User" className="profile-pic" width={32} height={32} />
      <span className="profile-text">Vedant</span>
    </button>

    {isDropdownOpen && (
      <div className="dropdown-menu">
        <Link href="/profile/edit" className="dropdown-item">Edit Profile</Link>
        <button className="dropdown-item logout-btn">Log Out</button>
      </div>
    )}
  </div>

  {/* Cart Link */}
  <div className="cart">
    <Link href="/cart" className="nav-link1"><FaShoppingCart /></Link>
    
  </div>
</div>

    </nav>
  );
}

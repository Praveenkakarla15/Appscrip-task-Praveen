"use client";
import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  const [lang, setLang] = useState("EN");

  return (
    <nav className="nav">
      {/* Top Bar: Logo and Icons */}
      <div className="nav-inner">
        {/* Logo */}
        <div className="logo">ShopKart</div>

        {/* Right Icons */}
        <div className="nav-icons">
          <FaSearch className="icon" />
          <FaHeart className="icon" />
          <FaShoppingCart className="icon" />
          <FaUser className="icon" />
          <select
            className="lang-dropdown"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option>EN</option>
            <option>GE</option>
            <option>FR</option>
          </select>
        </div>
      </div>

      {/* Navigation Links Below Logo */}
      <div className="nav-links-container">
        <Link href="/shop">Shop</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}

'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/">
          <img
            src="/logo.jpg"
            alt="Prudence Logo"
            className="h-12 sm:h-16 w-auto"
          />
        </Link>

        {/* Center: Navbar Links */}
        <div className="hidden lg:flex flex-1 justify-center space-x-6 items-center text-sm font-medium">
          <Link href="/" className="text-[#e42529] font-semibold">Home</Link>

          <div className="relative group">
            <button className="hover:text-[#e42529]">About ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-2 space-y-2 z-50">
              <Link href="/about" className="block hover:text-[#e42529]">Vision</Link>
              <Link href="/about/team" className="block hover:text-[#e42529]">Leadership</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-[#e42529]">Academics ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-2 space-y-2 z-50">
              <Link href="/academics/curriculum" className="block hover:text-[#e42529]">Curriculum</Link>
              <Link href="/academics/faculty" className="block hover:text-[#e42529]">Faculty</Link>
            </div>
          </div>

          <Link href="/achievements" className="hover:text-[#e42529]">Achievements</Link>
          <Link href="/cbse" className="hover:text-[#e42529]">CBSE Results</Link>

          <div className="relative group">
            <button className="hover:text-[#e42529]">Showcase ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-2 space-y-2 z-50">
              <Link href="/showcase/gallery" className="block hover:text-[#e42529]">Gallery</Link>
              <Link href="/showcase/videos" className="block hover:text-[#e42529]">Videos</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-[#e42529]">Admissions ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-2 space-y-2 z-50">
              <Link href="/admissions/process" className="block hover:text-[#e42529]">Process</Link>
              <Link href="/admissions/fees" className="block hover:text-[#e42529]">Fees</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-[#e42529]">Connect ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-2 space-y-2 z-50">
              <Link href="/connect/contact" className="block hover:text-[#e42529]">Contact</Link>
              <Link href="/connect/careers" className="block hover:text-[#e42529]">Careers</Link>
            </div>
          </div>
        </div>

        {/* Right: Register Button */}
        <div className="hidden lg:flex">
          <button className="bg-[#ff4c6e] text-white px-5 py-2 rounded-full font-semibold text-sm">
            Register Now
          </button>
        </div>

        {/* Mobile Hamburger - Red Border Only */}
        <div className="lg:hidden flex-shrink-0">
          <button
            onClick={toggleMobileMenu}
            className="w-12 h-8 border border-red rounded-full flex items-center justify-center"
          >
            {/* Empty for now - only red border as requested */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white px-6 py-4 space-y-2 lg:hidden text-sm font-medium">
          <Link href="/" className="block text-[#e42529]">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/about/team" className="block">Leadership</Link>
          <Link href="/academics/curriculum" className="block">Curriculum</Link>
          <Link href="/academics/faculty" className="block">Faculty</Link>
          <Link href="/achievements" className="block">Achievements</Link>
          <Link href="/cbse" className="block">CBSE Results</Link>
          <Link href="/showcase/gallery" className="block">Gallery</Link>
          <Link href="/showcase/videos" className="block">Videos</Link>
          <Link href="/admissions/process" className="block">Admission Process</Link>
          <Link href="/admissions/fees" className="block">Fees</Link>
          <Link href="/connect/contact" className="block">Contact</Link>
          <Link href="/connect/careers" className="block">Careers</Link>
          <button className="w-full bg-[#ff4c6e] text-white py-2 rounded-full font-semibold">
            Register Now
          </button>
        </div>
      )}
    </div>
  )
}

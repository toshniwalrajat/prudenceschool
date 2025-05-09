// components/Header.tsx

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      {/* Blue Header - Visible only on md (desktop and above) */}
      <div className="hidden md:flex bg-[#1c2481] text-white text-xs sm:text-sm px-6 py-2 items-center justify-between">
        {/* Left section: Location and email */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1">
            <span className="text-red-800">📍</span> Find A Location
          </span>
          <span className="flex items-center gap-1">
            <span className="text-red-800">📧</span> info@prudenceschools.com
          </span>
        </div>

        {/* Right section: Social Icons with borders */}
        <div className="flex items-center text-red-500 text-lg">
          <a href="#" className="px-3 border-l border-white hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="px-3 border-l border-white hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="px-3 border-l border-white hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="#" className="px-3 border-l border-white hover:text-white transition">
            <FaYoutube />
          </a>
          <a href="#" className="px-3 border-l border-r border-white hover:text-white transition">
            <FaPinterestP />
          </a>
        </div>
      </div>
    </>
  );
}

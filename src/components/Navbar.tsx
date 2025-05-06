"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { logout } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter()
  const handleLogout = () =>{
    dispatch(logout())
    router.push('/login')
  }

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          JobBoard
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/jobs" className="hover:underline">Jobs</Link>
          <Link href="/post" className="hover:underline">Post a Job</Link>

          {/* Profile Avatar Dropdown */}
          <div className="relative">
            <div className="avatar avatar-online" onClick={() => setProfileOpen(!profileOpen)}>
              <div className="w-8 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
              </div>
            </div>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-500 px-4 pb-4">
          <Link href="/jobs" className="block py-2">Jobs</Link>
          <Link href="/post" className="block py-2">Post a Job</Link>
          <Link href="/profile" className="block py-2">Profile</Link>
          <Link href="/settings" className="block py-2">Settings</Link>
          <button
            onClick={handleLogout}
            className="block py-2 text-left w-full"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

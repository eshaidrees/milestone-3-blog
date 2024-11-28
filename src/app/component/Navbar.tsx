"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from Font Awesome

const Navbar = () => {
const [isOpen,setIsOpen]  = useState(false)
  return (
         <nav className="bg-gray-800 text-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            <div className="font-bold text-white text-xl"> <Link href="/">My Blog</Link></div>
             <ul className="hidden md:flex  gap-4 sm:gap-8 list-none text-white">
              <li>
               <Link href="/blog" className="hover:text-gray-300">Home
               </Link> 
              </li>
              <li>
               <Link href="/about" className="hover:text-gray-300">About
               </Link>
              </li>
           </ul>
             
           <div className= "md:hidden">
                 <button
                   onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-400 "
                   >
                  { isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}        
                 </button>
           </div>

           </div>
             {isOpen && (
               <div className="md:hidden bg-gray-700">
                <Link href="/blog" className="block px-4 py-2 hover:bg-gray-600">Home</Link>
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-600">About</Link>
               </div>

           )}

    </nav>
  );
} 
export default Navbar;

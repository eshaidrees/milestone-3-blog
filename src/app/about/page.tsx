import React from 'react';

export default function About() {
  return (
    <div className="flex bg-gray-100 justify-center items-start min-h-screen">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto m-6 ">
        <h1 className="font-bold text-center text-3xl sm:text-4xl m-4">About</h1>
        <p className="text-base sm:text-lg m-4 p-4 sm:p-6 text-gray-800">
          My blog is about exploring the art of living a balanced and fulfilling life, blending personal experiences with practical advice. 
          I believe in lifelong learning, creativity, and the power of community. Outside of blogging, I enjoy discovering new places to photograph, 
          experimenting with time management techniques, and reflecting on personal growth.
        </p>
      </div>
    </div>
  );
}
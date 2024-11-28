"use client";
import React, { useState } from "react";

export default function Comment() {
    // state to store comments
    const [comments , setComments] = useState<string[]>([]);  
    // state for new comments input
    const [newComments , setNewComments] = useState<string>("");
    // Handle Commit Submit
    const handleCommentSubmit = () => {
        if(newComments.trim()){
            // add new comments
            setComments([...comments,newComments]);
            // clear input
            setNewComments("");
        }
    }
  return (
    <div className="bg-gray-100 min-h-screen w-full p-6 m-6 flex flex-col items-center">
    {/* Comments Section */}
    <div className="w-full bg-gray-300 p-6 rounded-lg shadow-md lg:w-1/2">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      {/* Display Comments */}
      {/* {comments.length > 0 ? ( */}
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li
              key={index}
              className="border-b pb-2 text-gray-800"
            >
              {comment}
            </li>
          ))}
        </ul>
      {/* ) : (
        <p className="text-gray-600"></p>
      )} */}

      {/* Add New Comment */}
      <div className="mt-4">
        <textarea
          className="w-full border rounded p-2 mb-2"
          rows={3}
          value={newComments}
          onChange={(e) => setNewComments(e.target.value)}
          placeholder="Write your comment..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleCommentSubmit}
        >
          Add Comment
        </button>
      </div>
    </div>
  </div>

)
}


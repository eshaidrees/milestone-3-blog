"use client";
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts , Post } from '../../data';
import Comment from '@/app/component/Comment';
import ReactMarkdown from 'react-markdown'; 

export default function PostPage() {
  const { postID } = useParams();

  // Retrieve post content based on postId
  const post =  posts.find((post:Post) => post.id === postID)

  // Show 404 page if the post does not exist
  if (!post) return notFound();

  return (
    
    <div className="bg-gray-100 min-h-screen  p-6 flex flex-col items-center">
      <img
        src={post.image}
        alt={post.title}
        className="w-full max-w-2xl h-80 object-cover rounded-lg mb-6"
      />
      {/* <h1 className="text-4xl font-bold text-black mb-4">{post.heading}</h1> */}
      <h2 className="text-2xl text-center font-semibold  mb-6 w-1/2">{post.title}</h2> 
        <ReactMarkdown className="space-y-4 leading-loose max-w-2xl text-lg">{post.content}</ReactMarkdown>
        
      <div className="mt-4">
        <Link href="/blog" passHref>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            Back to Posts
          </button>
        </Link>
      </div>
      
      <Comment />
    </div>

  );

}

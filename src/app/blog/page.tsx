import Link from 'next/link';
import { posts } from '../blog/data';
import Image from 'next/image';
export default function BlogList() {

  const filteredPosts = posts.filter((post) => 
    ['post-1', 'post-2', 'post-3','post-4'].includes(post.id)
  )

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className=" max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Latest Posts</h1>
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 mb-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={200}
              height={100}
              className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold text-black mb-2">{post.heading}</h2>
              <h3 className="text-xl font-medium text-gray-700 mb-4">{post.title}</h3>
              <p className="text-gray-600 text-base mb-4">{post.content}</p>


                   {/* Link to the next post if available */}
             {post.nextPostId && (
               <button className='p-2 m-2 text-blue-700 font-bold hover:underline'>
                <Link href={`/blog/posts/${post.nextPostId}`}>
                  Read More: {posts.find(p => p.id === post.nextPostId)?.title}
                </Link>
              </button>
             )}
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
}
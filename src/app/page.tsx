import BlogList from "./blog/page";
import About from "./about/page";

export default function Home(){
  return(
    <div>
       <div className='flex bg-gray-100 justify-center '>
       <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto m-5">
       <h1 className='font-bold text-center text-4xl m-4'>Blog</h1>
            <p className=' text-base sm:text-lg m-4 p-4 sm:p-6 text-gray-700'>Welcome to My Blog a space where ideas inspiration and creativity come to life.
            Here we explore diverse topics ranging from technology and photography to lifestyle and personal growth.
            Whether you re looking to learn something new stay motivated or simply enjoy insightful stories you ll find something that resonates with you.</p>
         </div>
      </div>
      <BlogList />
      <About />
    </div>
  );
}
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const state=useSelector((store)=>store.app.isMenuOpenFlag);
  if(!state) return;
  
  
  return (
    <div className='p-5 shadow-lg w-64'>
      <div className=' border-b-2 border-gray-400 '>
        <Link to={"/"}><h1 className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Home</h1></Link> 
        <h1 className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Shorts</h1>
        <h1 className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Subscriptions</h1>
      </div>
      
      <div className=' border-b-2 border-gray-400 pt-5'>
        <h1 className='font-extrabold cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-4 py-2'>You</h1>
        <ul>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>History</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Playlists</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Watch Later</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Liked videos</li>
        </ul>
      </div>
      
      <div className=' border-b-2 border-gray-400 pt-5'>
        <h1 className='font-extrabold cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-4 py-2'>Explore</h1>
        <ul>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Trending</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Shopping</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Music</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Films</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Live</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Gaming</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>News</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Sport</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Courses</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-10 py-2'>Fashion & beauty</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Podcasts</li>
        </ul>
      </div>
      
      <div className=' border-b-2 border-gray-400 pt-5'>
        <h1 className='font-extrabold cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-4 py-2'>More From Youtube</h1>
        <ul>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-10 py-2'>Youtube Premium</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Youtube Music</li>
          <li className='cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Youtube Kids</li>
        </ul>
      </div>
      
      <div className=' border-b-2 border-gray-400 pt-5'>
        <h1 className='font-extrabold cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Settings</h1>
        <h1 className='font-extrabold cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Report History</h1>
        <h1 className='font-extrabold cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Help</h1>
        <h1 className='font-extrabold cursor-pointer  hover:bg-gray-300  hover:rounded-lg px-12 py-2'>Send feedback</h1>
      </div>
      
      <div className='pt-5'>
        <p className='cursor-pointer'>
            About Press Copyright Contact us Creator Advertise Developers
            Terms Privacy Policy & Safety How YouTube worksTest new features
            © 2024 Google LLC
        </p>
      </div>
    </div>
  )
}

export default SideBar
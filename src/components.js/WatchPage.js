import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
    const dispatch =useDispatch();
    const[SearchParams]=useSearchParams();
    // console.log(SearchParams.get("v"))
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='px-5 '>
        <iframe className='rounded-2xl'
            width="970" 
            height="550" 
            src={"https://www.youtube.com/embed/" + SearchParams.get("v")} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowFullScreen>

        </iframe>
    </div>
  )
}

export default WatchPage
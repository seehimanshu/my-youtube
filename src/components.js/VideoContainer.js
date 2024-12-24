import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import { addPopolarVideos } from '../utils/videoSlice';
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [Videos,setVideos]= useState([]);
    const dispatch = useDispatch();
    const popularVideo=useSelector((store)=>store.video.popularVideo);

    const getVideos = async()=>{
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();

        // console.log(json)
        setVideos(json.items);
        
    }
    
    useEffect(()=>{
        !popularVideo && getVideos();
    },[])

    useEffect(() => {
        if (Videos.length > 0) {
            dispatch(addPopolarVideos(Videos));
        }
    }, []);
  return (
    <div className='flex flex-wrap ' >
        {Videos.map((video)=> (
         <Link key={video?.id}  to={"/watch?v=" + video?.id}>
                <VideoCard info={video}/>
         </Link>   
         )
    )}
        
    </div>
  )
}

export default VideoContainer
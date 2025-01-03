import React from 'react'

const VideoCard = ({info}) => {
    const {statistics ,snippet} =info;
    const {channelTitle , title ,thumbnails} =snippet;
    // console.log(info)
  return (
    <div className='p-2 m-2 w-96 '>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenuState } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';

const Header = () => {
    
    const dispatch= useDispatch();
    const[SearchQuery,setSearchQuery]=useState("");
    const[Suggestions,setSuggestions] =useState([]);
    const[ShowSuggestions, setShowSuggestions]= useState(false);

    const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${encodeURIComponent(SearchQuery.trim())}`;
    // const API_URL="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + encodeURIComponent(SearchQuery.trim());
    
    useEffect(()=>{
        const timer= setTimeout(()=> getSearchSuggestions(),1000);

        return()=>{
            clearTimeout(timer);
        }
    },[SearchQuery])

    const getSearchSuggestions = async ()=>{
        
        const data= await fetch(apiUrl);
        
        const json =await data.json();
        console.log("API CALL -"+SearchQuery);
        setSuggestions(json?.items)
        console.log(json?.items[0]?.snippet?.title)
    }
    const handleMenuToggleState =()=>{
        
        dispatch(toggleMenuState())
    }
  return (
      <div className='grid grid-flow-col p-1 m-1 shadow-lg'>
            <div className='flex col-span-1 '>
                <img onClick={handleMenuToggleState} 
                    className='h-12 cursor-pointer pt-4'
                    alt='menu' 
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII='
                />
                <img className='h-20 cursor-pointer  pb-4'
                    alt='youtube-logo'
                    src='data:image/png;base64,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'
                    />
            
            </div>
            <div className='col-span-10 pt-3 pl-16'>
                <div>
                    <input className='px-8 w-1/2 border border-gray-300 p-2 rounded-l-full'
                        type="text"
                        placeholder='Search'
                        value={SearchQuery}
                        onChange={(e)=> setSearchQuery(e.target.value)}
                        onFocus={()=> setShowSuggestions(true)}
                        onBlur={()=> setShowSuggestions(false)}
                    />
                    <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
                </div>
                {ShowSuggestions && (<div className='fixed bg-white mx-1.5 py-2 px-3 w-[31rem] rounded-lg shadow-2xl border border-gray-200'>
                    <ul className=''>
                        {Suggestions.map((suggestion)=>(
                            <li  key={suggestion} className='py-2 m-1 shadow-sm hover:bg-gray-100 '>🔍 {suggestion.snippet?.title}</li>
                        ))}            
                    </ul>
                </div>)}
            </div>
            <div className='col-span-1 pt-3 pr-0'>
                <img className='h-12 ' 
                    alt='user-icon'
                    src='data:image/png;base64,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'
                />
            </div>
      </div>
    
  )
}

export default Header
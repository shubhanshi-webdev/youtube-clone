import React, { useEffect, useState } from 'react'
import { YOUTUBE_LIST_API } from '../Utilis/constants';
import VideoList from './VideoList';
import { Link } from 'react-router-dom';

const VideoComponent = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchVideo();
    },[]);
    const fetchVideo = async () => {
        const fetchapi = await fetch(YOUTUBE_LIST_API);
        const json = await fetchapi.json();
        console.log(json.items)
        setVideos(json.items);
    }
  return videos == '' ? 'Loading': ( 
    <div className='flexClass videos'>
        {
            videos.map((item) =>  <Link key={item.id} to={'/watch?v='+ item.id} className="videolink"><VideoList className="" data={item} /> </Link>)
        }
    </div>
  )
}

export default VideoComponent
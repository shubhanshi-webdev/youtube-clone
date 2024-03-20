import React from 'react'

const VideoList = ({data}) => {
  return (
    <div className='videos-list-container'>
        <div className=''>
            <img src={data.snippet.thumbnails.medium.url} />
        </div>
        <div>
            <p>{data.snippet.title}</p>
            <p className='chanel'>{data.snippet.channelTitle}</p>
            <p className='count'>{data.statistics.viewCount}</p>
        </div>
    </div>
  )
}

export default VideoList
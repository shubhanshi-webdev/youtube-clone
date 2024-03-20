import React from 'react'
import VideoComponent from './VideoComponent'

const Maincontainer = () => {
  return (
    <>
     <div className='main-container'>
      <div className='buttonList flexClass'>
        <button>All</button>
        <button>Cricket</button>
        <button>All</button>
        <button>Cricket</button>
        <button>All</button>
        <button>Cricket</button>
        <button>All</button>
        <button>Cricket</button>
        <button>All</button>
        <button>Cricket</button>
        <button>All</button>
        <button>Cricket</button>
        <button>All</button>
        <button>Cricket</button>
      </div>
      <div className='videoComp'>
        <VideoComponent />
      </div>
      
    </div>
   
    </>
   
  )
}

export default Maincontainer
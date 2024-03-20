import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const select = useSelector((store) => store.app.isToggleMenu);
  
  return !select ? null : (
    <div className='youtubeSidebar'>
      <ul className='sidebar-list'>
        <li><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul className='sidebar-list'>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <ul className='sidebar-list'>
      <p><b>Explore</b></p>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
      </ul>
    </div>
  )
}

export default Sidebar
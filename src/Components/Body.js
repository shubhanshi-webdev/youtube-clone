import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
import Watch from './Watch'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='youtubeBody flexClass container'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body
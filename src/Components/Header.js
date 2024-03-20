import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utilis/apptoggleSlice';
import { YOUTUBE_SUGGESSTION_API } from '../Utilis/constants';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // console.log(searchQuery)
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu())
  }
  useEffect(() => {
    // debouncing
    const timer = setTimeout(() => suggesstionFetch(), 300);
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])
  
  const suggesstionFetch = async () => {
    const data = await fetch(YOUTUBE_SUGGESSTION_API + searchQuery);
    const response = await data.json();
    console.log(response);
  }
  return (
    <header className='youtubeHeader '>
      <div className='container flexClass'>
        <div className='flexClass'>
          <img onClick={() => handleToggle()} src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png' style={{width: '50px', objectFit: 'contain'}} alt='hanburger' />
          <img src='https://image.shutterstock.com/image-photo/image-260nw-2310134969.jpg' style={{width: '150px', objectFit: 'contain'}} alt='logo' />
        </div>
        <div>
          <div className='searchSection flexClass'>
            <input type='text' value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value)}}/>
            <button><img src='https://www.svgrepo.com/show/7109/search.svg' alt='search' style={{width: '20px'}}/></button>
          </div>
          <ul>
            <li></li>
          </ul>
        </div>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png' style={{width: '30px', objectFit: 'contain'}}/>
        </div>
      </div>
    </header>
  )
}

export default Header
import React from 'react';
import "./Header.css";
import {HiMoon} from 'react-icons/hi';
import { useGlobalTheme } from './context/ThemeContext';

const Header = () => {

  const {theme, changeTheme} = useGlobalTheme()
  return (
    <div className={`${theme && "darkMode"} main-container   d-flex justify-content-center align-items-center`}>
    <div className={` ${theme && "text-white"} headerContainer d-flex justify-content-between py-3 `}>
        <h5>where in the world?</h5>
        <div className='d-flex gap-2'>
        <HiMoon onClick={changeTheme} size={20} color='transparent' className={`${theme && "text-white"}`} stroke={theme?"transparent":"black"} strokeWidth={1}/>
        <p>Dark Mode</p>
        </div>
       
    </div>
    </div>
  )
}

export default Header
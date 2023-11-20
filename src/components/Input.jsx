import React from 'react';
import {FaSearch} from "react-icons/fa"
import "./Input.css";
import { useGlobalTheme } from './context/ThemeContext';

import Select from "./Select"

const Input = ({countryName, region, setRegion, setCountryName, details, setFilteredCountry}) => {

  const handleCountryName=(event)=>{
    setCountryName(event.target.value)
  }

  const filterName =(details)=>{
        const filtered = details.filter(country=>country.name.toLowerCase().includes(countryName.toLowerCase()))
        
        setFilteredCountry(filtered)
  }
  const {theme} = useGlobalTheme();
  
  return (
    <div className='inputContainer'>
          <form className={`${theme && "darkMode"}`} action="#">
          <FaSearch onClick={()=>filterName(details)} color={theme ? "#fff":""}/>
            <input  className={`${theme && "darkMode text-white"}`} type='text'  
             placeholder='search for a country' onChange={handleCountryName} value={countryName} name="country"
             id="country"/>
             
          </form>
        <Select region={region} setRegion={setRegion}/>
        </div>

  )
}

export default Input
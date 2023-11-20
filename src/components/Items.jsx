import React from 'react';
import "./Items.css";
import { useGlobalTheme } from './context/ThemeContext';
import { Link } from 'react-router-dom';




const Items = ({details}) => {

  const {theme} = useGlobalTheme();

 
  // console.log(items);
  return (
    <div className='itemContainer '>
       {
        details?.map(country=>
        
          <div key={country.alpha3Code} className={`${theme && "darkMode"} countryCard`}>
            <Link style={{textDecoration:"none", color:"inherit"}} to={`/countries/${country.alpha3Code}`}>
           <div className='imageDescription'>
            <img src={country.flags.png} alt="flag"/>
           </div>
           <div className={`${theme && "text-white"} description`}>
            <h4 className='name'>{country.name}</h4>
            <p><span>Population:</span>{" "} {country.population}</p>
            <p><span>Region:</span>{" "} {country.region}</p>
           </div>
           </Link>
          </div>
          
          
        )
       }
    </div>
  )
}

export default Items


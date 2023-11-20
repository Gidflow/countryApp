import React, { useEffect, useState } from 'react';
import Input from "../components/Input";
import Items from '../components/Items';
import  "./Home.css";

const Home = ({details}) => {

   
    const [region, setRegion] = useState("");
    const [countryName, setCountryName] = useState("");
    const [filteredCountry, setFilteredCountry] = useState([]);

    
    useEffect(()=>{

      if(region===""){
       setFilteredCountry(details);
      }

      else{

         const filteredCountries = details.filter(country=>country.region === region);

        setFilteredCountry(filteredCountries);
        
      }

    }, [region, details])

  return (
    <div className="home">
         <Input region={region} countryName={countryName} setRegion={setRegion} setCountryName={setCountryName}                                                                                                                                                                                                                                                                                                                                                                                                     
         details={filteredCountry} setFilteredCountry={setFilteredCountry}/>
           <Items details={filteredCountry} />
    </div>
  )
}

export default Home

import "./CountryDetail.css"
import { Link } from 'react-router-dom';
// import { getAllNames} from '../components/util/Util';
import {FaArrowLeft} from "react-icons/fa"
import { useGlobalTheme } from '../components/context/ThemeContext';
import SinglePage from "../components/util/SinglePage"
const CountryDetail = ({countries}) => {

    
     const {theme} = useGlobalTheme();
    
    


  return (
    <div className={`${theme && "b-groundDark text-white"} singleCountry`}>
      <div className='backed'><button className={`${theme && "darkMode"} back btn`}><FaArrowLeft className={`${theme && "text-white"}`}/><Link to="/" className={`${theme && "text-white"}`} style={{textDecoration:"none", color:"black", marginLeft:"0.4rem"}}>Back</Link></button></div>
      
      
        
             <SinglePage details= {countries} theme={theme}/>
      
      
    </div>
  )
}

export default CountryDetail
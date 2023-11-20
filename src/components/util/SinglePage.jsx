import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "../../pages/CountryDetail.css"

const SinglePage = ({ details, theme}) => {

   const { code} = useParams()
   
    let detail = details.find(item =>item.alpha3Code === code)
   console.log(detail)
  return (
    <div className='description1'>
      <div className='imageDes'>
        <img src={detail.flags?.png} alt='flag'/>
     </div>
     <div className='py-5'>
        <h1 className="mb-3">{detail.name}</h1>
        <div className='description2'>
         <div>
             <p><span>Native Name:</span>{" "} {detail.nativeName}</p>
             <p><span>Population:</span>{" "} {detail.population}</p>
             <p><span>Region:</span>{" "} {detail.region}</p>
             <p><span>Sub Region:</span>{" "} {detail.subregion}</p>
             <p><span>Capital:</span>{" "} {detail.capital}</p>
            
        
     </div>
     <div className='description3'>
         <p><span>Top Level Domain:</span>{" "} {detail.topLevelDomain?.map(item=>item).join(",")}</p>
         <p><span>Currencies:</span>{" "} {detail.currencies?.map(currency=>
                 currency.name
             ).join(",")}</p>
          <p><span>Languages:</span>{" "} {detail.languages?.map(item=>item.name).join(", ")}</p>
     </div>
         </div>
      <div>
        <h4 className='mt-5'>Border Countries:</h4>
      <div className='buttons  mt-3 pt-3'>
      {detail.borders && detail.borders.map((item)=>{

      let bCountry = details.find((count) => {
                    return count.alpha3Code === item;
                  });
      return <button key={bCountry.alpha3Code} className={`${theme && "darkMode text-white"} btn btn-light box mx-1`}><Link style={{textDecoration:"none", color:"inherit"}} to={`/countries/${bCountry.alpha3Code}`}>{bCountry.alpha3Code}</Link></button>
      })}
     </div>
        </div>  
     </div>
        </div>
  )
}

export default SinglePage
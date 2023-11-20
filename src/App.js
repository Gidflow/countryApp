
import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobalTheme } from './components/context/ThemeContext';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAllCountries } from './components/util/Util';
import { useEffect, useState } from 'react';

function App() {
  const [details, setDetails] = useState([]);

  useEffect(()=>{
    getAllCountries().then((results)=>{
      const countries = results.data;

      //  console.log(countries);
      setDetails(countries)
      // setFilteredCountry(countries);
     
    })
  }, []);


  const {theme} = useGlobalTheme();
  return (
    <div className={`${theme && "b-groundDark"} App`}>
          <Header/>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home details={details}/>} />
            <Route   path='/countries/:code'  element={<CountryDetail countries={details}/>}/>
            {/* <Route path='/code/:countryCode' element={<CountryDetail/>}/> */}
           
          </Routes>
          </BrowserRouter>
          
      </div>

  );
}

export default App;

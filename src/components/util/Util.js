import axios from "axios";

const COUNTRY_API_ENDPOINT = 'https://restcountries.com/v2';

export const getAllCountries=()=>{
    return axios.get(`${COUNTRY_API_ENDPOINT}/all`);
}

export const getCountryDetail=(countryCode)=>{
    return axios.get(`${COUNTRY_API_ENDPOINT}/alpha/${countryCode}`);
}

// export const getAllNames = (name)=>{
//     return axios.get(`${COUNTRY_API_ENDPOINT}/name/${name}?fullText=true`);
// }
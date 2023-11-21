import React from 'react';
import Select from 'react-select';
import './Select.css';
import { useGlobalTheme } from './context/ThemeContext';



const List = ({region, setRegion}) => {

 

  const handleChange=(selectedValue)=>{
    setRegion(selectedValue.value);
    // console.log(selectedValue.value)
  }

   
const {theme} = useGlobalTheme();
  const options = [
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Europe", label: "Europe" },
    { value: "Asia", label: "Asia" },
    { value: "Oceania", label: "Oceania" }
  ];

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: theme ?"#fff" :"#2B3844",
      backgroundColor: state.isSelected && state.isDisabled ? 'green' : state.backgroundColor,
      border:"none",
      padding:"6px",
      borderRadius:"0.2rem",
      
     
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: theme? "inherit":"#fff",
      padding: "6px",
      border: "none",
      //  boxShadow: "none",
       boxShadow: ".1px .2px 0px .3px #3a3737",
       borderRadius: ".4rem",
       
       
     
      
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      // override border radius to match the box
      borderRadius:"1rem",
      // kill the gap
      marginTop: ".2rem",
      backgroundColor:"none"
      
    }),
    menuList: (defaultStyles) => ({
      ...defaultStyles,
      // kill the white space on first and last option
      padding: "0 6px ",
      backgroundColor:theme? "#2B3844":"#fff",
      border:0,
      // boxShadow: "1px 1px 10px #A445ED",
      borderRadius:".6rem",
      
    }),
    placeholder: (defaultStyles) => ({
      
          ...defaultStyles,
          color: theme ?'#ffffff':"",
      }),
    singleValue: (defaultStyles, state) => ({ ...defaultStyles, color:theme?"#fff":"black" }),
  };

  const selectedOption = "Filter Region";
  return (
    <div className={`${theme && "darkMode"} selectControl`}>
         <Select    styles={customStyles} options={options} placeholder={selectedOption} value={region} onChange={handleChange}/>
    </div>
    
  )
}

export default List
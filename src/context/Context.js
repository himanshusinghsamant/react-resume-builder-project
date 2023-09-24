import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";



const DataContext = createContext();


const DataContextPro=(props)=>{

    const [resumeTemplate, setResumetemplate] = useState();
    

    const[mode, setMode] =useState('light')

    // This ToggleMode function is used to Switch between light and dark Mode ****************************

    const ToggleMode =()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#072340'
        document.body.style.color = 'white'
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'

      }
    }
  
    useEffect(() => {

      // Get data from local storage when the component mounts
      const storedData = JSON.parse(localStorage.getItem("dataArray"));
      if (storedData) {
        setResumetemplate((storedData))
      }
    }, []);
   
    // This AddData function Adds data to local storage**********************

  const addData=(newItems)=>{
    setResumetemplate(newItems)
    localStorage.setItem('dataArray', JSON.stringify(newItems))
  }

  // This ContextValue variable is storing all the function and pass them in value as a props in datacontext.provider ****************************

  const contextValues ={addData, resumeTemplate, ToggleMode, mode}

    return(
        <div>
            <DataContext.Provider value={contextValues}>
                {props.children}
            </DataContext.Provider>
        </div>
    )
}

export default DataContextPro;

export const useMyContext = () => {
	return useContext(DataContext);
};

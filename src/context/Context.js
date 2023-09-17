import { useContext } from "react";
import {createContext } from "react";
import { useState, useEffect } from "react";

const DataContext = createContext()


const DataContextPro=(props)=>{

    const [resumeTemplate, setResumetemplate] = useState();
    console.log(resumeTemplate)
  
    useEffect(() => {
      // Get data from local storage when the component mounts
      const storedData = JSON.parse(localStorage.getItem("dataArray"));
      if (storedData) {
        setResumetemplate((storedData))
      }
    }, []);
  
  const addData=(newItems)=>{
    setResumetemplate(newItems)
    localStorage.setItem('dataArray', JSON.stringify(newItems))
  }
  const contextValues ={addData, resumeTemplate}

    return(
        <div>
            <DataContext.Provider value={contextValues}>
                {props.children}
            </DataContext.Provider>
        </div>
    )
}

export default DataContextPro ;

export const useMyContext=()=>{
    return useContext(DataContext)
}
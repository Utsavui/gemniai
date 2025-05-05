import { createContext, useState } from "react";
import {run} from '../config/gemini'



export const Context=createContext()
const ContextProvider=(props)=>{
   
  const [input,setinput]=useState('')
   const [pp,setpp]=useState('')
  const [rp,setrp]=useState('')
 
  
  const [loading,setloading]=useState(false)

  
const onSent= async (prompt)=>{
   setpp('')
   setloading(true)
   const res=await run(input)
   
   setloading(false)
   
  
   setpp(res)
   
   setinput('')


   
   return res

   
   
  

}



  const contextvlaue={
    pp,
    setpp,
    onSent,
    setrp,
    rp,
    
    loading,
    
    input,
    setinput,
    setloading


  
  }
  return(
    <Context.Provider value={contextvlaue}>
      {props.children} 
    </Context.Provider>
   
  )
}

export default ContextProvider


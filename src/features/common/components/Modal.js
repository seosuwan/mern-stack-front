import React, { useState } from "react";
import { Transition } from 'react-transition-group';
import Backdrop from "./BackDrop";
import ModalForm from "./ModalForm";


export default function Modal(){
    const [ goHome, setGoHome ] = useState(false)


    return(
        <>
       <div className="App"> 
        <h1>React Animations</h1> 
        <Transition unmountOnExit in={goHome} timeout={5}>
        <ModalForm show={goHome} closed ={()=>setGoHome(false)}  />
      </Transition>
        {goHome ? <Backdrop show ={goHome}/>:null}
        <button className="Button" onClick={()=>setGoHome(true)}>Open Modal</button>
      </div>
        </>
    )
}
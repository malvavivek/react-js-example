import React from 'react';
import Style from './Person.css';

const person = (props)=>{
    return (<div className={Style.Person}>
         <p onClick={props.click}>I'm name is {props.name} and I'm {props.age} years old</p>
         <p>{props.children}</p>
         <input onChange={props.changed} value={props.name}/>
    </div>)
   
}

export default person;
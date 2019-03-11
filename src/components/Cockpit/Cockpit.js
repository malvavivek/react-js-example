import React from 'react';
import Style from './Cockpit.css'

const cockpit =(props)=>{
    const classes = [];
    let btnClass = {};
    if(props.showPersons){
        btnClass = Style.Red;
    }
   
    if(props.PersonArr.length<=2){
      classes.push(Style.red);
    }
    if(props.PersonArr.length<=1){
      classes.push(Style.bold);
    }

    return (
        <div className={Style.Cockpit}>
        <h1>React</h1>
        <p className={classes.join(' ')}>Microsoft Corporation</p>
        <button className = {btnClass} onClick={props.clicked}>Toggle Persons</button>
      </div>
    )

}
export default cockpit;
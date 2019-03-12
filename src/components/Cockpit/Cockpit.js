import React,{useEffect} from 'react';
import Style from './Cockpit.css'

const cockpit =(props)=>{

  useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(()=>{
          alert('Data saved')
        },1000)
        return ()=>{
          console.log('[Cockpit.js] CleanUp')
        }
  },[])

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    return ()=>{
      console.log('[Cockpit.js] 2nd CleanUp')
    }
})
    const classes = [];
    let btnClass = {};
    if(props.showPersons){
        btnClass = Style.Red;
    }
   
    if(props.personsLength<=2){
      classes.push(Style.red);
    }
    if(props.personsLength<=1){
      classes.push(Style.bold);
    }

    return (
        <div className={Style.Cockpit}>
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}>Microsoft Corporation</p>
        <button className = {btnClass} onClick={props.clicked}>Toggle Persons</button>
      </div>
    )

}
export default React.memo(cockpit);
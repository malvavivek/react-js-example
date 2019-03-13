import React,{useEffect,useRef} from 'react';
import Style from './Cockpit.css'

const cockpit =(props)=>{
    const toggleButtonRef = useRef(null);
  useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // setTimeout(()=>{
        //   console.log('Data saved')
        // },1000)
        toggleButtonRef.current.click();
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
        <button ref = {toggleButtonRef} className = {btnClass} onClick={props.clicked}>Toggle Persons</button>
        <button onClick={props.login}>Login</button>
      </div>
    )

}
export default React.memo(cockpit);
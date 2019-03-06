// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

// const App = props =>{

//    const [personsState,setPersonsState] =  useState({
//           Person:[
//             {name:'Max',age:20},
//             {name:'Emily',age:21},
//             {name:'Production',age:2},
//           ]
//         });
//         const[otherState,setOtherState] = useState('some Other value')
//         console.log(personsState,otherState)
//         const switchNameHandler = ()=>{
//           setPersonsState ({
//            Person:[
//              {name:'Emily',age:20},
//              {name:'Production',age:19},
//              {name:'Max',age:22},
//            ]
//           })
//          }
//     return (
//       <div className="App">
//         <h1>React</h1>
//         <button onClick={switchNameHandler}>Switch Names</button>
//         <Person name ={personsState.Person[0].name} age={personsState.Person[0].age}/>
//         <Person name = {personsState.Person[1].name} age= {personsState.Person[1].age}><span>Hobbies:Racing</span></Person>
//         <Person name = {personsState.Person[2].name} age={personsState.Person[2].age}/>
//       </div>
//     );
// }

class App extends Component {
  state = {
    Person:[
      {name:'Max',age:20},
      {name:'Emily',age:21},
      {name:'Production',age:2},
    ],
    otherState:'Some Other value'
  }
  switchNameHandler = (newName)=>{
   this.setState ({
    Person:[
      {name:'Emily',age:20},
      {name:newName,age:19},
      {name:'Max',age:22},
    ]
   })
  }
  nameChangeHandler = (event)=>{
    this.setState ({
     Person:[
       {name:event.target.value,age:20},
       {name:'Robert',age:19},
       {name:'Max',age:22},
     ]
    })
   }
  render() {
    const style = {
      backgroundColor:'white',
      border:'1px solid blue',
      cursor:"pointer",
      padding:'8px'
    }
    return (
      <div className="App">
        <h1>React</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this,'Max?')}>Switch Names</button>
        <Person 
        name ={this.state.Person[0].name} 
        age={this.state.Person[0].age}
        change={this.nameChangeHandler}/>
        <Person 
        click={()=>this.switchNameHandler('Ed')} 
        name = {this.state.Person[1].name} 
        age= {this.state.Person[1].age}><span>Hobbies:Racing</span></Person>
        <Person 
        name = {this.state.Person[2].name} 
        age={this.state.Person[2].age}/>
      </div>
    );
  }
}


export default App;

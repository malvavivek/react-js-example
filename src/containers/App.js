// import React, { useState } from 'react';
import React, { Component } from 'react';
import Style from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    PersonArr:[
      {id:1,name:'Max',age:20},
      {id:2,name:'Emily',age:21},
      {id:3,name:'Production',age:2},
    ],
    otherState:'Some Other value',
    showPersons:false
  }
  switchNameHandler = (newName)=>{
   this.setState ({
    PersonArr:[
      {name:'Emily',age:20},
      {name:newName,age:19},
      {name:'Max',age:22},
    ]
   })
  }
  nameChangeHandler = (event,id)=>{
    const personIndex = this.state.PersonArr.findIndex(p=>{
      return p.id === id;
    }); 
    const person = { ...this.state.PersonArr[personIndex]};
    person.name = event.target.value; 
    const persons = [...this.state.PersonArr]
    persons[personIndex] = person;
    this.setState ({
      PersonArr:persons
    })
   }
   togglePersonHandler = ()=>{
         let doesShow =  this.state.showPersons
         this.setState({showPersons:!doesShow})
   }
   deletePersonHandler =(personIndex)=>{
     const persons = [...this.state.PersonArr]
     persons.splice(personIndex,1)
     this.setState({PersonArr:persons})

   }
  render() {

    let persons = null;
    
    if(this.state.showPersons){
      persons =(
          <Persons 
          PersonArr = {this.state.PersonArr}
          clicked ={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />
      )

    }
   
    return (
      <div className={Style.App}>
        <Cockpit 
        showPersons = {this.state.showPersons}
        PersonArr = {this.state.PersonArr}
        clicked = {this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}


export default App;
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

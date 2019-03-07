// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'
import person from './Person/Person.js';

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
    const style = {
      backgroundColor:'white',
      border:'1px solid blue',
      cursor:"pointer",
      padding:'8px'
    }
    let persons = null;
    if(this.state.showPersons){
      persons =(
        <div>
          {this.state.PersonArr.map((person,index)=>{
            return <Person 
            click = {()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangeHandler(event,person.id)}
            />
          })}
        
        </div>
      )
    }
    

    return (
      <div className="App">
        <h1>React</h1>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
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

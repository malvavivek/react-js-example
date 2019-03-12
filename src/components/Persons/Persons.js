import React, {PureComponent} from 'react';
import Person from "./Person/Person"
class Persons extends PureComponent {
  // componentDidMount(){
  //   console.log('[Persons.js] componentDidMount')
  // }
  // shouldComponentUpdate(nextProps,nextState){
  // console.log('[Persons.js] shouldComponentUpdate')
  //  if(nextProps.PersonArr!==this.props.PersonArr)
  //  {
  //    return true
  //  } 
  //  else {
  //   return false
  //  }
  // }

  getSnapshotBeforeUpdate(){
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return null;
  }
  componentDidUpdate(){
    console.log('[Persons.js] componentDidUpdate')
  }
  render(){
    console.log('[Persons.js] rendering...')
    return this.props.PersonArr.map((person,index)=>{
      return <Person 
      click = {()=>this.props.clicked(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={(event)=>this.props.changed(event,person.id)}
      />
    })
  }
};


export default Persons;
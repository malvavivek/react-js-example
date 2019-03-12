import React, {Component} from 'react';
import Style from './Person.css';
import Aux from '../../../hoc/Auxiliary'
class Person extends Component{
    componentDidMount(){
        console.log('[Person.js] componentDidMount')
      }
      shouldComponentUpdate(nextProps,nextState){
      console.log('[Person.js] shouldComponentUpdate')
      return true;
      }
      getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Person.js] getSnapshotBeforeUpdate')
        return null;
      }
      componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Person.js] componentDidUpdate')
      }
    render(){
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                <p onClick={this.props.click}>I'm name is {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }
}

export default Person;
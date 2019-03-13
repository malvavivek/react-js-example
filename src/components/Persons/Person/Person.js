import React, {Component} from 'react';
import Style from './Person.css';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
// import { classes } from '../../../../node_modules/coa';
class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();   //after React 16.3
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
                {this.props.isAuth? <p>Authenticated User</p>  : <p>Please Login</p>}
                <p onClick={this.props.click}>I'm name is {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                // ref={(inputElem)=>{this.inputElement=inputElem}}         //before 16.3
                ref={this.inputElementRef}
                onChange={this.props.changed} 
                value={this.props.name}
                />
            </Aux>
        );
    }
}
Person.propTypes ={
    click:PropTypes.func,
    name:PropTypes.string,
    changed:PropTypes.func,
    age:PropTypes.number
}
export default withClass(Person,Style.Person);
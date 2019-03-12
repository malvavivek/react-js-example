import React, {Component} from 'react';
import Style from './Person.css';

class Person extends Component{
    render(){
        return (
            <div className={Style.Person}>
                <p onClick={this.props.click}>I'm name is {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;
import React, { Component } from 'react';
import style from '../ColorChange/ColorChange.css';


class Color extends Component{

    state = {
        color: '',
        classRed : [style.box, style.red],
        classBlue : [style.box, style.blue],
        classGreen : [style.box, style.green],
        classYellow : [style.box, style.yellow],
        color: ''
    }

    assignColorRed = () =>{
       this.setState({
           color: 'red'
       });
    }

    assignColorBlue = () =>{
        this.setState({
            color: 'blue'
        });
     }

     assignColorGreen = () =>{
        this.setState({
            color: 'green'
        });
     }

     assignColorYellow = () =>{
        this.setState({
            color: 'yellow'
        });
     }

    render(){

        
            
        
    return(
        <div>
            
        <div className = {this.state.classRed.join(' ')} onClick = {this.assignColorRed}></div>
        <div className = {this.state.classBlue.join(' ')} onClick = {this.assignColorBlue}></div>
        <div className = {this.state.classGreen.join(' ')} onClick = {this.assignColorGreen}></div>
        <div className = {this.state.classYellow.join(' ')} onClick = {this.assignColorYellow}></div>
        </div>
    );

}
}

export default Color;
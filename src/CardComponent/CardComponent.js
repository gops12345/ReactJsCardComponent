import React, {Component} from 'react';
import CHead from '../CardHeader/CardHeader';
import CFoot from '../CardFoot/CardFoot';
import CChange from '../ColorChange/ColorChange';
import styles from '../CardHeader/CardHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends Component{
    state = {
        bodyMessage: 'Learn React? Start small.',
        footerMessage: 'Something Something else i fnot something else',
        footerHeading: 'Learn React? Start small.',
        name: 'Gopala Agrawal',
        clickedRed: false,
        clickedBlue: false,
        clickedGreen: false,
        clickedYellow: false,

        showColorTab: false
    }

    clickedRedColor = () =>{
        this.setState({
            clickedRed : true
        });
    }

    clickedBlueColor = () =>{
        this.setState({
            clickedBlue : true
        });
    }

    clickedGreenColor = () =>{
        this.setState({
            clickedGreen : true
        });
    }

    clickedYellowColor = () =>{
        this.setState({
            clickedYellow : true
        });
    }


    //ColoreTabToggle

    colorTabToggle = () => {

        
        const currentState = this.state.showColorTab;
        this.setState({
        
         showColorTab: !currentState
         

        });
       
        
    }

    render(){

        
            const backgrounColor = [styles.cardBody];
            const nameColor = [styles.textFix];
            if(this.state.clickedRed){
                backgrounColor.push(styles.red);
                nameColor.push(styles.textred);
                this.state.clickedRed = false;
            }
            if(this.state.clickedBlue){
                backgrounColor.push(styles.blue);
                nameColor.push(styles.textblue);
                this.state.clickedBlue = false;
            }
            if(this.state.clickedGreen){
                backgrounColor.push(styles.green);
                nameColor.push(styles.textgreen);
                this.state.clickedGreen = false;
            }
            if(this.state.clickedYellow){
                backgrounColor.push(styles.yellow);
                nameColor.push(styles.textyellow);
               this.state.clickedYellow = false;
            }
        
            
            const name = null;
        const classr = [styles.box, styles.red];
        const classb = [styles.box, styles.blue];
        const classg = [styles.box, styles.green];
        const classy = [styles.box, styles.yellow];
        
        return(
            <div>
            
           
            {
            this.state.showColorTab? 
            
            <div className = {styles.middle}>
            
            <div className = {classr.join(' ')} onClick = {this.clickedRedColor}></div>
            <div className = {classb.join(' ')} onClick = {this.clickedBlueColor}></div>
            <div className = {classg.join(' ')} onClick = {this.clickedGreenColor}></div>
            <div className = {classy.join(' ')} onClick = {this.clickedYellowColor}></div>
            </div> :
             null}
            <CHead bodyMessage = {this.state.bodyMessage} name= {this.state.name} color = {backgrounColor} nameColor = {nameColor}/>
            <FontAwesomeIcon icon="ellipsis-h"  className={styles.ellipPosition} onClick = {this.colorTabToggle} />
            <CFoot footerMessage = {this.state.footerMessage} footerHeading = {this.state.footerHeading}/>
            
            </div>
        );
    }
}

export default Card;
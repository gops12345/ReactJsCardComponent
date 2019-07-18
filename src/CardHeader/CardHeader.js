import React from 'react';
import CFoot from '../CardFoot/CardFoot';
import styles from '../CardHeader/CardHeader.css';



const card = (props) =>{
 
            const backgrounColor = [styles.cardBody];
            const nameColor = [styles.textFix];
            if(props.clickedRed){
                backgrounColor.push(styles.red);
                nameColor.push(styles.textred);
                
            }
            if(props.clickedBlue){
                backgrounColor.push(styles.blue);
                nameColor.push(styles.textblue);
               
            }
            if(props.clickedGreen){
                backgrounColor.push(styles.green);
                nameColor.push(styles.textgreen);
                
            }
            if(props.clickedYellow){
                backgrounColor.push(styles.yellow);
                nameColor.push(styles.textyellow);
               
            }

            const classr = [styles.box, styles.red];
        const classb = [styles.box, styles.blue];
        const classg = [styles.box, styles.green];
        const classy = [styles.box, styles.yellow];

   
    //const colorActive = '';
    
   
      return(
        

        


        <div className = {styles.cardContainer}>
            
        {/* color code */}  

     
            
            <div className = {styles.middle}>
            
            <div className = {classr.join(' ')} onClick = {props.clickedRedColor}></div>
            <div className = {classb.join(' ')} onClick = {props.clickedBlueColor}></div>
            <div className = {classg.join(' ')} onClick = {props.clickedGreenColor}></div>
            <div className = {classy.join(' ')} onClick = {props.clickedYellowColor}></div>
            </div> 
            
        


    
        
        <div className = {backgrounColor.join(' ')}>
            
            <div className = {styles.box_main}>
                DEV
            </div>
            
        <h1>{props.bodyMessage}</h1>
        

        <div className={styles.side_box}>
           <p1 className={nameColor.join(' ')}>{props.name}</p1> 
           <div className= {styles.imageSpace}> 
          
           </div>
           
        </div>
        </div>
        </div>
        
    );
}

export default card;
import React from 'react';
import CFoot from '../CardFoot/CardFoot';
import styles from '../CardHeader/CardHeader.css';



const card = (props) =>{
 
   

   
    //const colorActive = '';
    
   
      return(
        <div className = {styles.cardContainer}>
    
        


    
        
        <div className = {props.color.join(' ')}>
            
            <div className = {styles.box_main}>
                DEV
            </div>
            
       
        <textarea name='text' rows='5' cols = '80' wrap ='soft'></textarea>

        <div className={styles.side_box}>
           <p1 className={props.nameColor.join(' ')}>{props.name}</p1> 
           <div className= {styles.imageSpace}> 
          
           </div>
           
        </div>
        </div>
        </div>
        
    );
}

export default card;
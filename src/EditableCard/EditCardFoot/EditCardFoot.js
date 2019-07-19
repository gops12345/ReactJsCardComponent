import React from 'react';
import style from './EditCardFoot.css';

const cardFoot = (props) =>{
    return(
        <div className = {style.cardFooter}>
            <p className= {style.footerHeading}>{props.footerHeading}</p>
            <p>{props.footerMessage}</p>
        </div>
    );
}

export default cardFoot;
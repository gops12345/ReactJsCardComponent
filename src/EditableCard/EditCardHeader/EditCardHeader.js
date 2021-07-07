import React from "react";
import CFoot from "../EditCardFoot/EditCardFoot";
import styles from "./EditCardHeader.css";


const card = props => {
  // -----------------------Card Body Style-----------------------------------
  const styleCardBody = {
    backgroundColor: "orange",
    width: "35%",
    boxShadow: "0px 2px 2px 2px #ccc",
    borderRadius: "5px",
    margin: "auto",
    padding: "80px 30px 80px 30px",
    color: "white",
    fontSize: "1.5rem"
  };
// -----------------------------Card Name Style-------------------------------------------
  const styleName = {
    position: 'relative',
    top: '9px',
    color: 'orange'
  };

//  -------------------------------Changing Background Color-----------------------------------
//-----Red Click-------
  if (props.ClickedRed) {
    styleCardBody.backgroundColor = "orange";
    styleName.color = 'orange';
  }

  //---Blue Click-----
  if (props.ClickedBlue) {
    styleCardBody.backgroundColor = "palevioletred";
    styleName.color = 'palevioletred';
  }

  //------Green Click---------
  if (props.ClickedGreen) {
    styleCardBody.backgroundColor = "green";
    styleName.color = 'green';
  }

  //------Yellow Click---------
  if (props.ClickedYellow) {
    styleCardBody.backgroundColor = "orangered";
    styleName.color = 'orangered';
  }

  //-----------Merging Style Classes For Color Tab----------------------------------------
  const classr = [styles.box, styles.red];
  const classb = [styles.box, styles.blue];
  const classg = [styles.box, styles.green];
  const classy = [styles.box, styles.yellow];

  //---------------------------Return Function-------------------------------------------

  return (
    <div className={styles.cardContainer}>
      {/* color code */}


    {/* ---------------------Switching Color Tab------------------------------------------ */}
      {props.show?<div className={styles.middle}>
        <div className={classr.join(" ")} onClick={props.ClickedRedColor} />
        <div className={classb.join(" ")} onClick={props.ClickedBlueColor} />
        <div className={classg.join(" ")} onClick={props.ClickedGreenColor} />
        <div className={classy.join(" ")} onClick={props.ClickedYellowColor} />
      </div>:null}

    {/* -----------------------Card Body Style--------------------------------- */}
      <div style={styleCardBody}>
        {/* --------- Dev Box Style---------------------------- */}
        <div className={styles.box_main}>DEV</div>

      {/* ----------------------Body Message---------------------- */}
      {/* -------------------Switching with text-area in the Editable Card--------------------- */}
        <textarea row='3' col='20' onChange = {props.change}></textarea>

        
        {/* <h1>{props.bodyMessage}</h1> */}

        <div className={styles.side_box}>
          <p1 style = {styleName}>{props.name}</p1>
          <div className={styles.imageSpace} />
        </div>
      </div>
    </div>
  );
};

export default card;

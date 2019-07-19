import React from "react";
import CFoot from "../CardFoot/CardFoot";
import styles from "./CardHeader.css";

const card = props => {
  //--------------Card Body Style------------------
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
//-------------Card Name Style----------------------
  const styleName = {
    position: 'relative',
    top: '9px',
    color: 'orange'
  };

 //-----------Background Color Change Functions------------------
 //------Change Red-------
  if (props.ClickedRed) {
    styleCardBody.backgroundColor = "orange";
    styleName.color = 'orange';
  }

  //------Change Blue------
  if (props.ClickedBlue) {
    styleCardBody.backgroundColor = "palevioletred";
    styleName.color = 'palevioletred';
  }

  //-------Change Green-----
  if (props.ClickedGreen) {
    styleCardBody.backgroundColor = "green";
    styleName.color = 'green';
  }

  //-------Change Yellow-------
  if (props.ClickedYellow) {
    styleCardBody.backgroundColor = "orangered";
    styleName.color = 'orangered';
  }


  //--------Merging color tab classes---------------------
  const classr = [styles.box, styles.red];
  const classb = [styles.box, styles.blue];
  const classg = [styles.box, styles.green];
  const classy = [styles.box, styles.yellow];

  return (
    <div className={styles.cardContainer}>
      {/* color code */}

    {/* --------------------------Switching color Tab----------------------------- */}
      {props.show?<div className={styles.middle}>
        <div className={classr.join(" ")} onClick={props.ClickedRedColor} />
        <div className={classb.join(" ")} onClick={props.ClickedBlueColor} />
        <div className={classg.join(" ")} onClick={props.ClickedGreenColor} />
        <div className={classy.join(" ")} onClick={props.ClickedYellowColor} />
      </div>:null}

    {/* -----------------------Card Body Div------------------------------------ */}
      <div style={styleCardBody}>
        {/* -------------------------Dev Box------------------------- */}
        <div className={styles.box_main}>DEV</div>

        {/* ------------------------Body Messaage--------------------------- */}
        <h1>{props.bodyMessage}</h1>

        <div className={styles.side_box}>
          <p1 style = {styleName}>{props.name}</p1>
          <div className={styles.imageSpace} />
        </div>
      </div>
    </div>
  );
};

export default card;

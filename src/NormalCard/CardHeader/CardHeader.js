import React from "react";
import CFoot from "../CardFoot/CardFoot";
import styles from "./CardHeader.css";

const card = props => {
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

  const styleName = {
    position: 'relative',
    top: '9px',
    color: 'orange'
  };

 
  if (props.ClickedRed) {
    styleCardBody.backgroundColor = "orange";
    styleName.color = 'orange';
  }
  if (props.ClickedBlue) {
    styleCardBody.backgroundColor = "palevioletred";
    styleName.color = 'palevioletred';
  }
  if (props.ClickedGreen) {
    styleCardBody.backgroundColor = "green";
    styleName.color = 'green';
  }
  if (props.ClickedYellow) {
    styleCardBody.backgroundColor = "orangered";
    styleName.color = 'orangered';
  }

  const classr = [styles.box, styles.red];
  const classb = [styles.box, styles.blue];
  const classg = [styles.box, styles.green];
  const classy = [styles.box, styles.yellow];

  return (
    <div className={styles.cardContainer}>
      {/* color code */}

      {props.show?<div className={styles.middle}>
        <div className={classr.join(" ")} onClick={props.ClickedRedColor} />
        <div className={classb.join(" ")} onClick={props.ClickedBlueColor} />
        <div className={classg.join(" ")} onClick={props.ClickedGreenColor} />
        <div className={classy.join(" ")} onClick={props.ClickedYellowColor} />
      </div>:null}

      <div style={styleCardBody}>
        <div className={styles.box_main}>DEV</div>

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

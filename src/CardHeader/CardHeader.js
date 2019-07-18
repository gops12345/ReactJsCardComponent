import React from "react";
import CFoot from "../CardFoot/CardFoot";
import styles from "../CardHeader/CardHeader.css";

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

  const nameColor = [styles.textFix];
  if (props.ClickedRed) {
    styleCardBody.backgroundColor = "orange";
    nameColor.push(styles.textred);
  }
  if (props.ClickedBlue) {
    styleCardBody.backgroundColor = "palevioletred";
    nameColor.push(styles.textred);
  }
  if (props.ClickedGreen) {
    styleCardBody.backgroundColor = "green";
    nameColor.push(styles.textred);
  }
  if (props.ClickedYellow) {
    styleCardBody.backgroundColor = "orangered";
    nameColor.push(styles.textred);
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
          <p1>{props.name}</p1>
          <div className={styles.imageSpace} />
        </div>
      </div>
    </div>
  );
};

export default card;

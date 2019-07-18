import React, { Component } from "react";
import CHead from "../CardHeader/CardHeader";
import CFoot from "../CardFoot/CardFoot";
import CChange from "../ColorChange/ColorChange";
import styles from "../CardHeader/CardHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Card extends Component {
  state = {
    bodyMessage: "Learn React? Start small.",
    footerMessage: "Something Something else i fnot something else",
    footerHeading: "Learn React? Start small.",
    name: "Gopala Agrawal",
    clickedRed: true,
    clickedBlue: false,
    clickedGreen: false,
    clickedYellow: false,

    showColorTab: false
  };

  clickedRedColor = () => {
    this.setState({
      clickedRed: true
    });
  };

  clickedBlueColor = () => {
    this.setState({
      clickedBlue: true
    });
  };

  clickedGreenColor = () => {
    this.setState({
      clickedGreen: true
    });
  };

  clickedYellowColor = () => {
    this.setState({
      clickedYellow: true
    });
  };

  //ColoreTabToggle

  colorTabToggle = () => {
    const currentState = this.state.showColorTab;
    this.setState({
      showColorTab: !currentState
    });
  };

  render() {
    return (
      <div>
        <CHead
          bodyMessage={this.state.bodyMessage}
          name={this.state.name}
          clickedRed = {this.state.clickedRed}
          clickedBlue= {this.state.clickedBlue}
          clickedGreen= {this.state.clickedGreen}
          clickedYellow= {this.state.clickedYellow}
          clickedRedColor ={this.state.clickedRedColor}
          clickedBlueColor ={this.state.clickedBlueColor}
          clickedGreenColor ={this.state.clickedGreenColor}
          clickedYellowColor ={this.state.clickedYellowColor}
          
        />
        <FontAwesomeIcon
          icon="ellipsis-h"
          className={styles.ellipPosition}
          onClick={this.colorTabToggle}
        />
        <CFoot
          footerMessage={this.state.footerMessage}
          footerHeading={this.state.footerHeading}
        />
      </div>
    );
  }
}

export default Card;

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
    clickedRed: false,
    clickedBlue: false,
    clickedGreen: false,
    clickedYellow: false,

    showColorTab: false
  };

  clickedRedColor = () => {
    this.setState({
      clickedBlue: false,
      clickedGreen: false,
      clickedYellow: false,
      clickedRed: true
    });
  };

  clickedBlueColor = () => {
    this.setState({
      clickedBlue: false,
      clickedGreen: false,
      clickedYellow: false,
      clickedBlue: true
    });
  };

  clickedGreenColor = () => {
    this.setState({
      clickedBlue: false,
      clickedGreen: false,
      clickedYellow: false,
      clickedGreen: true
    });
  };

  clickedYellowColor = () => {
    this.setState({
      clickedBlue: false,
      clickedGreen: false,
      clickedYellow: false,
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
          ClickedRed={this.state.clickedRed}
          ClickedBlue={this.state.clickedBlue}
          ClickedGreen={this.state.clickedGreen}
          ClickedYellow={this.state.clickedYellow}
          ClickedRedColor={this.clickedRedColor}
          ClickedBlueColor={this.clickedBlueColor}
          ClickedGreenColor={this.clickedGreenColor}
          ClickedYellowColor={this.clickedYellowColor}
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

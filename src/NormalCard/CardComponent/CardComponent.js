import React, { Component } from "react";
import CHead from "../CardHeader/CardHeader";
import CFoot from "../CardFoot/CardFoot";
import CChange from "../../ColorChange/ColorChange";
import styles from "../CardHeader/CardHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ECHead from "../../EditableCard/EditCardHeader/EditCardHeader";
import ECFoot from "../../EditableCard/EditCardFoot/EditCardFoot";

class Card extends Component {
  state = {
    bodyMessage: "",
    footerMessage: "Something Something else i fnot something else",
    footerHeading: "Learn React? Start small.",
    name: "Gopala Agrawal",
    clickedRed: false,
    clickedBlue: false,
    clickedGreen: false,
    clickedYellow: false,

    showColorTab: false,

    editCard: false
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

  //Edit Card

  editCard = () => {
    const currentState = this.state.editCard;
    this.setState({
      editCard: !currentState
    });
  };

  //-------------------------Getting Body Text----------------------------------------

  bodyText = event => {
    this.setState({
      bodyMessage: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.state.editCard ? (
          <div>
            <ECHead
              name={this.state.name}
              ClickedRed={this.state.clickedRed}
              ClickedBlue={this.state.clickedBlue}
              ClickedGreen={this.state.clickedGreen}
              ClickedYellow={this.state.clickedYellow}
              ClickedRedColor={this.clickedRedColor}
              ClickedBlueColor={this.clickedBlueColor}
              ClickedGreenColor={this.clickedGreenColor}
              ClickedYellowColor={this.clickedYellowColor}
              show={this.state.showColorTab}
              change={this.bodyText}
            />
            <FontAwesomeIcon
              icon="ellipsis-h"
              className={styles.ellipPosition}
              onClick={this.colorTabToggle}
            />
            <ECFoot
              footerMessage={this.state.footerMessage}
              footerHeading={this.state.footerHeading}
            />
          </div>
        ) : (
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
              show={this.state.showColorTab}
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
        )}

        <button className={styles.buttonPosition} onClick={this.editCard}>
          {" "}
          Edit{" "}
        </button>

        <button className={styles.buttonPosition} onClick={this.editCard}>
          {" "}
          Save{" "}
        </button>
        
      </div>
    );
  }
}

export default Card;

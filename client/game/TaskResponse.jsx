import React from "react";

import TaskResponseText from "./TaskResponseText";
import TaskResponseOptions from "./TaskResponseOptions";
import TaskResponseSlider from "./TaskResponseSlider";

import Slider from "meteor/empirica:slider";

export default class TaskResponse extends React.Component {
  renderSubmitted() {
    return (
      <div className="task-response">
        <div className="response-submitted">
          <h5>Waiting on other players...</h5>
          Please wait until all players are ready
        </div>
      </div>
    );
  }

  render() {
    const { player, round, stage } = this.props;
    // console.log({"player": player, "round": round, "stage": stage});

    // If the player already submitted, don't show the slider or submit button
    if (player.stage.submitted) {
      return this.renderSubmitted();
    }

    if (stage.name == "description") {
      return (
        <TaskResponseText {...this.props} />
      );
    } else if (stage.name == "qualities") {
      return (
        <TaskResponseOptions {...this.props} />
      )
    } else if (stage.name == "preference") {
      return (
        <TaskResponseSlider {...this.props} />
      );
    }
  }
}

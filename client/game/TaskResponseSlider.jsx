import React from "react";
import Slider from "meteor/empirica:slider";

export default class TaskResponse extends React.Component {
  handleChangeSlider = num => {
    const { player, stage } = this.props;
    const value = Math.round(num * 100) / 100;
    player.stage.set(stage.name, value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  render() {
    const { player, stage } = this.props;
    const value = player.stage.get(stage.name);
    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          <Slider
            min={0}
            max={1}
            stepSize={0.01}
            labelStepSize={0.25}
            onChange={this.handleChangeSlider}
            value={value}
            hideHandleOnEmpty
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

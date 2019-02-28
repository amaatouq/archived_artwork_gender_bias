import React from "react";
import Slider from "meteor/empirica:slider";

export default class TaskResponse extends React.Component {
  handleChangeSlider = num => {
    const { player, stage } = this.props;
    const value = Math.round(num * 100) / 100;
    player.round.set(stage.name, value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  render() {
    const { player, stage } = this.props;
    const value = player.round.get(stage.name);
    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          <Slider
            min={0}
            max={100}
            stepSize={0.01}
            labelStepSize={25}
            labelPrecision={0}
            onChange={this.handleChangeSlider}
            value={value}
            hideHandleOnEmpty
          />

          <button class="bp3-button bp3-intent-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

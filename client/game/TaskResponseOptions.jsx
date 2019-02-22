import React from "react";
import { Checkbox } from "@blueprintjs/core";

export default class TaskResponseOptions extends React.Component {
  state = { checkedOptions: {} }

  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  handleChangeCheckbox(quality, event) {
    const { player, stage } = this.props;
    if (this.state.checkedOptions[quality]) {
      this.state.checkedOptions[quality] = false;
    } else {
      this.state.checkedOptions[quality] = true;
    }
    const checkedOptions = this.state.checkedOptions;
    const value = Object.keys(checkedOptions).filter(function(key) {
      return checkedOptions[key] === true;
    });
    console.log(value);
    player.round.set(String(stage.index), value.join(', '));
  }

  render() {
    const { player, round, stage } = this.props;
    var options = [];
    _.each(round.get("relevantQualities"), (quality) => {
      options.push(
        <div className="task-response-option">
          <Checkbox
            checked={this.state.checkedOptions[quality] || false}
            label={quality}
            onChange={(event) => this.handleChangeCheckbox(quality, event)}
          />
        </div>
      );
    });

    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          {options}

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

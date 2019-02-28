import React from "react";
import { TextArea, Intent } from "@blueprintjs/core";

export default class TaskResponseText extends React.Component {
  state = { prepopulate: true }

  handleChangeText = event => {
    const { player, stage, readonly } = this.props;
    if (!readonly) {
      const value = event.currentTarget.value;
      player.round.set(stage.name, value);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  getPreviousRoundResponse(player) {
    const { round, stage } = this.props;
    const prevIndex = stage.index - 1;
    const prevStage = round.stages[prevIndex].name;
    return player.round.get(prevStage);
  }

  render() {
    const { player, stage, readonly } = this.props;
    var value = player.round.get(stage.name);

    if (this.state.prepopulate && stage.get("type") === "social") {
      value = this.getPreviousRoundResponse(player);
      this.state.prepopulate = false;
    }
    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          <div className="text-input">
            <TextArea
              className={readonly ? "" : "readonly"}
              large={true}
              intent={Intent.PRIMARY}
              onChange={this.handleChangeText}
              value={value}
            />
          </div>

          {readonly ? "" : <button class="bp3-button bp3-intent-primary" type="submit">Submit</button>}
        </form>
      </div>
    );
  }
}

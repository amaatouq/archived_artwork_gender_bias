import React from "react";
import { TextArea, Intent } from "@blueprintjs/core";

export default class TaskResponseText extends React.Component {
  handleChangeText = event => {
    const value = event.currentTarget.value;
    const { player, stage } = this.props;
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
          <div className="text-input">
            <TextArea
              large={true}
              intent={Intent.PRIMARY}
              onChange={this.handleChangeText}
              value={value}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

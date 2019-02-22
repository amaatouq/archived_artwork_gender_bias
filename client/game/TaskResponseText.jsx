import React from "react";

export default class TaskResponseText extends React.Component {
  handleChangeText = event => {
    const value = event.currentTarget.value;
    const { player, stage } = this.props;
    player.round.set(String(stage.index), value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  render() {
    const { player, stage } = this.props;
    const value = player.round.get(String(stage.index));
    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          <div className="text-input">
            <textarea
              onChange={this.handleChangeText}
              value={value}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

import React from "react";

export default class TaskResponseText extends React.Component {
  handleChangeText = event => {
    const value = Number(event.currentTarget.value);
    const { player } = this.props;
    player.round.set("value", value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  render() {
    const { player } = this.props;
    const value = player.round.get("value");
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

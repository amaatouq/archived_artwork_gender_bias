import React from "react";

export default class TaskResponseOptions extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  render() {
    const { player, round } = this.props;
    const value = player.round.get("value");
    var options = [];
    _.each(round.get("qualities"), (quality) => {
      options.push(
        <div className="task-response-option">
          <input
            type="checkbox"
            id={quality}
            name={quality}
          />
          <label for={quality}>{quality}</label>
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

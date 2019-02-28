import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions 1 </h1>
          <p class="bp3-ui-text">
            You will now be asked to describe and state your preference for {game.treatment.roundCount} artwork(s) by living artists.
          </p>
          <p class="bp3-ui-text">
            Answer the following questions purely based on your first impression.
          </p>
          <p class="bp3-ui-text">
            We only ask you to look at each artwork for 30 seconds before answering.
          </p>
          <p class="bp3-ui-text">
            You will be given 5 minutes to complete each task.
          </p>

          <button
            type="button"
            className="bp3-button bp3-intent-nope"
            onClick={onPrev}
            disabled={!hasPrev}
          >
            Previous
          </button>
          <button
            type="button"
            className="bp3-button bp3-intent-primary"
            onClick={onNext}
            disabled={!hasNext}
          >
            Next
            <span className="bp3-icon-standard bp3-align-right" />
          </button>
        </div>
      </Centered>
    );
  }
}

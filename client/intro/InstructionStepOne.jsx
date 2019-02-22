import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1> Instructions 1 </h1>
          <p>
            You will now be asked to describe and state your preference for {game.treatment.roundCount} artwork(s) by living artists.
          </p>
          <p>
            Answer the following questions purely based on your first impression.
          </p>
          <p>
            We only ask you to look at each artwork for 30 seconds before answering.
          </p>
          <p>
            You will be given 5 minutes to complete each task.
          </p>

          <p>
            <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Previous
            </button>
            <button type="button" onClick={onNext} disabled={!hasNext}>
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}

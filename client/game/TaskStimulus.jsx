import React from "react";

export default class TaskStimulus extends React.Component {
  render() {
    const { round, stage, player } = this.props;
    // console.log({"player": player, "round": round, "stage": stage});

    // const imagePath = round.get("imagePath");
    // const imagePath = require("/client/game/data/" + round.get("imagePath"));
    const imagePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/600px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
    const questionText = stage.get("questionText");
    return (
      <div className="task-stimulus">
        <div className="task-image">
          {imagePath == undefined ? "" : <img src={imagePath} height={"300px"} />}
        </div>
        <div className="task-information">
          <h1 className="artist bp3-heading">{round.get("artistName")}</h1>
          <div className="title-year bp3-ui-text">{`'${round.get('title')}' (${round.get("year")})`}</div>
          <div className="related-artists bp3-ui-text">
            <h2 className="bp3-heading">Related Artists</h2>
            {round.get("relatedArtists").join('\n')}
          </div>
        </div>
        <div className="task-question bp3-ui-text">
          <b>{questionText == undefined ? "" : questionText}</b>
        </div>
      </div>
    );
  }
}

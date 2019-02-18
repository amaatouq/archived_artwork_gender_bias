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
          <div className="artist">{round.get("artistName")}</div>
          <div className="title-year">{`'${round.get('title')}' (${round.get("year")})`}</div>
          <div className="related-artists">
            <h2>Related Artists</h2>
            {round.get("relatedArtists").join(', ')}
          </div>
        </div>
        <div className="task-question">
          <b>Please answer the following question:</b>
          <br />
          {questionText == undefined ? "" : questionText}
        </div>
      </div>
    );
  }
}

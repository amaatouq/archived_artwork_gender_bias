import Empirica from "meteor/empirica:core";

import "./callbacks.js";
import "./bots.js";

import { stageData } from "./constants";
import artData from "./toy_data.json";

// gameInit is where the structure of a game is defined.
// Just before every game starts, once all the players needed are ready, this
// function is called with the treatment and the list of players.
// You must then add rounds and stages to the game, depending on the treatment
// and the players. You can also get/set initial values on your game, players,
// rounds and stages (with get/set methods), that will be able to use later in
// the game.
Empirica.gameInit(game => {

  game.players.forEach((player, i) => {
    player.set("avatar", `/avatars/jdenticon/${player._id}`);
    player.set("score", 0);
  });

  const probFemale = 0.5; // treatment param

  // this should be parameter in treatments - should be set in admin UI
  for (var i = 0; i < 10; i++) {
    const randomArtwork = artData[Math.floor(Math.random()*artData.length)];
    const femaleArtist = Math.random() < probFemale;
    const round = game.addRound({
      data: {
        artistGender: femaleArtist ? "female" : "male",
        artistName: femaleArtist
          ? randomArtwork.artistGender.female[0]
          : randomArtwork.artistGender.male[0]
        ,
        title: randomArtwork.title,
        year: "2019",
        relatedArtists: randomArtwork.relatedArtists.mix,  // randomly select
        // relatedArtists: male/female/mixed --> export round data
        qualities: randomArtwork.relevantQualties,
        imagePath: randomArtwork.artworkID + ".jpeg"
      }
    });

    _.each(stageData, (stage, stageName) => {
      round.addStage({
        name: stageName,
        displayName: stage.title,
        durationInSeconds: 120000, // factor in treatment
        data: {
          questionText: stage.questionText
        }
      })
    })
  }

  // _.each(taskData, (task, taskName) => {
  //   const round = game.addRound({
  //     data: {
  //       taskName: taskName,
  //       questionText: task.questionText,
  //       imagePath: task.path
  //     }
  //   });
  //
  //   round.addStage({
  //     name: "response",
  //     displayName: "Response",
  //     durationInSeconds: 30000 //game.treatment.stageLength
  //   });
  // });
});

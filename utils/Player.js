class Player {
  constructor() {}
  bowl = function (rollScore, currentFrame) {
    currentFrame.receiveShot(rollScore);
  };
}

module.exports = Player;

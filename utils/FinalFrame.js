var Frame = require('../src/frame.js');

class FrameTen {
  constructor() {
    this.thirdShot = null;
    this.isFrame10 = true;
  }

  receiveShot(rollScore) {
    this._updateFrameVariables(rollScore);
    this.shotCount++;
  }

  _updateFrameVariables(rollScore) {
    this._resetPins(rollScore);
    this.score += rollScore;
    this._assignShot(rollScore);
  }

  _resetPins(rollScore) {
    if (rollScore === 10) {
      this.pinCount = 10;
    } else if (this.firstShot + this.secondShot === 10) {
      this.pinCount = 10;
    } else {
      this.pinCount -= rollScore;
    }
  }

  _isSpareOrStrikeWith3Shots() {
    return (this.isSpare() || this.isStrike()) && this.shotCount === 3;
  }

  _isNotASpareOrStrikeWith2Shots() {
    return !this.isStrike() && !this.isSpare() && this.shotCount === 2;
  }
  _assignShot(rollScore) {
    this.firstShot === null
      ? (this.firstShot = rollScore)
      : this.secondShot === null
      ? (this.secondShot = rollScore)
      : (this.thirdShot = rollScore);
  }
}

module.exports = FrameTen;

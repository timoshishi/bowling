class Frame {
  constructor() {
    this.pinCount = 10;
    this.shotCount = 0;
    this.firstShot = null;
    this.secondShot = null;
    this.score = 0;
  }

  isSpare() {
    if (this.firstShot + this.secondShot === 10 && this.secondShot !== null) {
      return true;
    }
  }

  isStrike() {
    if (this.firstShot === 10) {
      return true;
    }
  }

  receiveShot(rollScore) {
    this._updateFrameVariables(rollScore);
    this.shotCount++;
  }

  _updateFrameVariables(rollScore) {
    this.pinCount -= rollScore;
    this.score += rollScore;
    this.firstShot === null
      ? (this.firstShot = rollScore)
      : (this.secondShot = rollScore);
  }
}
module.exports = Frame;

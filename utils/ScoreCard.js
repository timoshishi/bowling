var Frame = require('../src/Frame');
var FrameTen = require('../src/FrameTen');

class ScoreCard {
  constructor() {
    this.frames = [];
  }
  create(element) {
    if (this.frameCount() === 10) {
      throw new Error(
        'No more frames available, create a new game to play again.'
      );
    }
    for (var i = 0; i < 9; i++) {
      this.frames.push(new element());
    }
    this.frames.push(new FrameTen());
  }
  frameCount() {
    return this.frames.length;
  }
  score() {
    var total = 0;
    for (var i = 0; i < this.frames.length; i++) {
      total += this.frames[i].score;
    }
    return total;
  }
  evaluateScores() {
    for (var i = 0; i < 9; i++) {
      this._evaluateSpare(i);
      this._evaluateStrike(i);
    }
  }
  _evaluateSpare(i) {
    if (this.frames[i].isSpare()) {
      this.frames[i].score += this._firstExtraRoll(i);
    }
  }
  _evaluateStrike(i) {
    if (this.frames[i].isStrike()) {
      this.frames[i].score +=
        this._firstExtraRoll(i) + this._secondExtraRoll(i);
    }
  }
  _firstExtraRoll(i) {
    return this.frames[i + 1].firstShot;
  }
  _secondExtraRoll(i) {
    return this.frames[i + 1].secondShot || this.frames[i + 2].firstShot;
  }
}

module.exports = Scorecard;

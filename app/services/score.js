import Ember from 'ember';

const { Service } = Ember;

export default Service.extend({
  currentScore: null,
  highScore: null,

  init() {
    this._super(...arguments);
    this.set('currentScore', 0);
  },

  addToScore(increaseToScore) {
    this.set('currentScore', this.get('currentScore') + increaseToScore);
  },
});

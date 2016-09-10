import Ember from 'ember';

const { Component, inject: { service } } = Ember;

export default Component.extend({
  classNames: ['game'],

  score: service(),

  init() {
    this._super(...arguments);
    this.addEventListeners();
  },

  willDestroy() {
    this._super(...arguments);
    this.removeEventListeners();
  },

  addEventListeners() {
    window.addEventListener('keydown', this.handleKeyPress.bind(this));
  },

  removeEventListeners() {
    window.removeEventListener('keydown', this.handleKeyPress.bind(this));
  },

  handleKeyPress(event) {
    switch (event.key) {
      case ' ':
        this.get('score').addToScore(1);
        break;
    }
  },
});

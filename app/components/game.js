import Ember from 'ember';
import FocusableComponent from 'ember-component-focus/mixins/focusable-component';

const { Component, inject: { service } } = Ember;

export default Component.extend(FocusableComponent, {
  classNames: ['game'],

  score: service(),

  actions: {
    focusComponent() {
      this.focus();
    },
  },

  keyDown(event) {
    if (event.key === ' ') {
      this.get('score').addToScore(1);
    }
  },
});

import Ember from 'ember';

const { A, Component } = Ember;

export default Component.extend({
  currentScoreAssets: A(),

  didReceiveAttrs() {
    this._super(...arguments);

    const scoreArray = this.get('currentScore').toString().split('');
    const scoreAssetsProxy = A();

    scoreArray.forEach(score => {
      scoreAssetsProxy.push(`assets/images/font_big_${score}.png`);
    });

    this.set('currentScoreAssets', scoreAssetsProxy);
  },
});

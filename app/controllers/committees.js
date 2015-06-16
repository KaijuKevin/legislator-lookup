import Ember from 'ember';

export default Ember.Controller.extend({
  chamberSelect: ['senate', 'house'],
  actions: {
    selectChamber: function() {
      this.transitionToRoute('committee', this.get('chamber'))
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
      this.transitionToRoute('contact', this.get('zip'));
    },
    showBills: function() {
      this.transitionToRoute('bills');
    },
    showRecentBills: function() {
      this.transitionToRoute('recent-bills');
    }
  }
});

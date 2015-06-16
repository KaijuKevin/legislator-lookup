import Ember from 'ember';

export default Ember.Controller.extend({
  isHouse: function() {
    if (this.chamber === "house");
  }.property('chamber')
});

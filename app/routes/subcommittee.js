import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'https://congress.api.sunlightfoundation.com/committees?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&subcommittee=true&parent_committee_id=' + params.parent_committee_id;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var subCommittees = [];
      responseJSON.results.forEach(function(committee) {
        subCommittees.push(committee);
      });
      return subCommittees;
    });
  }
});

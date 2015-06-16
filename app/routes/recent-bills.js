import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('recent-bills', {
      into: 'legislators',
      outlet: 'bills',
      controller: 'recent-bills'
    });
  },
  model: function() {
    var url = 'https://congress.api.sunlightfoundation.com/bills?history.awaiting_signature=true&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
    return Ember.$.getJSON(url).then(function(responseJSON){
      var recentBills = [];
      responseJSON.results.forEach(function(recentBill) {
        recentBills.push(recentBill);
      });
      return recentBills;
    });
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('bills', {
      into: 'legislators',
      outlet: 'bills',
      controller: 'bills'
    });
  },
  model: function() {
    var url = 'https://congress.api.sunlightfoundation.com/upcoming_bills?range=week&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
    return Ember.$.getJSON(url).then(function(responseJSON){
      var bills = [];
      responseJSON.results.forEach(function(bill){
        bills.push(bill);
      });
      return bills;
    });
  }
});

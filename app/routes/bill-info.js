import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'https://congress.api.sunlightfoundation.com/bills?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&bill_id=' + params.bill_id;
    return Ember.$.getJSON(url).then(function(responseJSON){
      var bill = responseJSON.results[0];
      return bill;
    });
  }
});

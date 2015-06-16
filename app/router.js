import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('legislators', {path: '/'}, function() {
    this.resource('contact', {path: 'contact/:zip'});
    this.resource('bills');
    this.resource('recent-bills');
  });
  this.resource('committees', function() {
    this.resource('committee', {path: 'committee/:chamber'}, function() {
      this.resource('subcommittee', {path: '/subcommittee/:parent_committee_id'});
    });
  });
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('checkout');
});

Router.map(function() {
  this.route('programm');
  this.route('checkout', function() {
    this.route('plan');
    this.route('personal-information');
    this.route('payment');
  });
});

export default Router;

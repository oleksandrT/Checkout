import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('checkout', function() {
    this.route('plan');
    this.route('personalinformation');
    this.route('payment');
  });
});

export default Router;

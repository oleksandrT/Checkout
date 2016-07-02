  import Ember from 'ember';

export function sum(params/*, hash*/) {
  return params.reduce(function(a, b) {
      return a + b;
  });
}

export default Ember.Helper.helper(sum);

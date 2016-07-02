import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var products = this.get('products');
    return products.getProducts();
  },
  products: Ember.inject.service()
});

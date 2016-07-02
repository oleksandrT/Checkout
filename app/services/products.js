import Ember from 'ember';

export default Ember.Service.extend({
  getProducts: function () {
    return [
      {title: 'PS Vita', price: '9.90', image: 'assets/images/SonyPlaystationVita4_02.png'},
      {title: 'Sennheiser Urbanite XL Wireless', price: '24.90', image: 'assets/images/SennheiserUrbaniteXLWireless_01.png'}
    ];
  }
});

(function() {

var util = mcc.util;


var PageView = mcc.PageView = mcc.View.extend({

  className: 'page-view',

  events: {
    'click #image':               'triggerShowContent',
  },

  template: '\
    <h1 id="injected"><%= title %>.</h1>\
    <p id="injected"><%= subtext %>.</p>\
  ',

  initialize: function() {
  },

  render: function() {
    this.$el.empty();

    this.$el.append(_.template(this.template)(this.model)); //Eric says that this is wrong
  }

});

})();

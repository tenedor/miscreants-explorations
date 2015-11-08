(function() {

var util = mcc.util;


var View = mcc.View = Backbone.View.extend({

  className: 'view',

  template: _.template('\
    <p id="injected">This paragraph comes from View.</p>\
  '),

  initialize: function() {},

  render: function() {
    this.$el.empty();

    this.$el.append(this.template);
  }

});

})();

(function() {

var util = mcc.util;


var View = mcc.View = Backbone.View.extend({

  className: 'view',

  events: {},

  template: _.template('\
    <p class="injected">This paragraph comes from View.</p>\
  '),

  initialize: function(options) {
    this.options = _.omit(options, ['model', 'events']);
  },

  render: function() {
    this.$el.empty();

    this.$el.append(this.template(this.model._data));

    return this;
  }

});

})();

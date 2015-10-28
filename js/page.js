(function() {

var root = this;
var mcc = root.mcc = {};

var PageView = mcc.PageView = Backbone.View.extend({

  className: 'page-view',

  events: {
    'click #image':               'triggerShowContent',
  },

  template: '\
    <p id="injected">This paragraph comes from PageView.</p>\
  ',

  initialize: function() {
  },

  render: function() {
    this.$el.empty();

    this.$el.append(_.template(this.template));
  }

});

}).call(this);

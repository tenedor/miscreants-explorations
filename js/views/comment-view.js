(function() {

var util = mcc.util;


var CommentView = mcc.CommentView = mcc.View.extend({

  className: 'comment-view',

  events: {},

  template: _.template('\
  '),

  initialize: function() {},

  render: function() {
    this.$el.empty();

    this.$el.append(this.template(this.model._data));
  }

});

})();


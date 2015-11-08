(function() {

var util = mcc.util;


var CommentView = mcc.CommentView = mcc.View.extend({

  className: 'comment-view',

  events: //none?

  template: //some string??

  initialize: function() {},

  render: function() {
    this.$el.empty();

    this.$el.append(_.template(this.template)(this.model));
  }

});
})();


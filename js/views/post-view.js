(function() {

var util = mcc.util;
var View = mcc.View;
var ContentView = mcc.ContentView;


var PostView = mcc.PostView = View.extend({

  className: 'post-view',

  template: _.template('\
    <div class="content"></div>\
    <div class="comments"></div>\
  '),

  initialize: function() {
    this.contentView = new ContentView({model: this.model});
  },

  render: function() {
    this.$el.empty();

    this.$el.append(this.template(this.model._data));
    this.$('.content').append(this.contentView.render().el);

    return this;
  }

});

})();

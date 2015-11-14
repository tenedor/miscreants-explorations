(function() {

var util = mcc.util;
var View = mcc.View;


var ContentView = mcc.ContentView = View.extend({

  className: 'content-view',

  template: _.template('\
    <div class="header">\
      Post from <span class="author"><%= author %></span>\
      at <span class="timestamp"><%= timestamp %></span>\
    </div>\
    <p class="text"><%= text %></p>\
    <div class="image"></div>\
  '),

  render: function() {
    var src;

    this.$el.empty();

    this.$el.append(this.template(this.model._data));

    if (this.model.hasImage()) {
      src = this.model.fullImagePath();
      this.$('.image')
          .addClass('has-image')
          .append($('<img src="' + src + '">'));
    };

    return this;
  }

});

})();

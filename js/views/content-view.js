(function() {

var util = mcc.util;
var View = mcc.View;


var ContentView = mcc.ContentView = View.extend({

  className: 'content-view',

  template: _.template('\
    <div class="header">\
      <span class="prefix-text"><%= headerPrefixText %></span>\
      <span class="author"><%= author %></span>\
      at <span class="timestamp"><%= timestamp %></span>\
    </div>\
    <p class="text"><%= text %></p>\
    <div class="image"></div>\
  '),

  render: function() {
    var parameters, src;

    this.$el.empty();

    parameters = _.defaults({}, this.model._data, this.options, {
      headerPrefixText: ""
    });
    this.$el.append(this.template(parameters));

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

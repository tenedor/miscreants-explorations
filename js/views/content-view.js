(function() {

var util = mcc.util;


var ContentView = mcc.ContentView = mcc.View.extend({

  className: 'content-view',

  events: {

  },

  textTemplate: _.template('\
    <p id="injected">CONTENT TIME</p>\
    <p id="injected"><%= text %>.</p>\
  '),

  imgTemplate: _.template('\
    <p id="injected">CONTENT TIME</p>\
    <img id="injected" src="<%= imgPath %>">\
  '),

  initialize: function() {
  },

  render: function() {
    this.$el.empty();

    if (this.model.imgPath() === undefined) {
      // is a piece of text
      this.$el.append(textTemplate(this.model._data));
    } else {
      // is an image
      this.$el.append(imgTemplate({imgPath : this.model.fullImagePath()}));
    }
  }

});

})();

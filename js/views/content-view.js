(function() {

var util = mcc.util;


var ContentView = mcc.ContentView = mcc.View.extend({

  className: 'content-view',

  events: {

  },

  textTemplate: '\
    <p id="injected">CONTENT TIME</p>\
    <p id="injected"><%= text %>.</p>\
  ',

  imgTemplate: '\
    <p id="injected">CONTENT TIME</p>\
    <img id="injected" src="<%= imgPath %>">\
  ',

  initialize: function() {
  },

  render: function() {
    this.$el.empty();

    if (this.model.imgPath() === undefined) {
      // is a piece of text
      this.$el.append(_.template(textTemplate)({text : this.model.text()}));
    } else {
      // is an image
      this.$el.append(_.template(imgTemplate)({imgPath : this.model.fullImagePath()}));
    }
  }

});

})();

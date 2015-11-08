(function() {

var util = mcc.util;


var PostView = mcc.PostView = mcc.View.extend({

  className: 'post-view',

  events: {
    'click #image':               'triggerShowContent',
  },

  template: _.template('\
    <p id="injected">Start of post.</p>\
    <div id="contentContainer"></div>\
    <div id="commentListContainer"></div>\
    <p id="injected">End of post.</p>
  '),

  initialize: function() {
  },

  render: function() {
    this.$el.empty();

    this.$el.append(this.template);

    // TODO render content
    content.render();
    // TODO figure out how to append rendered version of things
    this.$("#contentContainer").append(content.$el);

    // TODO render comment list
  }

});

})();

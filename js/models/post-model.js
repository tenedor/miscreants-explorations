(function() {

var util = mcc.util;


var PostModel = mcc.PostModel = mcc.Model.extend({

  initialize: function() {
    this.__super__.initialize();
  },

  defaults: _.extend({}, mcc.Model.prototype.defaults, {
    content: undefined, // add getsetter
    comments: [] // add getsetter
  }),

  addComment: function(content) {
    this.comments.append(content);
  },

  content: getSetterFlag,
  comments: getSetterFlag

});

})();

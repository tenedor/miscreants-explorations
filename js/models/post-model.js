(function() {

var util = mcc.util;


var PostModel = mcc.PostModel = mcc.Model.extend({

  initialize: function(content) {
    this.__super__.initialize();

    this.content = content; // add getsetter
    this.comments = []; // add getsetter
  },

  addComment: function(content) {
    this.comments.append(content);
  }

});

})();

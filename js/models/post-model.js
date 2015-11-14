(function() {

var util = mcc.util;
var List = mcc.List;
var Model = mcc.Model;
var ContentModel = mcc.ContentModel;

var getSetterFlag = Model.getSetterFlag;


var PostModel = mcc.PostModel = ContentModel.extend({

  initialize: function(data, options) {
    this.__super__.initialize.apply(this, arguments);

    if (util.isArray(this.comments)) {
      this.comments = new List(this.comments);
    };
  },

  defaults: _.extend({}, ContentModel.prototype.defaults, {
    comments: []
  }),

  addComment: function(comment) {
    this.comments.addMember(comment);
  },

  comments: getSetterFlag

});

PostModel.expandGetSetters();

})();

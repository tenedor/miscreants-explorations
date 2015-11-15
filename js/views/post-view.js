(function() {

var util = mcc.util;
var CommentModel = mcc.CommentModel;
var ContentView = mcc.ContentView;
var CommentView = mcc.CommentView;
var NewContentView = mcc.NewContentView;


var PostView = mcc.PostView = ContentView.extend({

  className: ContentView.prototype.className + ' post-view',

  template: _.template('\
    <div class="content"></div>\
    <hr/>\
    <div class="comment-feed">\
      <div class="comments"></div>\
      <div class="new-comment"></div>\
    </div>\
  '),

  initialize: function() {
    this.__super__.initialize.apply(this, arguments);

    this.contentView = new ContentView({
      model: this.model,
      headerPrefixText: "Post from"
    });

    this.newComment = new NewContentView({
      model: mcc.data.models.user, // TODO - don't reach into mcc.data
      ModelConstructor: CommentModel,
      textInputPrompt: "reply",
      buttonName: "Comment"
    });
    this.newComment.on('content:created', _.bind(this.addComment, this));

    this.commentViews = this.model.comments().map(function(commentModel) {
      return new CommentView({model: commentModel});
    });
  },

  render: function() {
    this.$el.empty();

    this.$el.append(this.template(this.model._data));
    this.$('.content').append(this.contentView.render().el);
    this.$('.new-comment').append(this.newComment.render().el);

    this.renderComments();

    return this;
  },

  renderComments: function() {
    var that = this;

    this.$('.comments').empty();

    this.commentViews.each(function(commentView) {
      that.$('.comments').append(commentView.render().el);
    });
  },

  addComment: function(model) {
    this.model.comments().addMember(model);
    this.commentViews.addMember(new CommentView({model: model}));
    this.newComment.reset();
    this.renderComments();
  }

});

})();

(function() {

var util = mcc.util;
var PostModel = mcc.PostModel;
var View = mcc.View;
var NewContentView = mcc.NewContentView;
var PostView = mcc.PostView;


var PageView = mcc.PageView = View.extend({

  className: 'page-view',

  events: {
    'change input.username': 'updateUsername',
  },

  template: _.template('\
    <div id="fixed-header">\
      <div class="left">\
        <h1 class="title">M4G1K BAR</h1>\
      </div>\
      <div class="right">\
        <input type="text" class="username form-control">\
      </div>\
    </div>\
    <div id="fixed-header-shadow"></div>\
    <div class="post-feed">\
      <div class="new-post"></div>\
      <div class="posts"></div>\
    </div>\
  '),

  initialize: function() {
    this.__super__.initialize.apply(this, arguments);

    this.newPost = new NewContentView({
      model: this.model.user(),
      ModelConstructor: PostModel
    });
    this.newPost.on('content:posted', _.bind(this.addPost, this));

    this.postViews = this.model.posts().map(function(postModel) {
      return new PostView({model: postModel});
    });
  },

  render: function() {
    this.$el.empty();

    this.$el.append(this.template(this.model._data));
    this.$('input.username').val(this.model.user().name());
    this.$('.new-post').append(this.newPost.render().el);

    this.renderPosts();

    return this;
  },

  renderPosts: function() {
    var that = this;

    this.$('.posts').empty();

    this.postViews.each(function(postView) {
      that.$('.posts').prepend(postView.render().el);
    });
  },

  addPost: function(model) {
    this.model.posts().addMember(model);
    this.postViews.addMember(new PostView({model: model}));
    this.newPost.reset();
    this.renderPosts();
  },

  updateUsername: function() {
    this.model.user().name(this.$('input.username').val());
  }

});

})();

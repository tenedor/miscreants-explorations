(function() {

var util = mcc.util;
var ContentModel = mcc.ContentModel;
var View = mcc.View;


var NewContentView = mcc.NewContentView = View.extend({

  className: 'new-content-view',

  events: {
    'click .post-button': 'createPost',
  },

  template: _.template('\
    <div class="fields">\
      <textarea name="text" placeholder="share your struggles"\
          class="form-control"></textarea>\
      <input type="text" name="img-path" placeholder="add an image"\
          class="form-control"></input>\
    </div>\
    <div class="post-button-container">\
      <a type="submit" class="btn btn-default post-button">Post</a>\
    </div>\
  '),

  initialize: function(options) {
    this.ModelConstructor = options.ModelConstructor || ContentModel;
  },

  render: function() {
    this.$el.empty();

    this.$el.append(this.template());

    return this;
  },

  createPost: function() {
    var model = new this.ModelConstructor();

    model.author(this.model.name());
    model.timestamp(Date.now());
    model.text(this.$('[name="text"]').val());
    model.imgPath(this.$('[name="img-path"]').val());

    this.trigger('content:posted', model);
  },

  reset: function() {
    this.$('[name="text"]').val('');
    this.$('[name="img-path"]').val('');
  }

});

})();

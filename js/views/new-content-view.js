(function() {

var util = mcc.util;
var ContentModel = mcc.ContentModel;
var View = mcc.View;


var NewContentView = mcc.NewContentView = View.extend({

  className: 'new-content-view',

  events: {
    'click .submit-button': 'createContent',
  },

  template: _.template('\
    <div class="fields">\
      <textarea name="text" placeholder="<%= textInputPrompt %>"\
          class="form-control"></textarea>\
      <input type="text" name="img-path" placeholder="<%= imageInputPrompt %>"\
          class="form-control"></input>\
    </div>\
    <div class="submit-button-container">\
      <a type="submit" class="btn btn-default submit-button">\
        <%= buttonName %>\
      </a>\
    </div>\
  '),

  initialize: function(options) {
    this.__super__.initialize.apply(this, arguments);
    this.ModelConstructor = options.ModelConstructor || ContentModel;
  },

  render: function() {
    var parameters;

    this.$el.empty();

    parameters = _.defaults({}, this.options, {
      textInputPrompt: "add some text",
      imageInputPrompt: "add an image",
      buttonName: "Create"
    });
    this.$el.append(this.template(parameters));

    return this;
  },

  createContent: function() {
    var model = new this.ModelConstructor();

    model.author(this.model.name());
    model.timestamp(Date.now());
    model.text(this.$('[name="text"]').val());
    model.imgPath(this.$('[name="img-path"]').val());

    this.trigger('content:created', model);
  },

  reset: function() {
    this.$('[name="text"]').val('');
    this.$('[name="img-path"]').val('');
  }

});

})();

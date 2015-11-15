(function() {

var util = mcc.util;
var View = mcc.View;


var MagicBarView = mcc.MagicBarView = View.extend({

  className: 'magic-bar-view',

  events: {
    'keydown [name="magic-query"]': 'onKeydownQueryField',
  },

  template: _.template('\
    <input type="text" name="magic-query" placeholder="M4G1K"\
        class="form-control"></input>\
  '),

  render: function() {
    this.$el.empty();

    this.$el.append(this.template());

    return this;
  },

  onKeydownQueryField: function(e) {
    if (e.which === util.keys.ENTER) {
      this.createQuery();
    };
  },

  createQuery: function() {
    var query = this.$('[name="magic-query"]').val();

    this.trigger('query:created', query);
  },

  reset: function() {
    this.$('[name="magic-query"]').val('');
  }

});

})();

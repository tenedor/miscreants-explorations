(function() {

var util = mcc.util;
var View = mcc.View;
var MagicBarView = mcc.MagicBarView;


var MagicFeedView = mcc.MagicFeedView = View.extend({

  className: 'magic-feed-view',

  template: _.template('\
    <div class="magic-feed">\
      <div class="magic-bar-container"></div>\
      <div class="magic-results-container"></div>\
    </div>\
  '),

  initialize: function() {
    this.__super__.initialize.apply(this, arguments);

    this.magicBar = new MagicBarView();
    this.magicBar.on('query:created', _.bind(this.newQuery, this));

    this.magicResults = $('<div class="magic-results">');
  },

  render: function() {
    this.$el.empty();

    this.$el.append(this.template());
    this.$('.magic-bar-container').append(this.magicBar.render().el);

    // for now, just track the list of magic results in an html node
    this.$('.magic-results-container').empty().append(this.magicResults);

    return this;
  },

  newQuery: function(query) {
    var queryNode = $('<div class="magic-result">');

    // for now, do the dumbest thing of shoving the query straight into html
    queryNode.append(util.toString(query));

    this.magicResults.prepend(queryNode);

    this.magicBar.reset();
  }

});

})();

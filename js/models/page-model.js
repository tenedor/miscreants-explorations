(function() {

var util = mcc.util;


var PageModel = mcc.PageModel = mcc.Model.extend({

  initialize: function() {
    this.__super__.initialize();
  },

  defaults: _.extend({}, mcc.Model.prototype.defaults, {
    title: "Home Page",
    subtext: "welcome to the home page"
  })

});

}).call(this);

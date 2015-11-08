(function() {

var util = mcc.util;

var Model = mcc.Model;
var getSetterFlag = Model.getSetterFlag;


var PageModel = mcc.PageModel = mcc.Model.extend({

  initialize: function() {
    this.__super__.initialize();
  },

  defaults: _.extend({}, mcc.Model.prototype.defaults, {
    title: "Home Page",
    subtext: "welcome to the home page"
  })

});

PageModel.expandGetSetters();

})();

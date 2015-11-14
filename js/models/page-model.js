(function() {

var util = mcc.util;
var Model = mcc.Model;

var getSetterFlag = Model.getSetterFlag;


var PageModel = mcc.PageModel = Model.extend({

  defaults: _.extend({}, Model.prototype.defaults, {
  }),

  user: getSetterFlag,
  posts: getSetterFlag

});

PageModel.expandGetSetters();

})();

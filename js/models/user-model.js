(function() {

var util = mcc.util;
var Model = mcc.Model;

var getSetterFlag = Model.getSetterFlag;


var UserModel = mcc.UserModel = Model.extend({

  defaults: _.extend({}, Model.prototype.defaults, {
    name: ""
  }),

  name: getSetterFlag

});

UserModel.expandGetSetters();

})();

(function() {

var util = mcc.util;

var Model = mcc.Model;
var getSetterFlag = Model.getSetterFlag;


var ContentModel = mcc.ContentModel = mcc.Model.extend({

  defaults: _.extend({}, mcc.Model.prototype.defaults, {
    author: "",
    timestamp: 0,
    text: ""
  }),

  author: getSetterFlag,
  timestamp: getSetterFlag,
  text: getSetterFlag,
  imgPath: getSetterFlag

});

ContentModel.expandGetSetters();

})();

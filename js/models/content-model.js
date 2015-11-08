(function() {

var util = mcc.util;

var getSetterFlag = mcc.Model.getSetterFlag;


var ContentModel = mcc.ContentModel = mcc.Model.extend({

  defaults: _.extend({}, mcc.Model.prototype.defaults, {
    author: "",
    timestamp: 0,
    text: "",
    imgPath: undefined
  }),

  author: getSetterFlag,
  timestamp: getSetterFlag,
  text: getSetterFlag,
  imgPath: getSetterFlag

});

})();

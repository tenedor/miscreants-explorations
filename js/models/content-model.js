(function() {

var util = mcc.util;
var Model = mcc.Model;

var getSetterFlag = Model.getSetterFlag;


var ContentModel = mcc.ContentModel = Model.extend({

  defaults: _.extend({}, Model.prototype.defaults, {
    author: 'Anonymous',
    timestamp: 0,
    text: ''
  }),

  author: getSetterFlag,
  timestamp: getSetterFlag,
  text: getSetterFlag,
  imgPath: getSetterFlag,

  hasImage: function() {
    return !!this.imgPath();
  },

  fullImagePath: function() {
    return util.pathForImg(this.imgPath());
  }

});

ContentModel.expandGetSetters();

})();

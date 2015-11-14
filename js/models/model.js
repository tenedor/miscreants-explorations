(function() {

var util = mcc.util;


var Model = mcc.Model = function(data, options) {
  data || (data = {});
  options || (options = {});

  this._data = {};
  data = _.defaults({}, data, _.result(this, 'defaults'));
  this.setData(data);
  this.initialize.apply(this, arguments);
};

_.extend(Model.prototype, Backbone.Events, {

  defaults: {},

  initialize: function(data, options) {},

  setData: function(data) {
    var that = this;
    _.each(data, function(value, key) {
      util.assert(that[key] && that[key].isGetSetter,
          key + " is not an attribute you can set!");
      that[key](value);
    });
  }

});

Model.extend = Backbone.Model.extend;

Model.getSetterFlag = {};

Model.getSetterForAttr = function(attr) {
  var getSetter = function(val) {
    if (val !== undefined) {
      this._data[attr] = val;
    };
    return this._data[attr];
  };
  getSetter.isGetSetter = true;
  return getSetter;
};

Model.expandGetSetters = function() {
  var that = this;
  _.each(this.prototype, function(value, key) {
    if (value === Model.getSetterFlag) {
      that.prototype[key] = Model.getSetterForAttr(key);
    };
  });
};

Model.expandGetSetters();

})();

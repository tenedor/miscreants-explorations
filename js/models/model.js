(function() {

var util = mcc.util;


var Model = mcc.Model = function(data, options) {
  data || (data = {});
  options || (options = {});
  //if (options.collection) this.collection = options.collection;

  data = _.defaults({}, data, _.result(this, 'defaults'));
  _.extend(this, data); // TODO - make this safer
  this.initialize.apply(this, arguments);
};

_.extend(Model.prototype, Backbone.Events, {

  defaults: {},

  initialize: function() {}

});

Model.extend = Backbone.Model.extend;

})();

(function() {

var util = mcc.util;


var Model = mcc.Model = function(attributes, options) {
  attributes || (attributes = {});
  options || (options = {});
  //if (options.collection) this.collection = options.collection;

  attributes = _.defaults({}, attributes, _.result(this, 'defaults'));
  _.extend(this, attributes); // TODO - make this safer
  this.initialize.apply(this, arguments);
};

_.extend(Model.prototype, Backbone.Events, {

  defaults: {},

  initialize: function() {}

});

Model.extend = Backbone.Model.extend;

})();

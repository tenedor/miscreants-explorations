(function() {

var util = mcc.util;
var wiring = mcc.wiring = {};

var objManager = mcc.objManager = {};
var everything = objManager.everything = [];


var backboneExtend = Backbone.Model.extend;

// Adding this method to a function object makes inheritance easy. This is a
// tweaked version of Backbone's `extend` method for prototype chain extension.
var extendSelf = objManager.extendSelf = function() {
  var Parent = this;
  var Child = backboneExtend.apply(this, arguments);

  // Backbone's __super__ is wonky - Child has a reference to Parent's
  // prototype. We'll do our own.
  delete Child.__super__;

  // give Child (a constructor) a reference to Parent (a constructor)
  Child.__Super__ = Parent;

  // give instances of Child a reference to Parent's prototype, since instances
  // use Child's prototype properties and methods and fall through to Parent's
  Child.prototype.__super__ = Parent.prototype;

  Child.meta = {
    wiring: {},
    typing: {}
  };

  //wiring.wireParentChildInheritance(Parent, Child);

  return Child;
};


// overwrite the `extend` method on Backbone objects
Backbone.Model.extend =
Backbone.Collection.extend =
Backbone.Router.extend =
Backbone.View.extend =
Backbone.History.extend = extendSelf;

})();

(function() {

var util = mcc.util;
var objManager = mcc.objManager;

var magic = mcc.magic = {};

// map and filter both create a collection of objects from another collection of objects

// runs a function on every item in a collection and collects the results
// a function is not just a string to be used to index into an object because sometimes we want to complete or partially complete the arguments to a call
// having fun be function(a) { return a.text(); }; is unpleasant; we would avert this
// we'd have to somehow know what was an instance method and such though
var map = magic.map = function(collection, fun) {
  var newcoll = [];
  for (var i = 0; i < collection.length; i++) {
    newcoll += [fun(collection[i])];
  }
  return newcoll;
};
// TODO what are appropriate fun
// here, provide some baseline functions that can be composed to produce any fun you might want or need
// this will be done explicitly for now but in the future it should be done by inspecting all the wired-up objects for the functions they support (lifting their functions)

// selects every item in a collection that causes a given predicate to be true
var filter = magic.filter = function(collection, pred) {
  var newcoll = [];
  for (var i = 0; i < collection.length; i++) {
    if (pred(collection[i])) {
      newcoll += [collection[i]];
    }
  }
  return newcoll;
};
// TODO what are appropriate pred
// here, provide baseline predicates that can be condensed to produce any predicate you might want or need
// besides typical string/comparison methods, logical operators, there's also talking about the results of a computation; so one will probably want to be calling functions as parts of predicates as well

var fold = magic.fold = function() {

};

// TODO history management
// a consistent way of storing the results of computations and making them available to refer to later
var history = [];

var doMagic = magic.doMagic = function(command) {
  history += [eval(command)];
}

})();

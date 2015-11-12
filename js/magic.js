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
  var parsed;
  var inQuotes;
  var unique_string = "_______________________dilapidated_soliloquizing_elephant_____________________"; // appropriately selected variable name
  // today we are doing the parsing
  // "map(history[1], '_.something(a, b, c)')" => "map(history[1], function(x) { x.something(a, b, c) })"

  // extract and replace substrings surrounded by ' marks
  // I don't know regex so we're explicitly writing a finite state transducer
  inQuotes = false;
  for (var i = 0; i < command.length; i++) {
    if (command.charAt(i) === "'") {
      if (!inQuotes) {
        // create function with appropriately selected variable name
        parsed += "function(" + unique_string + ") {";
        inQuotes = true;
      } else {
        // end function with appropriately selected variable name
        parsed += "}";
        inQuotes = false;
      }
    } else {
      // replace wildcard with appropriately selected variable name
      // if you're trying to use this with bitwise XOR in JS, you deserve to be hit by a dilapidated soliloquizing elephant
      // so we will interpret such as requests for this
      if (inQuotes && command.charAt(i) === "^") {
        parsed += unique_string;
      } else {
        parsed += command.charAt(i);
      }
    }
  }

  history += [eval(parsed)];
}

})();

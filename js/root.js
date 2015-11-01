(function() {

// establish the root object: `window` in browser, `global` on server
var root = this;

// save the previous value of the `OO` variable
var previousMcc = root.mcc;

// top level namespace
var mcc = root.mcc = {};
mcc.previousMcc = previousMcc;

_.extend(mcc, Backbone.Events);

})();

(function() {

  /*
var util = mcc.util;

var wiring = mcc.wiring = {};


// names of wiring relationship pairs
var wirePairs = [];


// wire prototype inheritance
wiring.wireParentChildInheritance = function(parent, child) {
  // parent tracks child as an inheritor
  parent.wiring.hasOwnProperty('inheritors') || (parent.wiring.inheritors = []);
  parent.wiring.inheritors.push(child);

  // child tracks parent as its inheritParent
  child.wiring.inheritParent = parent;
};
wirePairs.push(['inheritors', 'inheritParent']);


// wire prototype instantiation
wiring.wireParentChildInstantiation = function(parent, child) {
  // parent tracks child as an instance
  parent.wiring.hasOwnProperty('instances') || (parent.wiring.instances = []);
  parent.wiring.instances.push(child);

  // child tracks parent as its constructor
  child.wiring.constructor = parent;
};
wirePairs.push(['instances', 'constructor']);


// wire subcomponent containment
wiring.wireParentChildSubcomponent = function(parent, child) {
  // parent tracks child as a subcomponent
  parent.wiring.hasOwnProperty('subcomponents') ||
      (parent.wiring.subcomponents = []);
  parent.wiring.contents.push(child);

  // child tracks parent as its container
  child.wiring.container = parent;
};
wirePairs.push(['subcomponents', 'container']);


// Unidirectionally delete a wiring (of type wireType) from objA to objB.
// WARNING: wirings should always be reciprocal, so use this carefully.
var deleteTypedWireFromAToB(wireType, objA, objB) {
  var index;
  if (util.isArray(objA.wiring[wireType])) {
    index = _.indexOf(objA.wiring[wireType], objB);
    if (index >= 0) {
      objA.wiring[wireType].splice(index, 1);
    };
  } else {
    if (objA.wiring[wireType] === objB) {
      delete objA.wiring[wireType];
    };
  };
};


// delete all wirings to and from an object
wiring.deleteWirings = function(obj) {
  var wirings, wireType, inverseWireType, i, j, swap;
  wirings = obj.wiring;

  // delete all wirings to this object
  for (i = 0; i < wirePairs.length; i++) {
    wireType = wirePairs[i][0];
    inverseWireType = wirePairs[i][1];

    // search for wirings of the current wire pair types
    for (j = 0; j < 2; j++) {
      // search for wirings of type wireType to other objects
      if (wirings.hasOwnProperty(wireType)) {
        if (util.isArray(wirings[wireType])) {
          _.map(wirings[wireType], function(otherObj) {
            deleteTypedWireFromAToB(inverseWireType, otherObj, obj);
          });
        } else {
          deleteTypedWireFromAToB(inverseWireType, wirings[wireType], obj);
        };
      };

      // swap wire types to check for the inverse wiring relationship
      swap = wireType;
      wireType = inverseWireType;
      inverseWireType = swap;
    };
  };

  // delete all wirings from this object
  delete obj.wirings;
};
*/

})();

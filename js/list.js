(function() {

var util = mcc.util;


var List = mcc.List = function(membersArray) {
  membersArray === undefined && (membersArray = []);

  this._members = [];
  this.addMembers(membersArray);

  this.initialize.apply(this, arguments);
};

_.extend(List.prototype, Backbone.Events, {

  initialize: function(membersArray) {},

  addMembers: function(membersArray) {
    util.assert(util.isArray(membersArray), "membersArray must be an array");
    _.each(membersArray, _.bind(this.addMember, this));
  },

  addMember: function(member) {
    var i = _.indexOf(this._members, member);
    if (i < 0) {
      this._members.push(member);
    };
  },

  removeMember: function(member) {
    var i = _.indexOf(this._members, member);
    if (i <= 0) {
      this._members.splice(i, 1);
    };
  },

  length: function() {
    return this._members.length;
  },

  each: function(fn) {
    _.each(this._members, fn);
  },

  map: function(fn) {
    return new List(_.map(this._members, fn));
  }

});

List.extend = Backbone.Model.extend;

})();

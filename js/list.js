(function() {

var util = mcc.util;


var List = mcc.List = function(membersArray) {
  membersArray === undefined && (membersArray = []);

  this._members = [];
  this.addMembers(membersArray);

  this.initialize.apply(this, arguments);
};

_.extend(List.prototype, Backbone.Events, {

  initialize: function() {},

  addMembers: function(membersArray) {
    util.assert(util.isArray(membersArray), "membersArray must be an array");
    var that = this;
    _.each(membersArray, that.addMember);
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

  each: function(fn) {
    _.each(this._members, fn);
  }

});

List.extend = Backbone.Model.extend;

})();

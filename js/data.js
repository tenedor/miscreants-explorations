(function() {

var util = mcc.util;
var List = mcc.List;
var UserModel = mcc.UserModel;
var PostModel = mcc.PostModel;

var data = mcc.data = {};


var raw = data.raw = {
  username: "Zakariah",

  posts: [
    {
      content: {
        author: 'Hobbes',
        timestamp: 666,
        text: '@Zakariah LOL',
        imgPath: 'mule.jpg'
      }
    }, {
      content: {
        author: 'Zakariah',
        timestamp: 667,
        text: '@Hobbes - I have received your transmission in the front left ' +
          'hoof of Deliverance, and I am not amused.'
      }
    }, {
      content: {
        author: 'Luke',
        timestamp: 671,
        text: 'And while @Zakariah ministered at the altar of incense, an ' +
          'angel of the Lord appeared and announced, "You\'re still young ' +
          'enough!" But @Zakariah doubted, for he knew @God was not in his ' +
          'gang. Thus did the Lord mute @Zakariah on all irc channels in ' +
          'vengeance.',
        imgPath: 'god.jpg'
      }
    }, {
      content: {
        author: 'Leo',
        timestamp: 695,
        text: '#TBT when having kids was easy',
        imgPath: 'madonna-sketch.jpg'
      }
    }
  ]
};

var models = data.models = {};


var initializePost = function(rawPost) {
  return new PostModel(rawPost.content);
};

var initialize = data.initialize = function() {
  models.user = new UserModel({name: data.raw.username});
  models.posts = new List(_.map(raw.posts, initializePost));
};

})();

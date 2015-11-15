(function() {

var util = mcc.util;
var List = mcc.List;
var UserModel = mcc.UserModel;
var CommentModel = mcc.CommentModel;
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
      },
      comments: [
        {
          author: 'Louis XIV',
          timestamp: 673,
          text: 'What a beautiful animal, j\'adore ses ovales :-). Do bring ' +
            'her by the UN some time for a discussion group, it\'s been weeks' +
            ' since our last danse a la soiree!' 
        },
        {
          author: 'Hobbes',
          timestamp: 679,
          text: '@Louis you devil charmant - I had *such* a large croissant ' +
            'at your last gala d\'un million de ensoleillements that I was ' +
            'indisposed in bed for a week sleeping it off! At this rate I\'ll' +
            ' never finish my treatise on Helvetica Neue...'
        }
      ]
    }, {
      content: {
        author: 'Zakariah',
        timestamp: 671,
        text: '@Hobbes - I have received your transmission in the front left ' +
          'hoof of Deliverance, and I am not amused.'
      },
      comments: [
      ]
    }, {
      content: {
        author: 'Elaine',
        timestamp: 689,
        text: '@James, @Zeus_Hammer, Mom, and I just got back from forging ' +
          'blood dams in Texas and @James\'s first-born is still missing so ' +
          'we\'re planning a relaxing weekend of bear rucksacking. Ping me if' +
          ' you want to join. Also @Zakariah, we\'d love to borrow ' +
          'Deliverance if she\'s free.'
      },
      comments: [
      ]
    }, {
      content: {
        author: 'Luke',
        timestamp: 692,
        text: 'And while @Zakariah ministered at the altar of incense, an ' +
          'angel of the Lord appeared and announced, "You\'re still young ' +
          'enough!" But @Zakariah doubted, for he knew @God was not in his ' +
          'gang. Thus did the Lord mute @Zakariah on all irc channels in ' +
          'vengeance.',
        imgPath: 'god.jpg'
      },
      comments: [
        {
          author: 'Mrs. Roberts',
          timestamp: 697,
          text: 'oh, is that why @Elaine and I never got your RSVP for the ' +
            'bear hunt @Zak?',
        }
      ]
    }, {
      content: {
        author: 'Leo',
        timestamp: 695,
        text: '#TBT when having kids was easy',
        imgPath: 'madonna-sketch.jpg'
      },
      comments: [
        {
          author: 'Lorenzo',
          timestamp: 697,
          text: 'tell me about it',
          imgPath: 'isaac-sacrifice.jpg'
        },
        {
          author: 'Zeus Hammer',
          timestamp: 698,
          text: 'or really just any time Dad\'s around',
          imgPath: 'athena-birth.jpg'
        },
        {
          author: 'Zeus Hammer',
          timestamp: 698,
          text: '',
          imgPath: 'danae.jpg'
        },
        {
          author: 'Zeus Hammer',
          timestamp: 698,
          text: '',
          imgPath: 'dionysus-birth.jpg'
        },
        {
          author: 'Zeus Hammer',
          timestamp: 699,
          text: 'speaking of which, if any of you figure out Dad\'s golden ' +
            'rain trick, @James keeps harassing me about this sealed bronze ' +
            'casket his HCI designer accidentally trapped himself in'
        }
      ]
    }
  ]
};

var models = data.models = {};


var initializeComment = function(rawComment) {
  return new CommentModel(rawComment);
};

var initializePost = function(rawPost) {
  var data = _.clone(rawPost.content);
  data.comments = new List(_.map(rawPost.comments || [], initializeComment));
  return new PostModel(data);
};

var initialize = data.initialize = function() {
  models.user = new UserModel({name: data.raw.username});
  models.posts = new List(_.map(raw.posts, initializePost));
};

})();

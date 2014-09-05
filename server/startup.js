var randUserId = function() {
  var users = Meteor.users.find().fetch();
  var randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex]._id;
};

Meteor.publish('postsAll', function() {
  Meteor.publishWithRelations({
    handle: this,

    collection: Posts,
    filter: {},

    mappings: [{
      collection: Meteor.users,
      key: 'userId'
    }]
  });
});

Meteor.startup(function () {
  if (Posts.find().count() === 0) {
    var users = [
      {
        email: 'BobFranks@example.com',
        password: 'password',
        profile: {
          firstName: 'Bob',
          lastName: 'Franks',
        }
      },
      {
        email: 'SarahBurger@example.com',
        password: 'password',
        profile: {
          firstName: 'Sarah',
          lastName: 'Burger',
        }
      },
      {
        email: 'EdSandwich@example.com',
        password: 'password',
        profile: {
          firstName: 'Ed',
          lastName: 'Sandwich',
        }
      }
    ];

    for (var i = 0; i < users.length; i++) {
      Accounts.createUser(users[i]);
    }

    var uid = Meteor.users.findOne();

    var posts = [
      {
        title: 'Lorem ipsum dolor sit amet',
        userId: randUserId()
      },
      {
        title: 'Praesent at sollicitudin nisi',
        userId: randUserId()
      },
      {
        title: 'Fusce vel porttitor dui',
        userId: randUserId()
      },
      {
        title: 'Curabitur et vulputate dolor',
        userId: randUserId()
      },
      {
        title: 'Donec elementum tellus a magna bibendum',
        userId: randUserId()
      },
      {
        title: 'Aenean et tortor pulvinar',
        userId: randUserId()
      }
    ];

    for (i = 0; i < posts.length; i++) {
      Posts.insert(posts[i]);
    }
  }
});

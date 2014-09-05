Template.posts.posts = function () {
  return Posts.find({});
};

Template.posts.email = function() {
  var user = Meteor.users.findOne(this.userId);
  if (! user)
    return 'No email';

  return user.emails[0].address;
}

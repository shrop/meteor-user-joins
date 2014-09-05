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

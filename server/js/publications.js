

Meteor.publish('users', function(username) {
  return Meteor.users.find({}, {
    fields: { 'username': 1 },
    limit: 100
  });
});

Meteor.publish('followings', function(username) {
  return Relationships.find({ follower: username });
});

Meteor.publish('followers', function(username) {
  return Relationships.find({ following: username });
});

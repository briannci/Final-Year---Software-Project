

Meteor.publish('users', function(username) {
  return Meteor.users.find({}, {
    fields: {
      "profile.fullname": 1,
      "profile.petname": 1,
      "_id": 1,
      "username": 1,
      "profile.username": 1
    }
  });
});

Meteor.publish('followings', function(username) {
  return Relationships.find({ follower: username });
});

Meteor.publish('followers', function(username) {
  return Relationships.find({ following: username });
});

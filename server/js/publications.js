Meteor.publish('users', function(username) {
  return Meteor.users.find({}, {
    fields: {
      "profile.fullname": 1,
      "profile.petname": 1,
      "_id": 1,
      "username": 1,
      "profile.username": 1,
      "services.facebook.email": 1,
      "services.twitter.profile.name": 1,
      "services.twitter.screenName": 1,
      "services.twitter.profile_image_url": 1
    }
  });
});



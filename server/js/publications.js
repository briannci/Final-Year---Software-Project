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

Meteor.publish("chatrooms",function(){
    return ChatRooms.find({});
});
Meteor.publish("onlusers",function(){
    return Meteor.users.find({"status.online":true},{username:1});
})

Meteor.publish('messages', function(limit) {
    //publish messages just for logged in user
    if (this.userId) {
      return Messages.find({}, {
        limit: limit || 5,
        sort: { timestamp: -1 }
      });
    }
    this.ready();
  });

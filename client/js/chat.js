Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Tracker.autorun(function() {
    Meteor.subscribe("chatrooms");
    Meteor.subscribe("onlusers");
});

Template.messages.helpers({
    'onlusr': function() {
        return Meteor.users.find({ "status.online": true, _id: { $ne: Meteor.userId() } });
        return Meteor.users.find({ "status.online": true, _id: { $ne: Meteor.userId() } });
    }
});

Template.messages.events({
    'click .user': function() {
        Session.set('currentId', this._id);
        Bert.alert('<h4><b>Send a message to the pet owner</b></h4>', 'info', 'fixed-bottom');
        var res = ChatRooms.findOne({ chatIds: { $all: [this._id, Meteor.userId()] } });
        if (res) {
            //already room exists
            Session.set("roomid", res._id);
        } else {
            //no room exists
            var newRoom = ChatRooms.insert({ chatIds: [this._id, Meteor.userId()], messages: [] });
            Session.set('roomid', newRoom);
        }
    }
});


Template.messages.helpers({
    'msgs': function() {
        var result = ChatRooms.findOne({ _id: Session.get('roomid') });
        if (result) {
            return result.messages;
        }
    }
});

Template.messages.helpers({
    messages: function() {
        return Messages.find({}, {
            sort: { timestamp: -1 }
        });
    }
});

Template.input.events = {
    'keydown input#message': function(event) {
        if (event.which == 13) {
            if (Meteor.user()) {
                var name = Meteor.user().username;
                var message = document.getElementById('message');

                if (message.value !== '') {
                    var de = ChatRooms.update({ "_id": Session.get("roomid") }, {
                        $push: {
                            messages: {
                                name: name,
                                text: message.value,
                                timestamp: Date.now()
                            }
                        }
                    });
                    document.getElementById('message').value = '';
                    message.value = '';
                }
            } else {
                alert("Please login as a guest to contact the owner");
            }

        }
    }
}

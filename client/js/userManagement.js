
Meteor.subscribe("userData");

Template.userManagement.events({

  'click #login': function() {
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    Bert.alert('Logged in :D! ', 'success');

    Meteor.loginWithPassword(username, password, function(error) {
      if(error){
      Bert.alert( error.message, 'danger' );
      }
    });
  },

  'click #logout': function() {
     Bert.alert('You are logged out successfully! ', 'success');
    Meteor.logout();
  }
});

Template.register.events({
  'click #signup': function() {
    var user = {
      email: $('#signup-email').val(),
      username: $('#signup-username').val(),
      password: $('#signup-password').val(),
      profile: {
        fullname: $('#signup-fullname').val(),
          petname: $('#signup-petname').val(),
          petage: $('#signup-petage').val()
      }
    };

    Accounts.createUser(user, function (error) {
      if(error){
      Bert.alert( error.message, 'danger' );
      }
    });
  },

  'click #login': function() {
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    Meteor.loginWithPassword(username, password, function(error) {
      if(error){
      Bert.alert( error.message, 'danger' );
      }
    });
  },

  'click #logout': function() {
    Bert.alert('You are logged out successfully! ', 'success');
    Meteor.logout();
    
  }
});

    Template.userManagement.events({
      'click #signIn' : function() {
        Meteor.loginWithTwitter();
        if(error){
        Bert.alert( error.message, 'danger' );
        } 
      }
    });
 
    Template.userManagement.events({
      'click #signOut' : function() {
        Bert.alert('You are logged out successfully! ', 'success');
        Meteor.logout();
        
      }
    });


    Template.userManagement.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
 
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});


Template.passwordRecovery.helpers({
    resetPassword : function(t) {
      return Session.get('resetPassword');
    }
  });






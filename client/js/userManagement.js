

Template.userManagement.events({
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
      if(error) alert(error);
    });
  },

  'click #login': function() {
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    Meteor.loginWithPassword(username, password, function(error) {
      if(error) alert(error);
        sAlert.error('Your message', configOverwrite);
    });
  },

  'click #logout': function() {
    Meteor.logout();
  }
});





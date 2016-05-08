Meteor.subscribe("userData");

Template.userManagement.events({

    'click #login': function() {
        var username = $('#login-username').val();
        var password = $('#login-password').val();

        Bert.alert('<h4><b>Logged in successfully!</b></h4> ', 'success', 'fixed-bottom');

        Meteor.loginWithPassword(username, password, function(error) {
            if (error) {
                Bert.alert(error.message, 'danger', 'fixed-bottom');
            }
        });
    },

    'click #logout': function() {
        Bert.alert('<h4><b>You are logged out successfully!</b></h4> ', 'success', 'fixed-bottom');
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

        Accounts.createUser(user, function(error) {
            if (error) {
                Bert.alert(error.message, 'danger', 'fixed-bottom');
            }
        });
    },

    'click #login': function() {
        var username = $('#login-username').val();
        var password = $('#login-password').val();

        Meteor.loginWithPassword(username, password, function(error) {
            if (error) {
                Bert.alert(error.message, 'danger', 'fixed-bottom');
            }
        });
    },

    'click #logout': function() {
        Bert.alert('<h4><b> You are logged out successfully!</b></h4> ', 'success', 'fixed-bottom');
        Meteor.logout();

    }
});

Template.userManagement.events({
    'click #signIn': function() {
        Meteor.loginWithTwitter();
        if (error) {
            Bert.alert('<h4><b>', error.message, 'danger', 'fixed-bottom', '</b></h4>');
        }
    }
});

Template.userManagement.events({
    'click #signOut': function() {
        Bert.alert('<h4><b> You are logged out successfully!</b></h4>', 'success', 'fixed-bottom');
        Meteor.logout();

    }
});


Template.userManagement.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err) {
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },

    'click #logout': function(event) {
        Meteor.logout(function(err) {
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});



Template.loading.rendered = function () {
  if ( ! Session.get('loadingSplash') ) {
    this.loading = window.pleaseWait({
      logo: '/icons/icon96.png',
      backgroundColor: '#33CD5F',
      loadingHtml: message + spinner
    });
    Session.set('loadingSplash', true); // just show loading splash once
  }
};

Template.loading.destroyed = function () {
  if ( this.loading ) {
    this.loading.finish();
  }
};
var message = '<h1 class="loading-message">PetPal</h1>';
var spinner = '<div class="sk-spinner sk-spinner-rotating-plane"></div>';


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


Meteor.startup(function () {
	if(Meteor.users.find().count()<1){
		var id = Accounts.createUser({
		username:'guest',
		password:'guest',
		profile:{name:'Guest'}
		});

		Roles.addUserToRoles(id, 'Guest');
	}
});
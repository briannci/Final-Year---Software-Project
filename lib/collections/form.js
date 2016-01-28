Items = new Meteor.Collection('items');

if (Meteor.isClient) {
    Template.add_item.events({
        'click .submit': function() {
            Items.insert({
                username: Meteor.user().username,
                item: $('.the_item').val()
            });
            $('.the_item').val('');
        }
    });

    Template.list_items.all_items = function(){
        return Items.find();
    }

}

Meteor.subscribe('artists')

Template.artists.helpers({
  artists: function(){
      return Meteor.users.find();
  }
});



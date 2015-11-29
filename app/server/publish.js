Meteor.publish('artists', function() {
  return Meteor.users.find();
});

Meteor.publish('works', function(){
    return Works.find();
});

Meteor.publish('images', function(){
    return Images.find();
});

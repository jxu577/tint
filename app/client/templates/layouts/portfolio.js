

Template.portfolio.helpers({
  portfolio: function () {
    var pieces = [];
    var works = Works.find({createdBy: Meteor.userId()}).fetch();
    for (var i in works) {
      pieces.push({work: works[i], name: works[i].name, price: works[i].price, url: Images.findOne({_id: works[i].fileId}).url({brokenIsFine: true})})
    };
    return pieces
  }
});


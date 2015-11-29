Template.orders.helpers({
  orders: function () {
    var pieces = [];
    var works = Works.find({purchasedBy: Meteor.userId()}).fetch();
    for (var i in works) {
      pieces.push({name: works[i].name, price: works[i].price, url: Images.findOne({_id: works[i].fileId}).url({brokenIsFine: true})})
    };
    return pieces
  }
});


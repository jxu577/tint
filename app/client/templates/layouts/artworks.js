Template.artworks.helpers({
  artworks: function () {
    var pieces = [];
    var works = Works.find().fetch();
    for (var i in works) {
      pieces.push({work: works[i], name: works[i].name, price: works[i].price, url: Images.findOne({_id: works[i].fileId}).url({brokenIsFine: true})})
    };
    return pieces
  }
});

Template.artworks.events({
  'click button': function (e) {
    e.preventDefault();
    var price = this.price
    StripeCheckout.open({
        key: 'pk_test_X6e1v5DCCmHcYpnFCLua0uN0',
        amount: price, // this is equivalent to $50
        name: 'Thanks for purchasing',
        description: '',
        panelLabel: 'Pay Now',
        token: function(res) {
          stripeToken = res.id;
          console.info(res);
          Meteor.call('chargeCard', stripeToken, price);
        }
      });
    Works.update({ _id: this.work._id}, {$set: { purchasedBy: Meteor.userId()}});
  }
});




/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'insertArtwork': function(title, file){
        var currentUserId = Meteor.userId();
        WorksList.insert({
            title: title,
            image: file,
            createdBy: currentUserId
        });
    },
  'chargeCard': function(stripeToken, price) {
    var Stripe = StripeAPI('sk_test_IXDiU5Hk3M0G0VyQktohMhrw');

    Stripe.charges.create({
      amount: price,
      currency: 'usd',
      source: stripeToken
    }, function(err, charge) {
      console.log(err, charge);
    });
  }
});

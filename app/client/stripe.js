Meteor.startup(function () {
   var stripeKey = Meteor.settings.public.stripe.testPublishableKey;
   Stripe.setPublishableKey(stripeKey);
   var handler = StripeCheckout.configure({
        key: 'pk_test_X6e1v5DCCmHcYpnFCLua0uN0',
        token: function(token) {
          Meteor.call('chargeCard', token);
        }
    });
});

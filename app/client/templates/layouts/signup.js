Template.signup.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var name = $('[name=name]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
    email: email,
    profile: {name: name},
    password: password
}, function(error){
    if(error){
        console.log(error.reason); // Output error if registration fails
    } else {
        Router.go("home"); // Redirect user if registration succeeds
    }
});}
});

import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Accounts.onLogin(function() { 
    FlowRouter.go('recipe-book');
});

Accounts.onLogout(function() {
    FlowRouter.go('home');
});
// Import to load these templates
import '../../ui/layouts/homeLayout.html';
import '../../ui/layouts/mainLayout.html';
import '../../ui/recipes/Recipes.html';
import '../../ui/recipes/Recipes.js';
import '../../ui/recipes/SingleRecipe.html';
import '../../ui/recipes/SingleRecipe.js';
import '../../ui/layouts/header.html';
import '../../ui/layouts/navLayout.html';

FlowRouter.triggers.enter([function(context, redirect) {
    if(!Meteor.userId()) {        
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action: function() {
        console.log("/route");
        if(Meteor.userId()) {
            FlowRouter.go('recipe-book');
        }
        GAnalytics.pageview();
        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action: function() {
        console.log('/recipe-book');
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {main: "Recipes"});
    }
});

FlowRouter.route('/recipe/:_id', {
    name: 'recipe',
    action: function() {
        console.log('/recipe/');
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {main: 'SingleRecipe'});
    }
}

);
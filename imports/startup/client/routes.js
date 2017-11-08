// Import to load these templates
import '../../ui/layouts/homeLayout.html';
import '../../ui/layouts/mainLayout.html';
import '../../ui/recipes/Recipes.html';
import '../../ui/recipes/Recipes.js';
import '../../ui/recipes/SingleRecipe.html';
import '../../ui/recipes/SingleRecipe.js';
import '../../ui/Menu.html';
import '../../ui/Shopping-List.html';


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
});

FlowRouter.route('/menu', {
    name: 'menu',
    action: function() {
        console.log('/menu');
        BlazeLayout.render('mainLayout', {main: 'Menu'});
    }
});

FlowRouter.route('/shopping-list', {
    name: 'shopping-list',
    action: function() {
        console.log('/shopping-list');
        BlazeLayout.render('mainLayout', {main: 'ShoppingList'});
    }
});
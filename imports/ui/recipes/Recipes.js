import './Recipe.html';
import './Recipe.js';
import './NewRecipe.html';
//console.log("Public scope: " + Meteor.settings.public.ga.account);

Template.Recipes.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.Recipes.helpers({
    recipes: ()=> {
        return Recipes.find({});
    }
});

Template.Recipes.events({ 
    'click .new-recipe-btn': function(event, template) { 
         Session.set('newRecipe', true);
    } 
});
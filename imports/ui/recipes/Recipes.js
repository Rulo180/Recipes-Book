import './Recipe.html';
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
        console.log('Entro al Recipes.helpers');
        return Recipes.find({});
    }
});
//Meteor.subscribe('recipes');

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
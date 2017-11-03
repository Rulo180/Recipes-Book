import '../Recipes.js'; //Importo la coleccion Recipes para poder publicarla

Meteor.publish('recipes', function(argument) {
    console.log('Recipes published.');
    return Recipes.find({author: this.userId});
}); 

Meteor.publish('singleRecipe', function(id) {
    check(id, String);
    console.log('Single Recipe published.');
    return Recipes.find({_id: id});
}); 
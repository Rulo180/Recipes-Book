import '../Recipes.js'; //Importo la coleccion Recipes para poder publicarla

Meteor.publish('recipes', function() {
    console.log('Recipes published.');
    return Recipes.find({author: this.userId});
}); 

Meteor.publish('singleRecipe', function(id) {
    console.log('Single Recipe published...');
    check(id, String);
    return Recipes.find({_id: id});
}); 

Meteor.publish('single', function() {
    console.log('prueba.....');
    return Recipes.find({});
});
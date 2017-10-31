Meteor.publish('recipes', function(argument) {
    return Recipes.find({author: this.userId});
}); 

Meteor.publish('singleRecipe', function(id) {
    check(id, String);
    return Recipes.find({_id: id});
}); 
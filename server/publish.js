Meteor.publish('recipes', function(argument) {
    return Recipes.find({author: this.userId});
}); 


Template.SingleRecipe.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('_id');
        console.log('ID: ' +id);
        self.subscribe('singleRecipe', id);
    });
});

Template.SingleRecipe.helpers({
    recipe: ()=> {
        console.log('Entro a SingleRecipe.helpers');
        var id = FlowRouter.getParam('_id');       
        return Recipes.find({_id: id});
    }
});
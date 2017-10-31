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
        var id = FlowRouter.getParam('_id');        
        return Recipes.findOne({_id: id});
    }
});
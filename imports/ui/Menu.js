
Template.Menu.onCreated(function() {
    var self = this;
    console.log("se suscribio");
    self.autorun(function() { 
         self.subscribe('recipes');
    });
});

Template.Menu.helpers({ 
    recipes: ()=> {
        console.log("Le esta devolviendo las recetas");
        return Recipes.find({inMenu: true});
    }
}); 

Template.Recipe.onCreated(function() {
    this.editMode = new ReactiveVar(false);
});

Template.Recipe.helpers({
    updateRecipeId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();  //Recuperamos la variable utilizando la instancia del template
    }
});

Template.Recipe.events({ 
    'click .toggle-menu': function() { 
         //$('.toggle-menu').addClass('btn-deny').removeClass('btn-primary');
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash': function() {
        Meteor.call('deleteRecipe', this._id);
    },
    'click .fa-pencil': function (event, template) {    //recibimos una referencia del template
        template.editMode.set(!template.editMode.get());    //editamos la variable de ese template solamente
        //Template.instance().editMode.set(!Template.instance().editMode.get());  //En caso de que no queramos utilizar parametros en la funcion
    }
}); 
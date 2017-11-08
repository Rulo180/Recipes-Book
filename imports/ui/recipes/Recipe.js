console.log('Hola a todos!');


Template.Recipe.events({ 
    'click .toggle-menu': function() { 
         console.log("click");
         //$('.toggle-menu').addClass('btn-deny').removeClass('btn-primary');
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    } 
}); 

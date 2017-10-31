FlowRouter.route('/', {
    name: 'home',
    action: function() {
        GAnalytics.pageview();
        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action: function() {
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {main: "Recipes"});
    }
});

FlowRouter.route('/recipe/:_id', {
    name: 'recipe',
    action: function() {
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {main: 'SingleRecipe'});
    }
}

);
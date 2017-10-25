import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log("Private scope: " + Meteor.settings.private.hello);
  
});

import { Meteor } from 'meteor/meteor';
import '../imports/api/recipes/server/publications.js'; //Importo las publicaciones para que se publiquen las colecciones por parte del servidor

Meteor.startup(() => {
  // code to run on server at startup
  //console.log("Private scope: " + Meteor.settings.private.hello);
});

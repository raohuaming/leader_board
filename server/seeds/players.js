Meteor.startup(function(){
  if (Players.find().count() === 0) {
    (function populatePlayers(){
      var i;
      for ( i = 0; i < 10; i++ ) {
        Players.insert({ 
          name: Math.random().toString(36).substring(7),
          score: Math.round(Math.random() * 100)
        });
      }

    })();
  }

});

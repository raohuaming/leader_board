Router.route('/components/leader-board', {
  name: 'playground.leader-board',
  template: 'leaderBoard',
  data: function(){

    var Players = new Meteor.Collection(null);
    (function populatePlayers(){
      var i;
      for ( i = 0; i < 10; i++ ) {
        Players.insert({ 
          name: Math.random().toString(36).substring(7),
          score: Math.round(Math.random() * 100)
        });
      }

    })();

    return {
      players: Players.find({}, { sort: { score: -1 } })
    };
  }
});

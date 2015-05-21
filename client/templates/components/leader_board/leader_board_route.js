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
      players: Players.find({}, { sort: { score: -1 } }),
      btn1Name: 'Add 6 Points',
      btn2Name: 'Minus 6 Points',
      onClickAddPointBtn: function(playerId){
        Players.update({ _id: playerId }, { $inc: { score: 6 } });
      },
      onClickMinusPointBtn: function(playerId) {
        Players.update({ _id: playerId }, { $inc: { score: -6 } });
      }
    };
  }
});

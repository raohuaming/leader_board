FluxStore.define('PlayerStore', {
  initStates: {
    winner: function(){
      return Players.findOne({}, { sort: { score: -1 } });
    },
    players: function(){
      return Players.find({}, { sort: { score: -1 } });
    }
  },
  register: {
    'ChangedPlayerPoints': function(event){
      Meteor.call('changePlayerPoints', event.playerId, event.score, function(err){
        if (err) { console.log(err); }
      });
    }
  }
});

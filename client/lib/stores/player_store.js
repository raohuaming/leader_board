/* global FluxStore, Meteor, Players */
FluxStore.define('PlayerStore', {
  deps: {
    Players: Meteor.Collection
  },
  exports: {
    players: function(){
      return Players.find({}, { sort: { score: -1 } });
    },
    winner: function(){
      return Players.findOne({}, { sort: { score: -1 } });
    }
  },
  registers: {
    'ChangedPlayerPoints': function(event){
      Meteor.call('changePlayerPoints', event.playerId, event.score, function(err){
        if (err) { console.log(err); }
      });
    },
    'AddNewPlayer': function(event){
      Meteor.call('addNewPlayer', event.name, event.callback);
    },
    'DeletePlayer': function(event) {
      Meteor.call('deletePlayer', event.id, event.callback);
    }
  }
});

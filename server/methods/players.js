Meteor.methods({
  changePlayerPoints: function(playerId, point){
    return Players.update({ _id: playerId }, { $inc: { score: point } });
  },
  addNewPlayer: function(name) {
    Players.insert({ name: name, score: 0 });
  },
  deletePlayer: function(id) {
    Players.remove(id);
  }
});

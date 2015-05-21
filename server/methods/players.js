Meteor.methods({
  changePlayerPoints: function(playerId, point){
    return Players.update({ _id: playerId }, { $inc: { score: point } });
  }
});

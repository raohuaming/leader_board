Meteor.publish('players', function(){
  return Players.find({}, { sort: { score: -1 } });
});

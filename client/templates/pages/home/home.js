Template.homePage.helpers({
  winner: function(){
    return Template.instance().data.winner;
  },
  players: function(){
    return Template.instance().data.players;
  },
  addPlayer5Points: function(){
    return Template.instance().data.addPlayer5Points;
  },
  minusPlayer5Points: function(){
    return Template.instance().data.minusPlayer5Points;
  }
});

Template.homePage.events({
});

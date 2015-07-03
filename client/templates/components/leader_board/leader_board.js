/* global Template, ReactiveDict, FluxDispatcher */
/**
 * @property: players - [{name: String, score: interger, id}]
 */

Template.leaderBoard.created = function(){
  this.states = new ReactiveDict();
  this.states.set('selectedId', null);
};

Template.leaderBoard.rendered = function(){

};

Template.leaderBoard.helpers({
  selectedPlayerClass: function(){
    return this._id === Template.instance().states.get('selectedId') ? 'positive' : '';
  },
  isDisabledBtn: function(){
    return Template.instance().states.get('selectedId') ? '' : 'disabled';
  }
});

Template.leaderBoard.events({
  'click .player-item': function(event, template){
    event.preventDefault();
    var playerId = this._id;
    template.states.set('selectedId', playerId);
  },
  'click .add-point.button': function(event, template){
    event.preventDefault();
    var playerId = template.states.get('selectedId');
    FluxDispatcher.emit('ChangedPlayerPoints', { playerId: playerId, score: 5 });
    //template.data.onClickAddPointBtn && template.data.onClickAddPointBtn(playerId);
  },
  'click .minus-point.button': function(event, template) {
    event.preventDefault();
    var playerId = template.states.get('selectedId');
    FluxDispatcher.emit('ChangedPlayerPoints', { playerId: playerId, score: -5 });
    //template.data.onClickMinusPointBtn && template.data.onClickMinusPointBtn(playerId);
  },
  'click .delete-player.button': function(event, template) {
    event.preventDefault();
    var playerId = template.states.get('selectedId');
    FluxDispatcher.emit('DeletePlayer', { 
      id: playerId,
      callback: function(err) {
        if ( !err ) {
          template.states.set('selectedId', null);
        }
      }
    });
  }
});

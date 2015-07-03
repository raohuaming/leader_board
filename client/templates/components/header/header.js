/**
 * @property: winner { name: String, score: interger }
 */

Template.header.created = function(){

};

Template.header.rendered = function(){

};

Template.header.helpers({

});

Template.header.events({
  'click .new-player.button': function(event, template){
    event.preventDefault();
    var newPlayerName = template.$('input.new-player').val().trim();
    if ( !_.isEmpty( newPlayerName ) ) {
      FluxDispatcher.emit('AddNewPlayer', { 
        name: newPlayerName,
        callback: function(err) {
          if ( !err ) {
            template.$('input.new-player').val('');
          }
        }
      });
    }
  }
});

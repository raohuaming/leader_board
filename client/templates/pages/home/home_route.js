Router.route('/', {
  name: 'home',
  template: 'homePage',
  waitOn: function(){
    return this.subscribe('players');
  },
  data: function(){
    var PlayerStore = FluxStore.fetch('PlayerStore');
    return {
      winner: PlayerStore.get('winner'),
      players: PlayerStore.get('players')
    };
  }
});

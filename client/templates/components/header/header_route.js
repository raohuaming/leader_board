Router.route('/components/header', {
  name: 'playground.header',
  template: 'header',
  data: function(){
    winner = { name: 'A', score: 10 };
    return {
      winner: winner
    };
  }
});

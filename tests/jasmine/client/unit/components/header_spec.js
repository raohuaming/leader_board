describe('Template.header', function(){
  var div, template, winner;

  beforeEach(function(){
    div = document.createElement('div');
    winner = {
      name: 'Altman',
      score: 10
    };
    template = Blaze.renderWithData(Template.header, { winner: winner }, div);
  });

  it('should show the name of the winner', function(){
    expect($(div).find('.winner.name')).toHaveText(winner.name);
  });

  it('should show the score of the winner', function(){
    expect($(div).find('.winner.score')).toHaveText(winner.score);
  });
});

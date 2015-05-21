describe('Templagte.leaderBoard', function(){
  var div, players, addPointHandle, minusPointHandle, playerItems, selectedPlayer, addBtn, minusBtn;

  beforeEach(function(done){
    div = document.createElement('div');
    players = [
      { _id: 1, name: 'A', score: 2 },
      { _id: 2, name: 'B', score: 10 },
      { _id: 3, name: 'C', score: 12 }
    ];
    Blaze.renderWithData(
      Template.leaderBoard,
      {
        players: players,
        onClickAddPointBtn: addPointHandle,
        onClickMinusPointBtn: minusPointHandle,
        btn1Name: 'btn 1 Name',
        btn2Name: 'btn 2 Name'
      },
      div
    );
    addBtn = $(div).find('.add-point.button')[0];
    minusBtn = $(div).find('.minus-point.button')[0];
    playerItems = $(div).find('table .player-item');
    Tracker.afterFlush(done);
  });

  describe('- While first loaded', function(){

    it('should disable the add point btn', function(){
      expect($(addBtn)).toHaveClass('disabled');
    });

    it('should disable the minus point btn', function(){
      expect($(minusBtn)).toHaveClass('disabled');
    });

    it('should render the players in a table', function(){
      expect($(playerItems)).toHaveLength(players.length);
    });

    it('should hightlight no player item', function(){
      expect($(playerItems).filter('.positive')).toHaveLength(0);
    });

    it('should show the btn1 name', function(){
      expect($(addBtn).text()).toMatch('btn 1 Name');
    });

    it('should show the btn2 name', function(){
      expect($(minusBtn).text()).toMatch('btn 2 Name');
    });

  });

  describe('- While selecting a player item', function(){
    var selectedIndex;

    beforeEach(function(){
      selectedIndex = 1;
      selectedPlayer = $(playerItems)[selectedIndex];
      $(selectedPlayer).click();
    });

    it('should hightlight the selected row while selecting a player item', function(done){
      Tracker.afterFlush(function(){
        expect($(playerItems).filter('.positive')).toHaveLength(1);
        expect($(selectedPlayer)).toHaveClass('positive');
        done();
      });
    });

    it('should enable the add point button while selecting a player item', function(done){
      Tracker.afterFlush(function(){
        expect($(addBtn)).not.toHaveClass('disabled');
        done();
      });
    });

    it('should enable the minu point button while selecting a player item', function(done){
      Tracker.afterFlush(function(){
        expect($(minusBtn)).not.toHaveClass('disabled');
        done();
      });
    });

    it('should emit "ChangedPlayerPoints" event with params { playerID, 5 } while clicking the add point btn', function(){
      FluxDispatcher.removeAllListeners('ChangedPlayerPoints');
      var addPointHandle = jasmine.createSpy('addPointHandle');
      FluxDispatcher.on('ChangedPlayerPoints', addPointHandle);
      $(addBtn).click();
      expect(addPointHandle).toHaveBeenCalledWith({ playerId: 2, score: 5 });
    });

    it('should emit "ChangedPlayerPoints" event with params { playerID, -5 } while clicking the minus point btn', function(){
      FluxDispatcher.removeAllListeners('ChangedPlayerPoints');
      var minusPointHandle = jasmine.createSpy('minusPointHandle');
      FluxDispatcher.on('ChangedPlayerPoints', minusPointHandle);
      $(minusBtn).click();
      expect(minusPointHandle).toHaveBeenCalledWith({ playerId: 2, score: -5 });
    });

  });
});

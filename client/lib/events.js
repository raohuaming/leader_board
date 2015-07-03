FluxDispatcher.defineEvents({
  ChangedPlayerPoints: {
    playerId: String,
    score: Match.Integer
  },
  AddNewPlayer: {
    name: String,
    callback: Match.Optional(Function)
  },
  DeletePlayer: {
    id: String,
    callback: Match.Optional(Function)
  }
});

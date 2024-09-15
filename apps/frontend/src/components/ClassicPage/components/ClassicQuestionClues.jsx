function ClassicQuestionClues({ gameState, cluesState }) {
  return (
    <>
      <div className="flex justify-around pt-8 text-wrap">
        <button
          className={`rounded-lg border-2 tooltip tooltip-up w-1/3 ${
            cluesState.firstApparitionClue <= 0
              ? 'hover:scale-110 border-clue-border text-clue-border uppercase'
              : 'border-disabled-clue text-disabled-clue'
          }`}
          data-tip="The chapter and episode of the character's first apparition."
          disabled={cluesState.firstApparitionClue > 0}
          onClick={() => {
            cluesState.updateFirstApparitionClueShow(
              !cluesState.firstApparitionClueShow
            );
            cluesState.updateDevilFruitClueShow(false);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\firstApparitionClueIcon.png"
              style={{
                filter:
                  cluesState.firstApparitionClue > 0
                    ? 'brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)'
                    : 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)',
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">First Apparition Clue</div>
          {cluesState.firstApparitionClue > 0 && (
            <div className="text-xs font-semibold">
              in {cluesState.firstApparitionClue} tries
            </div>
          )}
        </button>
        <button
          className={`rounded-lg border-2 w-1/3 tooltip tooltip-up ${
            cluesState.devilFruitClue <= 0
              ? 'hover:scale-110 border-clue-border text-clue-border uppercase'
              : 'border-disabled-clue text-disabled-clue'
          }`}
          data-tip="The name, if any"
          disabled={cluesState.devilFruitClue > 0}
          onClick={() => {
            cluesState.updateFirstApparitionClueShow(false);
            cluesState.updateDevilFruitClueShow(!cluesState.devilFruitClueShow);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\devilFruitTypeClueIcon.png"
              style={{
                filter:
                  cluesState.devilFruitClue > 0
                    ? 'brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)'
                    : 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)',
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">Devil Fruit Clue</div>
          {cluesState.devilFruitClue > 0 && (
            <div className="text-xs font-semibold">
              in {cluesState.devilFruitClue} tries
            </div>
          )}
        </button>
      </div>
      {cluesState.firstApparitionClueShow && (
        <div className="flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {gameState.todaysChar.first_apparition}
        </div>
      )}
      {cluesState.devilFruitClueShow && (
        <div className="flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {gameState.todaysChar.devil_fruit_name}
        </div>
      )}
    </>
  );
}

export default ClassicQuestionClues;

import ToolTip from '../../UI/ToolTip';

function DevilFruitQuestionClues({ gameState, cluesState }) {
  return (
    <>
      <div className="flex pt-8 gap-x-3 text-wrap">
        <button
          data-tooltip-id="cluesTooltip"
          data-tooltip-content="The type of the fruit"
          className={`rounded-lg border-2 w-1/3 ${
            cluesState.typeClue <= 0
              ? 'hover:scale-110 border-clue-border text-clue-border uppercase'
              : 'border-disabled-clue text-disabled-clue'
          }`}
          disabled={cluesState.typeClue > 0}
          onClick={() => {
            cluesState.updateTypeClueShow(!cluesState.typeClueShow);
            cluesState.updateTranslateClueShow(false);
            cluesState.updateExplanationClueShow(false);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\typeClueIcon.png"
              style={{
                filter:
                  cluesState.typeClue > 0
                    ? 'brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)'
                    : 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)',
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">Type Clue</div>
          {cluesState.typeClue > 0 && (
            <div className="text-xs font-semibold">
              in {cluesState.typeClue} tries
            </div>
          )}
        </button>
        <button
          data-tooltip-id="cluesTooltip"
          data-tooltip-content="A translation of the fruit's name"
          className={`rounded-lg border-2 w-1/3 ${
            cluesState.translateClue <= 0
              ? 'hover:scale-110 border-clue-border text-clue-border uppercase'
              : 'border-disabled-clue text-disabled-clue'
          }`}
          disabled={cluesState.translateClue > 0}
          onClick={() => {
            cluesState.updateTranslateClueShow(!cluesState.translateClueShow);
            cluesState.updateTypeClueShow(false);
            cluesState.updateExplanationClueShow(false);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\translatedClueIcon.png"
              style={{
                filter:
                  cluesState.translateClue > 0
                    ? 'brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)'
                    : 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)',
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">Translated Name Clue</div>
          {cluesState.translateClue > 0 && (
            <div className="text-xs font-semibold">
              in {cluesState.translateClue} tries
            </div>
          )}
        </button>
        <button
          data-tooltip-id="cluesTooltip"
          data-tooltip-content="Details on what the fruit does"
          className={`rounded-lg border-2 w-1/3 ${
            cluesState.explanationClue <= 0
              ? 'hover:scale-110 border-clue-border text-clue-border uppercase'
              : 'border-disabled-clue text-disabled-clue'
          }`}
          disabled={cluesState.explanationClue > 0}
          onClick={() => {
            cluesState.updateExplanationClueShow(
              !cluesState.explanationClueShow
            );
            cluesState.updateTranslateClueShow(false);
            cluesState.updateTypeClueShow(false);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\explanationClueIcon.png"
              style={{
                filter:
                  cluesState.explanationClue > 0
                    ? 'brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)'
                    : 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)',
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">Explanation Clue</div>
          {cluesState.explanationClue > 0 && (
            <div className="text-xs font-semibold">
              in {cluesState.explanationClue} tries
            </div>
          )}
        </button>
      </div>
      {cluesState.typeClueShow && (
        <div className="animate-fade flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {gameState.todaysChar.devil_fruit_type}
        </div>
      )}
      {cluesState.translateClueShow && (
        <div className="animate-fade flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {gameState.todaysChar.devil_fruit_translated}
        </div>
      )}
      {cluesState.explanationClueShow && (
        <div className="animate-fade flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {gameState.todaysChar.devil_fruit_explanation}
        </div>
      )}
      <ToolTip id="cluesTooltip" place="bottom" />
    </>
  );
}

export default DevilFruitQuestionClues;

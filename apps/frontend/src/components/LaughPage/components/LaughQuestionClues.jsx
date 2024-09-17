import ToolTip from '../../UI/ToolTip';

function LaughQuestionClues({ gameState, cluesState }) {
  return (
    <>
      <div className="flex justify-around pt-8 text-wrap">
        <button
          data-tooltip-id="cluesTooltip"
          data-tooltip-content="Character's origin"
          className={`rounded-lg border-2 w-1/3 ${
            cluesState.originClue <= 0
              ? 'hover:scale-110 border-clue-border text-clue-border uppercase'
              : 'border-disabled-clue text-disabled-clue'
          }`}
          disabled={cluesState.originClue > 0}
          onClick={() => {
            cluesState.updateOriginClueShow(!cluesState.originClueShow);
            cluesState.updateAffiliationClueShow(false);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets/originClueIcon.png"
              style={{
                filter:
                  cluesState.originClue > 0
                    ? 'brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)'
                    : 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)',
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">Origin Clue</div>
          {cluesState.originClue > 0 && (
            <div className="text-xs font-semibold">
              in {cluesState.originClue} tries
            </div>
          )}
        </button>
        <button
          data-tooltip-id="cluesTooltip"
          data-tooltip-content="Character's affiliation"
          className={`rounded-lg border-2 w-1/3 ${
            cluesState.affiliationClue <= 0
              ? 'hover:scale-110 border-clue-border text-clue-border uppercase'
              : 'border-disabled-clue text-disabled-clue'
          }`}
          disabled={cluesState.affiliationClue > 0}
          onClick={() => {
            cluesState.updateOriginClueShow(false);
            cluesState.updateAffiliationClueShow(
              !cluesState.affiliationClueShow
            );
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\affiliationClueIcon.png"
              style={{
                filter:
                  cluesState.affiliationClue > 0
                    ? 'brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)'
                    : 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)',
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">Affiliation Clue</div>
          {cluesState.affiliationClue > 0 && (
            <div className="text-xs font-semibold">
              in {cluesState.affiliationClue} tries
            </div>
          )}
        </button>
      </div>
      {cluesState.originClueShow && (
        <div className="animate-fade flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {gameState.todaysChar.origin}
        </div>
      )}
      {cluesState.affiliationClueShow && (
        <div className="animate-fade flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {gameState.todaysChar.affiliation}
        </div>
      )}
      <ToolTip id="cluesTooltip" place="bottom" />
    </>
  );
}

export default LaughQuestionClues;

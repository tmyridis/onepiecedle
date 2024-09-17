import { convertToBellyCurrencySystem } from '../../../lib/utilities';
import ToolTip from '../../UI/ToolTip';
function WantedQuestionClues({ gameState, cluesState }) {
  return (
    <>
      {gameState.numTries >= 1 && (
        <div className="flex justify-center pt-8 text-wrap">
          <button
            data-tooltip-id="cluesTooltip"
            data-tooltip-content="The value of the character's last bounty"
            className={`rounded-lg border-2 w-full uppercase ${
              cluesState.bountyClue <= 0
                ? 'hover:scale-110 border-clue-border text-clue-border uppercase'
                : 'border-disabled-clue text-disabled-clue'
            }`}
            disabled={cluesState.bountyClue > 0}
            onClick={() => {
              cluesState.updateBountyClueShow(!cluesState.bountyClueShow);
            }}
          >
            <div className="flex justify-center py-1">
              <img
                className="w-10"
                src="src\assets\bountyBellyClueIcon.png"
                style={{
                  filter:
                    cluesState.bountyClue > 0
                      ? 'brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)'
                      : 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)',
                }}
              />
            </div>
            <div className="text-xs font-semibold">Bounty Clue</div>
            {cluesState.bountyClue > 0 && (
              <div className="text-xs font-semibold">
                in {cluesState.bountyClue} tries
              </div>
            )}
          </button>
        </div>
      )}
      {cluesState.bountyClueShow && (
        <div className="animate-fade flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          <img
            className="w-3 p-0"
            src="src\assets\bountyBellyIcon.png"
            style={{
              filter:
                'brightness(0) saturate(100%) invert(31%) sepia(3%) saturate(2688%) hue-rotate(6deg) brightness(88%) contrast(87%)',
            }}
          />
          {convertToBellyCurrencySystem(gameState.todaysChar.bounty)}
        </div>
      )}
      <ToolTip id="cluesTooltip" place="bottom" />
    </>
  );
}

export default WantedQuestionClues;

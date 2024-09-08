import { convertToBellyCurrencySystem } from '../../../lib/utilities';
function WantedQuestionClues(props) {
  return (
    <>
      {props.numTries >= 1 && (
        <div className="flex justify-center pt-8 text-wrap">
          <button
            className={`rounded-lg border-2 w-full tooltip tooltip-up uppercase ${
              props.bountyClue <= 0
                ? 'hover:scale-110 border-clue-border text-clue-border uppercase'
                : 'border-disabled-clue text-disabled-clue'
            }`}
            data-tip="The value of the character's last bounty"
            disabled={props.bountyClue > 0}
            onClick={() => {
              props.setBountyClueShow(!props.bountyClueShow);
            }}
          >
            <div className="flex justify-center py-1">
              <img
                className="w-10"
                src="src\assets\bountyBellyClueIcon.png"
                style={{
                  filter:
                    props.bountyClue > 0
                      ? 'brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)'
                      : 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)',
                }}
              />
            </div>
            <div className="text-xs font-semibold">Bounty Clue</div>
            {props.bountyClue > 0 && (
              <div className="text-xs font-semibold">
                in {props.bountyClue} tries
              </div>
            )}
          </button>
        </div>
      )}
      {props.bountyClueShow && (
        <div className="flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          <img
            className="w-3 p-0"
            src="src\assets\bountyBellyIcon.png"
            style={{
              filter:
                'brightness(0) saturate(100%) invert(31%) sepia(3%) saturate(2688%) hue-rotate(6deg) brightness(88%) contrast(87%)',
            }}
          />
          {convertToBellyCurrencySystem(props.todaysChar.bounty)}
        </div>
      )}
    </>
  );
}

export default WantedQuestionClues;

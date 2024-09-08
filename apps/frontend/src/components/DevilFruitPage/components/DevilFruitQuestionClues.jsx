function DevilFruitQuestionClues(props) {
  return (
    <>
      <div className="flex pt-8 gap-x-3 text-wrap">
        <button
          className={`rounded-lg border-2 w-1/3 tooltip tooltip-up ${
            props.typeClue <= 0
              ? 'hover:scale-110 border-clue-border text-clue-border uppercase'
              : 'border-disabled-clue text-disabled-clue'
          }`}
          data-tip="The type of the fruit"
          disabled={props.typeClue > 0}
          onClick={() => {
            props.setTypeClueShow(!props.typeClueShow);
            props.setTranslateClueShow(false);
            props.setExplanationClueShow(false);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\typeClueIcon.png"
              style={{
                filter:
                  props.typeClue > 0
                    ? 'brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)'
                    : 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)',
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">Type Clue</div>
          {props.typeClue > 0 && (
            <div className="text-xs font-semibold">
              in {props.typeClue} tries
            </div>
          )}
        </button>
        <button
          className={`rounded-lg border-2 w-1/3 tooltip tooltip-up ${
            props.translateClue <= 0
              ? 'hover:scale-110 border-clue-border text-clue-border uppercase'
              : 'border-disabled-clue text-disabled-clue'
          }`}
          data-tip="A translation of the fruit's name"
          disabled={props.translateClue > 0}
          onClick={() => {
            props.setTranslateClueShow(!props.translateClueShow);
            props.setTypeClueShow(false);
            props.setExplanationClueShow(false);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\translatedClueIcon.png"
              style={{
                filter:
                  props.translateClue > 0
                    ? 'brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)'
                    : 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)',
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">Translated Name Clue</div>
          {props.translateClue > 0 && (
            <div className="text-xs font-semibold">
              in {props.translateClue} tries
            </div>
          )}
        </button>
        <button
          className={`rounded-lg border-2 w-1/3 tooltip tooltip-up ${
            props.explanationClue <= 0
              ? 'hover:scale-110 border-clue-border text-clue-border uppercase'
              : 'border-disabled-clue text-disabled-clue'
          }`}
          data-tip="Details on what the fruit does"
          disabled={props.explanationClue > 0}
          onClick={() => {
            props.setExplanationClueShow(!props.explanationClueShow);
            props.setTranslateClueShow(false);
            props.setTypeClueShow(false);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\explanationClueIcon.png"
              style={{
                filter:
                  props.explanationClue > 0
                    ? 'brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)'
                    : 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)',
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">Explanation Clue</div>
          {props.explanationClue > 0 && (
            <div className="text-xs font-semibold">
              in {props.explanationClue} tries
            </div>
          )}
        </button>
      </div>
      {props.typeClueShow && (
        <div className="flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {props.todaysChar.devil_fruit_type}
        </div>
      )}
      {props.translateClueShow && (
        <div className="flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {props.todaysChar.devil_fruit_translated}
        </div>
      )}
      {props.explanationClueShow && (
        <div className="flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {props.todaysChar.devil_fruit_explanation}
        </div>
      )}
    </>
  );
}

export default DevilFruitQuestionClues;

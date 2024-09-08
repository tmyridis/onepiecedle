function LaughQuestionClues(props) {
  return (
    <>
      <div className="flex justify-around pt-8 text-wrap">
        <button
          className={`rounded-lg border-2 tooltip tooltip-up w-1/3 ${
            props.originClue <= 0
              ? "hover:scale-110 border-clue-border text-clue-border uppercase"
              : "border-disabled-clue text-disabled-clue"
          }`}
          data-tip="Character's origin"
          disabled={props.originClue > 0}
          onClick={() => {
            props.setOriginClueShow(!props.originClueShow);
            props.setAffiliationClueShow(false);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\firstApparitionClueIcon.png"
              style={{
                filter:
                  props.originClue > 0
                    ? "brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)"
                    : "brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)",
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">Origin Clue</div>
          {props.originClue > 0 && (
            <div className="text-xs font-semibold">
              in {props.originClue} tries
            </div>
          )}
        </button>
        <button
          className={`rounded-lg border-2 w-1/3 tooltip tooltip-up ${
            props.affiliationClue <= 0
              ? "hover:scale-110 border-clue-border text-clue-border uppercase"
              : "border-disabled-clue text-disabled-clue"
          }`}
          data-tip="Character's affiliation"
          disabled={props.affiliationClue > 0}
          onClick={() => {
            props.setOriginClueShow(false);
            props.setAffiliationClueShow(!props.affiliationClueShow);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\devilFruitTypeClueIcon.png"
              style={{
                filter:
                  props.affiliationClue > 0
                    ? "brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)"
                    : "brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)",
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">Affiliation Clue</div>
          {props.affiliationClue > 0 && (
            <div className="text-xs font-semibold">
              in {props.affiliationClue} tries
            </div>
          )}
        </button>
      </div>
      {props.originClueShow && (
        <div className="flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {props.todaysChar.origin}
        </div>
      )}
      {props.affiliationClueShow && (
        <div className="flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {props.todaysChar.affiliation}
        </div>
      )}
    </>
  );
}

export default LaughQuestionClues;

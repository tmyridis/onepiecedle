function ClassicQuestionClues(props) {
  return (
    <>
      <div className="flex justify-around pt-8 text-wrap">
        <button
          className={`rounded-lg border-2 tooltip tooltip-up w-1/3 ${
            props.firstApparitionClue <= 0
              ? "hover:scale-110 border-clue-border text-clue-border uppercase"
              : "border-disabled-clue text-disabled-clue"
          }`}
          data-tip="The chapter and episode of the character's first apparition."
          disabled={props.firstApparitionClue > 0}
          onClick={() => {
            props.setFirstApparitionClueShow(!props.firstApparitionClueShow);
            props.setDevilFruitClueShow(false);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\firstApparitionClueIcon.png"
              style={{
                filter:
                  props.firstApparitionClue > 0
                    ? "brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)"
                    : "brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)",
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">First Apparition Clue</div>
          {props.firstApparitionClue > 0 && (
            <div className="text-xs font-semibold">
              in {props.firstApparitionClue} tries
            </div>
          )}
        </button>
        <button
          className={`rounded-lg border-2 w-1/3 tooltip tooltip-up ${
            props.devilFruitClue <= 0
              ? "hover:scale-110 border-clue-border text-clue-border uppercase"
              : "border-disabled-clue text-disabled-clue"
          }`}
          data-tip="The name, if any"
          disabled={props.devilFruitClue > 0}
          onClick={() => {
            props.setFirstApparitionClueShow(false);
            props.setDevilFruitClueShow(!props.devilFruitClueShow);
          }}
        >
          <div className="flex justify-center py-1">
            <img
              className="w-10"
              src="src\assets\devilFruitTypeClueIcon.png"
              style={{
                filter:
                  props.devilFruitClue > 0
                    ? "brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(437%) hue-rotate(327deg) brightness(92%) contrast(85%)"
                    : "brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(2369%) hue-rotate(353deg) brightness(100%) contrast(102%)",
              }}
            ></img>
          </div>
          <div className="text-xs font-semibold">Devil Fruit Clue</div>
          {props.devilFruitClue > 0 && (
            <div className="text-xs font-semibold">
              in {props.devilFruitClue} tries
            </div>
          )}
        </button>
      </div>
      {props.firstApparitionClueShow && (
        <div className="flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {props.todaysChar.first_apparition}
        </div>
      )}
      {props.devilFruitClueShow && (
        <div className="flex justify-center bg-lighter-grey rounded-lg border-1 p-4">
          {props.todaysChar.devil_fruit_name}
        </div>
      )}
    </>
  );
}

export default ClassicQuestionClues;

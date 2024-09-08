import LoadingSpinner from "../../UI/LoadingSpinner";
import LaughQuestionClues from "./LaughQuestionClues";

function LaughQuestionTab(props) {
  return (
    <>
      {props.todaysChar !== undefined ? (
        <div className="flex justify-center items-center mt-40">
          <div className="grid grid-cols-1 border-4 border-dark-grey rounded w-96 bg-light-grey text-center p-4 space-y-5 text-dark-grey-font">
            <div className="text-lg font-semibold uppercase">
              Which character has this laugh?
            </div>
            <div className="border-2 border-clue-border rounded-lg h-full pt-4">
              <audio src={props.todaysChar.laugh[0]} ref={props.audioElement} />
              <button
                className="flex justify-center items-center gap-x-1 mx-auto"
                onClick={props.onPlayPauseEvent}
              >
                {props.isPlayingLaugh === false ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8 text-orange"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8 text-orange"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                    />
                  </svg>
                )}
                <div className="text-orange underline">Play audio</div>
              </button>
              {/* <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  onChange={(e) => {
                    console.log(e);
                  }}
                  className="w-2/3 bg-lighter-grey h-3 appearance-none border-2 border-clue-border cursor-pointer accent-orange [&::-webkit-slider-thumb]:bg-blue"
                ></input>
              </div> */}
            </div>
            <div className="w-full rounded-md p-5"></div>
            <LaughQuestionClues
              originClue={props.originClue}
              originClueShow={props.originClueShow}
              setOriginClueShow={props.setOriginClueShow}
              affiliationClue={props.affiliationClue}
              affiliationClueShow={props.affiliationClueShow}
              setAffiliationClueShow={props.setAffiliationClueShow}
              todaysChar={props.todaysChar}
            />
          </div>
        </div>
      ) : (
        <LoadingSpinner type="laugh" />
      )}
    </>
  );
}
export default LaughQuestionTab;

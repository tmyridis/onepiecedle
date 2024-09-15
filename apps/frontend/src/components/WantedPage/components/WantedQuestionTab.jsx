import LoadingSpinner from '../../UI/LoadingSpinner';
import WantedEffectButtons from './WantedEffectButtons';
import WantedQuestionClues from './WantedQuestionClues';

function WantedQuestionTab({ gameState, cluesState }) {
  return (
    <>
      {gameState.todaysChar !== undefined ? (
        <div className="flex justify-center items-center mt-40">
          <div className="grid grid-cols-1 border-4 border-dark-grey rounded w-96 bg-light-grey text-center p-4 space-y-5 text-dark-grey-font">
            <div className="text-lg font-semibold uppercase">
              Which character is on this Wanted poster?
            </div>
            <div className="bg-wanted-poster w-full rounded-md p-5">
              <div
                className=""
                style={{
                  fontFamily: 'Times New Roman, Times, serif',
                  color: '#4f403d',
                  fontWeight: '1000',
                  transform: 'scaleY(1.7)',
                  fontSize: '3.5rem',
                  userSelect: 'none',
                }}
              >
                WANTED
              </div>
              <div className="flex justify-center pb-6 pt-5">
                <img
                  src={gameState.todaysChar.wanted_image[0]}
                  style={{
                    filter: `blur(${gameState.blurPixels}px) grayscale(${
                      gameState.displayColors ? 0 : 1
                    })`,
                    userSelect: 'none',
                    height: '200px',
                    width: '304px',
                  }}
                />
              </div>
              <div
                className="pt-2"
                style={{
                  fontFamily: 'CenturyOldStyleStdBold',
                  color: '#4f403d',
                  fontWeight: '1000',
                  transform: 'scaleY(1.7)',
                  fontSize: '2rem',
                  userSelect: 'none',
                }}
              >
                DEAD OR ALIVE
              </div>
            </div>
            <WantedQuestionClues
              gameState={gameState}
              cluesState={cluesState}
            />
            <WantedEffectButtons gameState={gameState} />
          </div>
        </div>
      ) : (
        <LoadingSpinner type="wanted" />
      )}
    </>
  );
}

export default WantedQuestionTab;

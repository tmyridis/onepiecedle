import LoadingSpinner from '../../UI/LoadingSpinner';
import ClassicQuestionClues from './ClassicQuestionClues';

function ClassicQuestionTab({ gameState, cluesState }) {
  return (
    <>
      {gameState.todaysChar !== undefined ? (
        <div className="flex justify-center items-center mt-40">
          <div
            className={`grid grid-cols-1 border-4 border-dark-grey rounded w-96 bg-light-grey text-center ${
              gameState.numTries == 1 && 'h-36'
            } p-8 space-y-5 text-dark-grey-font`}
          >
            <div className="text-lg font-semibold uppercase">
              Guess today's One Piece's character!
            </div>
            {gameState.numTries < 1 && (
              <div className="text-sm font-medium">
                Type any character to begin.
              </div>
            )}
            {gameState.numTries > 1 && (
              <ClassicQuestionClues
                gameState={gameState}
                cluesState={cluesState}
              />
            )}
          </div>
        </div>
      ) : (
        <LoadingSpinner type="classic" />
      )}
    </>
  );
}

export default ClassicQuestionTab;

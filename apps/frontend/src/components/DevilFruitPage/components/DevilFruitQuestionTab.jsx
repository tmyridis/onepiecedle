import LoadingSpinner from '../../UI/LoadingSpinner';
import DevilFruitQuestionClues from './DevilFruitQuestionClues';

function DevilFruitQuestionTab({ gameState, cluesState }) {
  return (
    <>
      {gameState.todaysChar !== undefined ? (
        <div className="flex justify-center items-center mt-40">
          <div className="grid grid-cols-1 border-4 border-dark-grey rounded w-96 h-38 bg-light-grey text-center p-8 space-y-5 text-dark-grey-font">
            <div className="text-lg font-semibold uppercase">
              Which character ate this Devil fruit?
            </div>
            <div className="text-2xl font-medium">
              ❝ {gameState.todaysChar.devil_fruit_name} ❞
            </div>
            <DevilFruitQuestionClues
              gameState={gameState}
              cluesState={cluesState}
            />
          </div>
        </div>
      ) : (
        <LoadingSpinner type="fruit" />
      )}
    </>
  );
}

export default DevilFruitQuestionTab;

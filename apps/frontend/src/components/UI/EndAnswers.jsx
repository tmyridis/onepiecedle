import { Link } from 'react-router-dom';
import RopeBar from './RopeBar';
import Timer from './Timer';

function EndAnswers({ gameState, to, type }) {
  return (
    <div
      className="flex justify-center items-center w-1/2 max-w-lg mx-auto mt-10 pb-40 mb-20 text-dark-grey-font text-center border-2 rounded-lg border-dark-grey bg-end-answers"
      id="foundChar"
    >
      <div className="grid grid-cols-1 space-y-7">
        <div className="font-bold text-3xl pt-3">
          {gameState.numTries === 1
            ? 'gg ez'
            : gameState.numTries === 2
            ? 'nicee!'
            : 'Victory!'}
        </div>
        <div className="flex gap-x-3 justify-center">
          <img
            src={gameState.todaysChar.image}
            className="border-2 rounded-lg"
          />
          <div className="pt-4">
            You guessed
            <div className="text-2xl font-extrabold">
              {gameState.todaysChar.char_name}
            </div>
          </div>
        </div>
        <div>
          Number of tries: <strong>{gameState.numTries}</strong>
        </div>
        <div className="font-bold text-xl">Next character in</div>
        <Timer />
        {type === 'wanted' && (
          <div className="px-10">
            <img src={gameState.todaysChar.wanted_image} />
          </div>
        )}
        <div className="font-bold text-xl">Next mode:</div>
        <div className="font-bold text-xl">
          <div className="animate-bounce hover:animate-none">
            <Link to={to}>
              {to === '/classic' && (
                <div className="w-96 relative text-center">
                  <img src="src\assets\gameButtonClassic.png" />
                  <div className="w-full absolute top-0 left-0 text-center mt-8">
                    <div className="text-xl font-bold text-center">Classic</div>
                    <div className="text-sm font-medium text-center">
                      Get clues on every try
                    </div>
                  </div>
                </div>
              )}
              {to === '/devilFruit' && (
                <div className="w-96 relative text-center">
                  <img src="src\assets\gameButtonFruit.png" />
                  <div className="w-full absolute top-0 left-0 text-center mt-8">
                    <div className="text-xl font-bold text-center">
                      Devil fruit
                    </div>
                    <div className="text-sm font-medium text-center">
                      Guess with a name
                    </div>
                  </div>
                </div>
              )}
              {to === '/wanted' && (
                <div className="w-96 relative text-center">
                  <img src="src\assets\gameButtonWanted.png" />
                  <div className="w-full absolute top-0 left-0 text-center mt-8">
                    <div className="text-xl font-bold text-center">Wanted</div>
                    <div className="text-sm font-medium text-center">
                      Guess with a poster
                    </div>
                  </div>
                </div>
              )}
              {to === '/laugh' && (
                <div className="flex justify-center">
                  <div className="w-96 relative text-center">
                    <img src="src\assets\gameButtonLaugh.png" />
                    <div className="w-full absolute top-0 left-0 text-center mt-8">
                      <div className="text-xl font-bold text-center">Laugh</div>
                      <div className="text-sm font-medium text-center">
                        Guess with a laugh audio
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Link>
          </div>
        </div>
        <div className="font-bold text-xl">
          <RopeBar />
        </div>
      </div>
    </div>
  );
}

export default EndAnswers;

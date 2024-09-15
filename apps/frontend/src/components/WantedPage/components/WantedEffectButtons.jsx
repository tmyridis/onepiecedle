import { getTriesFromAnswers, subtractTillZero } from '../../../lib/utilities';

function WantedEffectButtons({ gameState }) {
  return (
    <div className="flex justify-between px-5 pt-4 text-xs">
      <div className="text-left text-wrap">
        <label className="relative flex items-center mb-5 cursor-pointer">
          <input
            type="checkbox"
            checked={gameState.blurDisplay}
            onChange={() => {
              if (gameState.blurDisplay === true) {
                gameState.updateBlurPixels(7.5);
              } else {
                gameState.updateBlurPixels(
                  subtractTillZero(7.5, getTriesFromAnswers('wanted_answers'))
                );
              }
              gameState.updateBlurDisplay(!gameState.blurDisplay);
            }}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-beige peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange "></div>
        </label>
        <div>Each try unblurs the image a bit</div>
      </div>
      <div>
        <label className="relative flex items-center mb-5 cursor-pointer">
          <input
            type="checkbox"
            checked={gameState.displayColors}
            className="sr-only peer"
            onChange={() => {
              gameState.updateDisplayColors(!gameState.displayColors);
            }}
          />
          <div className="w-11 h-6 bg-beige peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange "></div>
        </label>
        <div>Display colors</div>
      </div>
    </div>
  );
}

export default WantedEffectButtons;

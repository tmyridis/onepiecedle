import { useEffect } from 'react';
import Navbar from '../UI/Navbar';
import EndAnswers from '../UI/EndAnswers';
import DevilFruitQuestionTab from './components/DevilFruitQuestionTab';
import DevilFruitSearchInput from './components/DevilFruitSearchInput';
import DevilFruitSearchingNames from './components/DevilFruitSearchingNames';
import NamesList from '../UI/NamesList';
import {
  fetchFruitCharacters,
  fetchTodaysChar,
  fetchYesterdaysChar,
} from './hooks/devilFruitFetch';
import useGame from '../../hooks/useGame';
import useClues from '../../hooks/useClues';
import useTime from '../../hooks/useTime';

function DevilFruitPage() {
  const devilFruitState = useGame('fruit');
  const cluesState = useClues('fruit');
  const time = useTime();

  useEffect(() => {
    console.log(devilFruitState);
    console.log(cluesState);
    const fetchData = async () => {
      await fetchTodaysChar(
        devilFruitState.updateTodaysChar,
        devilFruitState.updateFoundChar,
        devilFruitState.clearAll,
        cluesState
      );
      await fetchFruitCharacters(
        devilFruitState.charactersSelected,
        devilFruitState.updateAvailableCharacters,
        devilFruitState.updateCharactersSelected
      );
      await fetchYesterdaysChar(devilFruitState.updateYesterdaysChar);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(function () {
      const releventDiv = document.getElementById('foundChar');
      if (releventDiv) {
        releventDiv.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }
    }, 2000);
  }, [devilFruitState.foundChar]);

  return (
    <Navbar>
      <DevilFruitQuestionTab
        gameState={devilFruitState}
        cluesState={cluesState}
      />
      {!devilFruitState.foundChar &&
        devilFruitState.todaysChar !== undefined && (
          <DevilFruitSearchInput
            gameState={devilFruitState}
            cluesState={cluesState}
          />
        )}
      {devilFruitState.todaysChar !== undefined && (
        <div className="relative">
          <DevilFruitSearchingNames
            gameState={devilFruitState}
            cluesState={cluesState}
          />
          {devilFruitState.charactersSelected.length > 0 && (
            <NamesList gameState={devilFruitState} />
          )}
          {devilFruitState.foundChar && (
            <EndAnswers gameState={devilFruitState} to={'/wanted'} />
          )}
          {devilFruitState.yesterdaysChar !== undefined && (
            <div className="flex justify-center items-center font-black text-xl pt-20">
              <div>Yesterday's character was &nbsp;</div>
              <div className="text-orange">
                {devilFruitState.yesterdaysChar}
              </div>
            </div>
          )}
          <div className="h-28"></div>
        </div>
      )}
    </Navbar>
  );
}

export default DevilFruitPage;

import { useEffect } from 'react';
import Navbar from '../UI/Navbar';
import EndAnswers from '../UI/EndAnswers';
import {
  fetchYesterdaysChar,
  fetchTodaysChar,
  fetchWantedCharacters,
} from './hooks/wantedFetch';
import WantedQuestionTab from './components/WantedQuestionTab';
import WantedSearchInput from './components/WantedSearchInput';
import WantedSearchingNames from './components/WantedSearchingNames';
import NamesList from '../UI/NamesList';
import useGame from '../../hooks/useGame';
import useClues from '../../hooks/useClues';
import useTime from '../../hooks/useTime';

function WantedPage() {
  const wantedState = useGame('wanted');
  const cluesState = useClues('wanted');
  const time = useTime();

  useEffect(() => {
    console.log(wantedState);
    console.log(cluesState);
    const fetchData = async () => {
      await fetchTodaysChar(
        wantedState.updateTodaysChar,
        wantedState.updateFoundChar,
        wantedState.clearAll,
        cluesState
      );
      await fetchWantedCharacters(
        wantedState.charactersSelected,
        wantedState.updateAvailableCharacters,
        wantedState.updateCharactersSelected
      );

      await fetchYesterdaysChar(wantedState.updateYesterdaysChar);
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
  }, [wantedState.foundChar]);

  return (
    <Navbar>
      <WantedQuestionTab gameState={wantedState} cluesState={cluesState} />
      {!wantedState.foundChar && wantedState.todaysChar !== undefined && (
        <WantedSearchInput gameState={wantedState} cluesState={cluesState} />
      )}
      {wantedState.todaysChar !== undefined && (
        <div className="relative">
          <WantedSearchingNames
            gameState={wantedState}
            cluesState={cluesState}
          />
          {wantedState.charactersSelected.length > 0 && (
            <NamesList gameState={wantedState} />
          )}
          {wantedState.foundChar && (
            <EndAnswers gameState={wantedState} to={'/laugh'} type={'wanted'} />
          )}
          {wantedState.yesterdaysChar !== undefined && (
            <div className="flex justify-center items-center font-black text-xl pt-20 mb-20">
              <div>Yesterday's character was &nbsp;</div>
              <div className="text-orange">{wantedState.yesterdaysChar}</div>
            </div>
          )}
          <div className="h-28"></div>
        </div>
      )}
    </Navbar>
  );
}

export default WantedPage;

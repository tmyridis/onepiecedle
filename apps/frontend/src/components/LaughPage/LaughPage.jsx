import { useEffect, useRef } from 'react';
import Navbar from '../UI/Navbar';
import EndAnswers from '../UI/EndAnswers';
import {
  fetchLaughCharacters,
  fetchTodaysChar,
  fetchYesterdaysChar,
} from './hooks/laughFetch';
import LaughQuestionTab from './components/LaughQuestionTab';
import LaughSearchInput from './components/LaughSearchInput';
import LaughSearchingNames from './components/LaughSearchingNames';
import NamesList from '../UI/NamesList';
import useGame from '../../hooks/useGame';
import useClues from '../../hooks/useClues';
import useTime from '../../hooks/useTime';

function LaughPage() {
  const laughState = useGame('laugh');
  const cluesState = useClues('laugh');
  const time = useTime();

  const audioElement = useRef();

  const onPlayPauseEvent = () => {
    laughState.updatePlayingLaugh(!laughState.isPlayingLaugh);
  };

  useEffect(() => {
    if (laughState.todaysChar !== undefined) {
      if (laughState.isPlayingLaugh) {
        console.log('playing');
        audioElement.current.play();
      } else {
        audioElement.current.pause();
        audioElement.current.currentTime = 0;
      }
    }
  }, [laughState.isPlayingLaugh]);

  useEffect(() => {
    console.log(laughState);
    console.log(cluesState);
    const fetchData = async () => {
      await fetchTodaysChar(
        laughState.updateTodaysChar,
        laughState.updateFoundChar,
        laughState.clearAll,
        cluesState
      );
      await fetchLaughCharacters(
        laughState.charactersSelected,
        laughState.updateAvailableCharacters,
        laughState.updateCharactersSelected
      );

      await fetchYesterdaysChar(laughState.updateYesterdaysChar);
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
  }, [laughState.foundChar]);

  return (
    <Navbar>
      <LaughQuestionTab
        gameState={laughState}
        cluesState={cluesState}
        onPlayPauseEvent={onPlayPauseEvent}
        audioElement={audioElement}
      />
      {!laughState.foundChar && laughState.todaysChar !== undefined && (
        <LaughSearchInput gameState={laughState} cluesState={cluesState} />
      )}
      {laughState.todaysChar !== undefined && (
        <div className="relative">
          <LaughSearchingNames gameState={laughState} cluesState={cluesState} />
          {laughState.charactersSelected.length > 0 && (
            <NamesList gameState={laughState} />
          )}
          {laughState.foundChar && (
            <EndAnswers gameState={laughState} to={'/classic'} />
          )}
          {laughState.yesterdaysChar !== undefined && (
            <div className="flex justify-center items-center font-black text-xl pt-20 mb-20">
              <div>Yesterday's character was &nbsp;</div>
              <div className="text-orange">{laughState.yesterdaysChar}</div>
            </div>
          )}
          <div className="h-28"></div>
        </div>
      )}
    </Navbar>
  );
}

export default LaughPage;

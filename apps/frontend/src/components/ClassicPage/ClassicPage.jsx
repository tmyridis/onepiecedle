import { useEffect } from 'react';
import Navbar from '../UI/Navbar';
import EndAnswers from '../UI/EndAnswers';
import ClassicSearchInput from './components/ClassicSearchInput';
import ClassicSearchingNames from './components/ClassicSearchingNames';
import ClassicQuestionTab from './components/ClassicQuestionTab';
import CharacterTable from './components/CharacterTable';
import ColorIndicators from './components/ColorIndicators';
import {
  fetchTodaysChar,
  fetchArcs,
  fetchYesterdaysChar,
  fetchClassicCharacters,
} from './hooks/classicFetch';
import useGame from '../../hooks/useGame';
import useClues from '../../hooks/useClues';
import useTime from '../../hooks/useTime';

function ClassicPage() {
  const classicState = useGame('classic');
  const cluesState = useClues('classic');
  const time = useTime();

  const fetchRandomChar = async () => {
    try {
      await fetch('http://localhost:5000/classic/random_char')
        .then((result) => result.json())
        .then((char) => {
          console.log(char);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(classicState);
    console.log(cluesState);
    const fetchData = async () => {
      await fetchTodaysChar(
        classicState.updateTodaysChar,
        classicState.updateFoundChar,
        classicState.clearAll,
        cluesState
      );
      await fetchArcs(classicState.updateArcs);
      await fetchClassicCharacters(
        classicState.charactersSelected,
        classicState.updateAvailableCharacters,
        classicState.updateCharactersSelected
      );
      fetchYesterdaysChar(classicState.updateYesterdaysChar);
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
    }, 3000);
  }, [classicState.foundChar]);

  return (
    <Navbar>
      <ClassicQuestionTab gameState={classicState} cluesState={cluesState} />
      {!classicState.foundChar && classicState.todaysChar !== undefined && (
        <ClassicSearchInput gameState={classicState} cluesState={cluesState} />
      )}
      {classicState.todaysChar !== undefined ? (
        <div className="relative">
          <ClassicSearchingNames
            gameState={classicState}
            cluesState={cluesState}
          />
          {classicState.charactersSelected.length > 0 && (
            <>
              <CharacterTable gameState={classicState} />
              {classicState.colorIndicators && (
                <ColorIndicators gameState={classicState} />
              )}
            </>
          )}
          {classicState.foundChar && (
            <EndAnswers gameState={classicState} to={'/devilFruit'} />
          )}
          {classicState.yesterdaysChar !== undefined && (
            <div className="flex justify-center items-center font-black text-xl pt-20 mb-20">
              <div>Yesterday's character was &nbsp;</div>
              <div className="text-orange">{classicState.yesterdaysChar}</div>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </Navbar>
  );
}

export default ClassicPage;

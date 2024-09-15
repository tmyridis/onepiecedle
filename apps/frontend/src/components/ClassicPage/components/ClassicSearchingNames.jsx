import SearchingNames from '../../UI/SearchingNames';
import { objectComparison } from '../../../lib/utilities';

function ClassicSearchingNames({ gameState, cluesState }) {
  const onSubmitClick = (item) => {
    // Set color indicators to show only after first try
    if (gameState.numTries === 0) {
      gameState.updateColorIndicators(true);
    }
    var classic_answers = JSON.parse(localStorage.getItem('classic_answers'));
    console.log(classic_answers);
    if (classic_answers === null) {
      classic_answers = [];
    }
    classic_answers.push(item.char_name);
    console.log(classic_answers);
    localStorage.setItem('classic_answers', JSON.stringify(classic_answers));

    // Close searching bar when submitting and also clear input
    gameState.updateSearchingNames([]);
    gameState.updateInputName('');

    // Remove submitted character from available characters
    var tempAvailableChars = [...gameState.availableCharacters];
    tempAvailableChars.splice(
      tempAvailableChars.findIndex((obj) => obj.char_name === item.char_name),
      1
    );
    gameState.updateAvailableCharacters(tempAvailableChars);

    console.log(item);

    // Update characters selected
    var temp = gameState.charactersSelected;
    temp.push(item);
    gameState.updateCharactersSelected(temp);
    console.log(objectComparison(item, gameState.todaysChar));

    // Check if found character
    if (objectComparison(item, gameState.todaysChar)) {
      gameState.updateFoundChar(true);
      localStorage.setItem('classic_found', true);
      console.log('FOUND');

      // Enable clues when character is found
      cluesState.updateFirstApparitionClue(0);
      cluesState.updateDevilFruitClue(0);
    } else {
      // If not found decrease the tries for each clue
      cluesState.updateFirstApparitionClue(cluesState.firstApparitionClue - 1);
      cluesState.updateDevilFruitClue(cluesState.devilFruitClue - 1);
    }
    // Increase number of tries
    gameState.updateNumTries(gameState.numTries + 1);
  };

  return <SearchingNames onSubmitClick={onSubmitClick} gameState={gameState} />;
}

export default ClassicSearchingNames;

import SearchingNames from '../../UI/SearchingNames';
import { objectComparison } from '../../../lib/utilities';

function DevilFruitSearchingNames({ gameState, cluesState }) {
  // Function to handle submit when hitting enter (or submit button) while searching for character
  const onSubmitClick = (item) => {
    var fruit_answers = JSON.parse(localStorage.getItem('fruit_answers'));
    console.log(fruit_answers);
    if (fruit_answers === null) {
      fruit_answers = [];
    }
    fruit_answers.push(item.char_name);
    console.log(fruit_answers);
    localStorage.setItem('fruit_answers', JSON.stringify(fruit_answers));

    // Close searching bar when submitting and also clear inpupt
    gameState.updateSearchingNames([]);
    gameState.updateInputName('');

    // Remove submitted character from available characters
    var tempAvailableChars = [...gameState.availableCharacters];
    tempAvailableChars.splice(
      tempAvailableChars.findIndex((obj) => obj.char_name === item.char_name),
      1
    );

    // Update characters selected
    gameState.updateAvailableCharacters(tempAvailableChars);
    console.log(item);
    var temp = gameState.charactersSelected;
    temp.push(item);
    console.log(temp);
    console.log(gameState.todaysChar);
    gameState.updateCharactersSelected(temp);

    // Check if found character
    if (objectComparison(item, gameState.todaysChar)) {
      gameState.updateFoundChar(true);
      localStorage.setItem('fruit_found', true);
      console.log('FOUND');

      // Enable clues when character is found
      cluesState.updateTypeClue(0);
      cluesState.updateExplanationClue(0);
      cluesState.updateTranslateClue(0);
    } else {
      // If not found decrease the tries for each clue
      cluesState.updateTypeClue(cluesState.typeClue - 1);
      cluesState.updateExplanationClue(cluesState.explanationClue - 1);
      cluesState.updateTranslateClue(cluesState.translateClue - 1);
    }
    // Increase number of tries
    gameState.updateNumTries(gameState.numTries + 1);
  };

  return <SearchingNames onSubmitClick={onSubmitClick} gameState={gameState} />;
}

export default DevilFruitSearchingNames;

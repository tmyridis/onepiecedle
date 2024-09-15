import SearchInput from '../../UI/SearchInput';
import { objectComparison } from '../../../lib/utilities';

function DevilFruitSearchInput({ gameState, cluesState }) {
  // Function to handle submit when hitting enter (or submit button) while searching for character
  const onSubmitInput = (e) => {
    e.preventDefault();
    console.log(gameState.inputName);

    var fruit_answers = JSON.parse(localStorage.getItem('fruit_answers'));
    console.log(fruit_answers);
    if (fruit_answers === null) {
      fruit_answers = [];
    }
    var item = '';

    var temp = gameState.charactersSelected;
    console.log(gameState.availableCharacters);
    for (let char of gameState.availableCharacters) {
      if (
        char.char_name.toLowerCase().includes(gameState.inputName.toLowerCase())
      ) {
        console.log(char);
        temp.push(char);
        item = char;
        fruit_answers.push(char.char_name);
        break;
      }
    }
    // Close searching bar when submitting and also clear input
    gameState.updateSearchingNames([]);
    gameState.updateInputName('');

    // If character input does not exist while submitting => do not do any other activity => close no character found modal
    if (item === '') {
      gameState.updateNoCharacterFound(false);
      return;
    }
    console.log(fruit_answers);
    localStorage.setItem('fruit_answers', JSON.stringify(fruit_answers));

    // Remove submitted character from available characters
    var tempAvailableChars = [...gameState.availableCharacters];
    tempAvailableChars.splice(
      tempAvailableChars.findIndex((obj) => obj.char_name === item.char_name),
      1
    );
    gameState.updateAvailableCharacters(tempAvailableChars);

    console.log(temp);
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

  return <SearchInput gameState={gameState} onSubmitInput={onSubmitInput} />;
}

export default DevilFruitSearchInput;

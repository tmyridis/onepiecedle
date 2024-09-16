import SearchInput from '../../UI/SearchInput';
import { objectComparison } from '../../../lib/utilities';
function ClassicSearchInput({ gameState, cluesState }) {
  // Function to handle submit when hitting enter (or submit button) while searching for character
  const onSubmitInput = (e) => {
    e.preventDefault();
    console.log(gameState.inputName);
    // Set color indicators to show only after first try
    if (gameState.numTries === 0) {
      gameState.updateColorIndicators(true);
    }

    var classic_answers = JSON.parse(localStorage.getItem('classic_answers'));
    console.log(classic_answers);
    if (classic_answers === null) {
      classic_answers = [];
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
        classic_answers.push(char.char_name);
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
    console.log(classic_answers);
    localStorage.setItem('classic_answers', JSON.stringify(classic_answers));

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
      // localStorage.setItem('classic_found', true);
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

  return <SearchInput gameState={gameState} onSubmitInput={onSubmitInput} />;
}

export default ClassicSearchInput;

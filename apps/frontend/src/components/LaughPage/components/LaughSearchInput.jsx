import SearchInput from '../../UI/SearchInput';
import { objectComparison } from '../../../lib/utilities';

function LaughSearchInput({ gameState, cluesState }) {
  // Function to handle submit when hitting enter (or submit button) while searching for character
  const onSubmitInput = (e) => {
    e.preventDefault();
    console.log(gameState.inputName);

    var laugh_answers = JSON.parse(localStorage.getItem('laugh_answers'));
    console.log(laugh_answers);
    if (laugh_answers === null) {
      laugh_answers = [];
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
        laugh_answers.push(char.char_name);
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
    console.log(laugh_answers);
    localStorage.setItem('laugh_answers', JSON.stringify(laugh_answers));

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
      localStorage.setItem('laugh_found', true);
      console.log('FOUND');

      // Enable clues when character is found
      cluesState.updateOriginClue(0);
      cluesState.updateAffiliationClue(0);
    } else {
      cluesState.updateOriginClue(cluesState.originClue - 1);
      cluesState.updateAffiliationClue(cluesState.affiliationClue - 1);
    }
    // Increase number of tries
    gameState.updateNumTries(gameState.numTries + 1);
  };
  return <SearchInput onSubmitInput={onSubmitInput} gameState={gameState} />;
}

export default LaughSearchInput;

import SearchInput from '../../UI/SearchInput';
import { objectComparison } from '../../../lib/utilities';
function WantedSearchInput({ gameState, cluesState }) {
  // Function to handle submit when hitting enter (or submit button) while searching for character
  const onSubmitInput = (e) => {
    e.preventDefault();
    console.log(gameState.inputName);

    var wanted_answers = JSON.parse(localStorage.getItem('wanted_answers'));
    console.log(wanted_answers);
    if (wanted_answers === null) {
      wanted_answers = [];
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
        wanted_answers.push(char.char_name);
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
    console.log(wanted_answers);
    localStorage.setItem('wanted_answers', JSON.stringify(wanted_answers));

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
      localStorage.setItem('wanted_found', true);
      console.log('FOUND');

      // Enable clues when character is found
      cluesState.updateBountyClue(0);
    } else {
      // If not found decrease the tries for each clue
      cluesState.updateBountyClue(cluesState.bountyClue - 1);
    }
    // Increase number of tries
    gameState.updateNumTries(gameState.numTries + 1);
    gameState.updateBlurPixels(gameState.blurPixels + 1);
  };
  return <SearchInput onSubmitInput={onSubmitInput} gameState={gameState} />;
}
export default WantedSearchInput;

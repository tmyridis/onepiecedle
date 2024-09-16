import SearchingNames from '../../UI/SearchingNames';
import { objectComparison } from '../../../lib/utilities';

function WantedSearchingNames({ gameState, cluesState }) {
  // Function to handle submit when choosing a character from the option list
  const onSubmitClick = (item) => {
    var wanted_answers = JSON.parse(localStorage.getItem('wanted_answers'));
    console.log(wanted_answers);
    if (wanted_answers === null) {
      wanted_answers = [];
    }
    wanted_answers.push(item.char_name);
    console.log(wanted_answers);
    localStorage.setItem('wanted_answers', JSON.stringify(wanted_answers));

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
    console.log(objectComparison(item, gameState.todaysChar));
    if (objectComparison(item, gameState.todaysChar)) {
      gameState.updateFoundChar(true);
      // localStorage.setItem('wanted_found', true);
      console.log('FOUND');

      cluesState.updateBountyClue(0);
    } else {
      cluesState.updateBountyClue(cluesState.bountyClue - 1);
    }

    // Increase number of tries and decrease the blur effect
    gameState.updateNumTries(gameState.numTries + 1);
    gameState.updateBlurPixels(gameState.blurPixels - 1);
  };
  return <SearchingNames onSubmitClick={onSubmitClick} gameState={gameState} />;
}

export default WantedSearchingNames;

import SearchingNames from '../../UI/SearchingNames';
import { objectComparison } from '../../../lib/utilities';

function LaughSearchingNames({ gameState, cluesState }) {
  // Function to handle submit when choosing a character from the option list
  const onSubmitClick = (item) => {
    var laugh_answers = JSON.parse(localStorage.getItem('laugh_answers'));
    console.log(laugh_answers);
    if (laugh_answers === null) {
      laugh_answers = [];
    }
    laugh_answers.push(item.char_name);
    console.log(laugh_answers);
    localStorage.setItem('laugh_answers', JSON.stringify(laugh_answers));

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
      // localStorage.setItem('laugh_found', true);
      console.log('FOUND');

      cluesState.updateOriginClue(0);
      cluesState.updateAffiliationClue(0);
    } else {
      cluesState.updateOriginClue(cluesState.originClue - 1);
      cluesState.updateAffiliationClue(cluesState.affiliationClue - 1);
    }

    // Increase number of tries and decrease the blur effect
    gameState.updateNumTries(gameState.numTries + 1);
  };
  return <SearchingNames onSubmitClick={onSubmitClick} gameState={gameState} />;
}

export default LaughSearchingNames;

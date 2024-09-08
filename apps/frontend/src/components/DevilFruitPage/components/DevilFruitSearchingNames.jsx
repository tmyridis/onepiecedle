import SearchingNames from "../../UI/SearchingNames";
import { objectComparison } from "../../../lib/utilities";

function DevilFruitSearchingNames(props) {
  // Function to handle submit when hitting enter (or submit button) while searching for character
  const onSubmitClick = (item) => {
    var fruit_answers = JSON.parse(localStorage.getItem("fruit_answers"));
    console.log(fruit_answers);
    if (fruit_answers === null) {
      fruit_answers = [];
    }
    fruit_answers.push(item.char_name);
    console.log(fruit_answers);
    localStorage.setItem("fruit_answers", JSON.stringify(fruit_answers));

    // Close searching bar when submitting and also clear inpupt
    props.setSearchingNames([]);
    props.setInputName("");

    // Remove submitted character from available characters
    var tempAvailableChars = [...props.availableCharacters];
    tempAvailableChars.splice(
      tempAvailableChars.findIndex((obj) => obj.char_name === item.char_name),
      1
    );

    // Update characters selected
    props.setAvailableCharacters(tempAvailableChars);
    console.log(item);
    var temp = props.charactersSelected;
    temp.push(item);
    console.log(temp);
    console.log(props.todaysChar);
    props.setCharactersSelected(temp);

    // Check if found character
    if (objectComparison(item, props.todaysChar)) {
      props.setFoundChar(true);
      localStorage.setItem("fruit_found", true);
      console.log("FOUND");

      // Enable clues when character is found
      props.setTypeClue(0);
      props.setExplanationClue(0);
      props.setTranslateClue(0);
    } else {
      // If not found decrease the tries for each clue
      props.setTypeClue(props.typeClue - 1);
      props.setExplanationClue(props.explanationClue - 1);
      props.setTranslateClue(props.translateClue - 1);
    }
    // Increase number of tries
    props.setNumTries(props.numTries + 1);
  };

  return (
    <SearchingNames
      onSubmitClick={onSubmitClick}
      searchingNames={props.searchingNames}
      foundChar={props.foundChar}
      noCharacterFound={props.noCharacterFound}
    />
  );
}

export default DevilFruitSearchingNames;

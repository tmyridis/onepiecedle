import SearchingNames from "../../UI/SearchingNames";
import { objectComparison } from "../../../lib/utilities";

function ClassicSearchingNames(props) {
  const onSubmitClick = (item) => {
    // Set color indicators to show only after first try
    if (props.numTries === 0) {
      props.setColorIndicators(true);
    }
    var classic_answers = JSON.parse(localStorage.getItem("classic_answers"));
    console.log(classic_answers);
    if (classic_answers === null) {
      classic_answers = [];
    }
    classic_answers.push(item.char_name);
    console.log(classic_answers);
    localStorage.setItem("classic_answers", JSON.stringify(classic_answers));

    // Close searching bar when submitting and also clear input
    props.setSearchingNames([]);
    props.setInputName("");

    // Remove submitted character from available characters
    var tempAvailableChars = [...props.availableCharacters];
    tempAvailableChars.splice(
      tempAvailableChars.findIndex((obj) => obj.char_name === item.char_name),
      1
    );
    props.setAvailableCharacters(tempAvailableChars);

    console.log(item);

    // Update characters selected
    var temp = props.charactersSelected;
    temp.push(item);
    props.setCharactersSelected(temp);
    console.log(objectComparison(item, props.todaysChar));

    // Check if found character
    if (objectComparison(item, props.todaysChar)) {
      props.setFoundChar(true);
      localStorage.setItem("classic_found", true);
      console.log("FOUND");

      // Enable clues when character is found
      props.setFirstApparitionClue(0);
      props.setDevilFruitClue(0);
    } else {
      // If not found decrease the tries for each clue
      props.setFirstApparitionClue(props.firstApparitionClue - 1);
      props.setDevilFruitClue(props.devilFruitClue - 1);
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

export default ClassicSearchingNames;

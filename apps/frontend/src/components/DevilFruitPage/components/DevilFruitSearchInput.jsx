import SearchInput from "../../UI/SearchInput";
import { objectComparison } from "../../../lib/utilities";

function DevilFruitSearchInput(props) {
  // Function to handle submit when hitting enter (or submit button) while searching for character
  const onSubmitInput = (e) => {
    e.preventDefault();
    console.log(props.inputName);

    var fruit_answers = JSON.parse(localStorage.getItem("fruit_answers"));
    console.log(fruit_answers);
    if (fruit_answers === null) {
      fruit_answers = [];
    }
    var item = "";

    var temp = props.charactersSelected;
    console.log(props.availableCharacters);
    for (let char of props.availableCharacters) {
      if (
        char.char_name.toLowerCase().includes(props.inputName.toLowerCase())
      ) {
        console.log(char);
        temp.push(char);
        item = char;
        fruit_answers.push(char.char_name);
        break;
      }
    }
    // Close searching bar when submitting and also clear input
    props.setSearchingNames([]);
    props.setInputName("");

    // If character input does not exist while submitting => do not do any other activity => close no character found modal
    if (item === "") {
      props.setNoCharacterFound(false);
      return;
    }
    console.log(fruit_answers);
    localStorage.setItem("fruit_answers", JSON.stringify(fruit_answers));

    // Remove submitted character from available characters
    var tempAvailableChars = [...props.availableCharacters];
    tempAvailableChars.splice(
      tempAvailableChars.findIndex((obj) => obj.char_name === item.char_name),
      1
    );
    props.setAvailableCharacters(tempAvailableChars);

    console.log(temp);
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
    <SearchInput
      onSubmitInput={onSubmitInput}
      availableCharacters={props.availableCharacters}
      searchingNames={props.searchingNames}
      setNoCharacterFound={props.setNoCharacterFound}
      inputName={props.inputName}
      setInputName={props.setInputName}
      setSearchingNames={props.setSearchingNames}
    />
  );
}

export default DevilFruitSearchInput;

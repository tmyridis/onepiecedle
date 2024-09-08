import SearchInput from "../../UI/SearchInput";
import { objectComparison } from "../../../lib/utilities";
function ClassicSearchInput(props) {
  // Function to handle submit when hitting enter (or submit button) while searching for character
  const onSubmitInput = (e) => {
    e.preventDefault();
    console.log(props.inputName);
    // Set color indicators to show only after first try
    if (props.numTries === 0) {
      props.setColorIndicators(true);
    }

    var classic_answers = JSON.parse(localStorage.getItem("classic_answers"));
    console.log(classic_answers);
    if (classic_answers === null) {
      classic_answers = [];
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
        classic_answers.push(char.char_name);
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
    console.log(classic_answers);
    localStorage.setItem("classic_answers", JSON.stringify(classic_answers));

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

export default ClassicSearchInput;

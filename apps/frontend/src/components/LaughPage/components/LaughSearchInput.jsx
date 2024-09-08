import SearchInput from "../../UI/SearchInput";
import { objectComparison } from "../../../lib/utilities";

function LaughSearchInput(props) {
  // Function to handle submit when hitting enter (or submit button) while searching for character
  const onSubmitInput = (e) => {
    e.preventDefault();
    console.log(props.inputName);

    var laugh_answers = JSON.parse(localStorage.getItem("laugh_answers"));
    console.log(laugh_answers);
    if (laugh_answers === null) {
      laugh_answers = [];
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
        laugh_answers.push(char.char_name);
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
    console.log(laugh_answers);
    localStorage.setItem("laugh_answers", JSON.stringify(laugh_answers));

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
      localStorage.setItem("laugh_found", true);
      console.log("FOUND");

      // Enable clues when character is found
      props.setOriginClue(0);
      props.setAffiliationClue(0);
    } else {
      props.setOriginClue(props.originClue - 1);
      props.setAffiliationClue(props.affiliationClue - 1);
    }
    // Increase number of tries
    props.setNumTries(props.numTries + 1);
  };
  return (
    <SearchInput
      onSubmitInput={onSubmitInput}
      availableCharacters={props.availableCharacters}
      setNoCharacterFound={props.setNoCharacterFound}
      inputName={props.inputName}
      setInputName={props.setInputName}
      setSearchingNames={props.setSearchingNames}
    />
  );
}

export default LaughSearchInput;

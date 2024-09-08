import SearchInput from "../../UI/SearchInput";
import { objectComparison } from "../../../lib/utilities";
function WantedSearchInput(props) {
  // Function to handle submit when hitting enter (or submit button) while searching for character
  const onSubmitInput = (e) => {
    e.preventDefault();
    console.log(props.inputName);

    var wanted_answers = JSON.parse(localStorage.getItem("wanted_answers"));
    console.log(wanted_answers);
    if (wanted_answers === null) {
      wanted_answers = [];
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
        wanted_answers.push(char.char_name);
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
    console.log(wanted_answers);
    localStorage.setItem("wanted_answers", JSON.stringify(wanted_answers));

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
      localStorage.setItem("wanted_found", true);
      console.log("FOUND");

      // Enable clues when character is found
      props.setBountyClue(0);
    } else {
      // If not found decrease the tries for each clue
      props.setBountyClue(props.bountyClue - 1);
    }
    // Increase number of tries
    props.setNumTries(props.numTries + 1);
    props.setBlurPixels((blurPixels) => blurPixels - 1);
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
export default WantedSearchInput;

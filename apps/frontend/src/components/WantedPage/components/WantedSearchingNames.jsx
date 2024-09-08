import SearchingNames from "../../UI/SearchingNames";
import { objectComparison } from "../../../lib/utilities";

function WantedSearchingNames(props) {
  // Function to handle submit when choosing a character from the option list
  const onSubmitClick = (item) => {
    var wanted_answers = JSON.parse(localStorage.getItem("wanted_answers"));
    console.log(wanted_answers);
    if (wanted_answers === null) {
      wanted_answers = [];
    }
    wanted_answers.push(item.char_name);
    console.log(wanted_answers);
    localStorage.setItem("wanted_answers", JSON.stringify(wanted_answers));

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
    console.log(objectComparison(item, props.todaysChar));
    if (objectComparison(item, props.todaysChar)) {
      setFoundChar(true);
      localStorage.setItem("wanted_found", true);
      console.log("FOUND");

      props.setBountyClue(0);
    } else {
      props.setBountyClue(props.bountyClue - 1);
    }

    // Increase number of tries and decrease the blur effect
    props.setNumTries(props.numTries + 1);
    props.setBlurPixels((blurPixels) => blurPixels - 1);
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

export default WantedSearchingNames;

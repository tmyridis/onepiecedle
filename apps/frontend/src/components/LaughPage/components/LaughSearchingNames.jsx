import SearchingNames from "../../UI/SearchingNames";
import { objectComparison } from "../../../lib/utilities";

function LaughSearchingNames(props) {
  // Function to handle submit when choosing a character from the option list
  const onSubmitClick = (item) => {
    var laugh_answers = JSON.parse(localStorage.getItem("laugh_answers"));
    console.log(laugh_answers);
    if (laugh_answers === null) {
      laugh_answers = [];
    }
    laugh_answers.push(item.char_name);
    console.log(laugh_answers);
    localStorage.setItem("laugh_answers", JSON.stringify(laugh_answers));

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
      props.setFoundChar(true);
      localStorage.setItem("laugh_found", true);
      console.log("FOUND");

      props.setOriginClue(0);
      props.setAffiliationClue(0);
    } else {
      props.setOriginClue(props.originClue - 1);
      props.setAffiliationClue(props.affiliationClue - 1);
    }

    // Increase number of tries and decrease the blur effect
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

export default LaughSearchingNames;

import { useEffect, useState } from "react";
import Navbar from "../UI/Navbar";
import EndAnswers from "../UI/EndAnswers";
import { getTriesFromAnswers, subtractTillZero } from "../../lib/utilities";

import {
  fetchYesterdaysChar,
  fetchTodaysChar,
  fetchWantedCharacters,
} from "./hooks";
import WantedQuestionTab from "./components/WantedQuestionTab";
import WantedSearchInput from "./components/WantedSearchInput";
import WantedSearchingNames from "./components/WantedSearchingNames";
import NamesList from "../UI/NamesList";

function WantedPage() {
  const [numTries, setNumTries] = useState(
    getTriesFromAnswers("wanted_answers")
  );
  const [inputName, setInputName] = useState("");
  const [searchingNames, setSearchingNames] = useState([]);
  const [availableCharacters, setAvailableCharacters] = useState([]);
  const [noCharacterFound, setNoCharacterFound] = useState(false);
  const [charactersSelected, setCharactersSelected] = useState([]);

  const [foundChar, setFoundChar] = useState(
    localStorage.getItem("wanted_found")
      ? localStorage.getItem("wanted_found")
      : false
  );
  const [blurPixels, setBlurPixels] = useState(
    subtractTillZero(7.5, getTriesFromAnswers("wanted_answers"))
  );
  const [blurDisplay, setBlurDisplay] = useState(true);
  const [displayColors, setDisplayColors] = useState(false);

  const [todaysChar, setTodaysChar] = useState();

  const [bountyClue, setBountyClue] = useState(
    localStorage.getItem("wanted_found")
      ? 0
      : subtractTillZero(10, getTriesFromAnswers("wanted_answers"))
  );

  const [bountyClueShow, setBountyClueShow] = useState(false);

  const [yesterdaysChar, setYesterdaysChar] = useState();

  useEffect(() => {
    fetchWantedCharacters(
      charactersSelected,
      setAvailableCharacters,
      setCharactersSelected
    );
    fetchTodaysChar(setTodaysChar);
    fetchYesterdaysChar(setYesterdaysChar);
  }, []);

  useEffect(() => {
    setTimeout(function () {
      const releventDiv = document.getElementById("foundChar");
      if (releventDiv) {
        releventDiv.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }, 2000);
  }, [foundChar]);

  return (
    <Navbar>
      <WantedQuestionTab
        todaysChar={todaysChar}
        blurPixels={blurPixels}
        displayColors={displayColors}
        numTries={numTries}
        bountyClue={bountyClue}
        bountyClueShow={bountyClueShow}
        setBountyClueShow={setBountyClueShow}
        blurDisplay={blurDisplay}
        setDisplayColors={setDisplayColors}
        setBlurPixels={setBlurPixels}
        setBlurDisplay={setBlurDisplay}
      />
      {!foundChar && todaysChar !== undefined && (
        <WantedSearchInput
          charactersSelected={charactersSelected}
          availableCharacters={availableCharacters}
          setAvailableCharacters={setAvailableCharacters}
          setCharactersSelected={setCharactersSelected}
          inputName={inputName}
          setSearchingNames={setSearchingNames}
          searchingNames={searchingNames}
          setInputName={setInputName}
          setNoCharacterFound={setNoCharacterFound}
          todaysChar={todaysChar}
          bountyClue={bountyClue}
          setBountyClue={setBountyClue}
          numTries={numTries}
          setNumTries={setNumTries}
          setBlurPixels={setBlurPixels}
          setFoundChar={setFoundChar}
        />
      )}
      {todaysChar !== undefined && (
        <div className="relative">
          <WantedSearchingNames
            charactersSelected={charactersSelected}
            availableCharacters={availableCharacters}
            setAvailableCharacters={setAvailableCharacters}
            setCharactersSelected={setCharactersSelected}
            setSearchingNames={setSearchingNames}
            searchingNames={searchingNames}
            setInputName={setInputName}
            todaysChar={todaysChar}
            bountyClue={bountyClue}
            setBountyClue={setBountyClue}
            numTries={numTries}
            setNumTries={setNumTries}
            setBlurPixels={setBlurPixels}
            setFoundChar={setFoundChar}
            noCharacterFound={noCharacterFound}
          />
          {charactersSelected.length > 0 && (
            <NamesList
              charactersSelected={charactersSelected}
              todaysChar={todaysChar}
            />
          )}
          {foundChar && (
            <EndAnswers
              todaysChar={todaysChar}
              numTries={numTries}
              to={"/laugh"}
              type={"wanted"}
            />
          )}
          {yesterdaysChar !== undefined && (
            <div className="flex justify-center items-center font-black text-xl pt-20 mb-20">
              <div>Yesterday's character was &nbsp;</div>
              <div className="text-orange">{yesterdaysChar}</div>
            </div>
          )}
          <div className="h-28"></div>
        </div>
      )}
    </Navbar>
  );
}

export default WantedPage;

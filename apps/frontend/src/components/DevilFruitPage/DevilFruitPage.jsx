import { useEffect, useState } from "react";
import Navbar from "../UI/Navbar";
import EndAnswers from "../UI/EndAnswers";
import { getTriesFromAnswers, subtractTillZero } from "../../lib/utilities";
import DevilFruitQuestionTab from "./components/DevilFruitQuestionTab";
import DevilFruitSearchInput from "./components/DevilFruitSearchInput";
import DevilFruitSearchingNames from "./components/DevilFruitSearchingNames";
import NamesList from "../UI/NamesList";
import {
  fetchFruitCharacters,
  fetchTodaysChar,
  fetchYesterdaysChar,
} from "./hooks";

function DevilFruitPage() {
  const [numTries, setNumTries] = useState(
    getTriesFromAnswers("fruit_answers")
  );
  const [inputName, setInputName] = useState("");
  const [searchingNames, setSearchingNames] = useState([]);
  const [availableCharacters, setAvailableCharacters] = useState([]);
  const [noCharacterFound, setNoCharacterFound] = useState(false);
  const [charactersSelected, setCharactersSelected] = useState([]);
  const [foundChar, setFoundChar] = useState(
    localStorage.getItem("fruit_found")
      ? localStorage.getItem("fruit_found")
      : false
  );

  const [todaysChar, setTodaysChar] = useState();
  const [yesterdaysChar, setYesterdaysChar] = useState();

  const [typeClue, setTypeClue] = useState(
    localStorage.getItem("fruit_found")
      ? 0
      : subtractTillZero(4, getTriesFromAnswers("fruit_answers"))
  );
  const [translateClue, setTranslateClue] = useState(
    localStorage.getItem("fruit_found")
      ? 0
      : subtractTillZero(7, getTriesFromAnswers("fruit_answers"))
  );
  const [explanationClue, setExplanationClue] = useState(
    localStorage.getItem("fruit_found")
      ? 0
      : subtractTillZero(13, getTriesFromAnswers("fruit_answers"))
  );

  const [typeClueShow, setTypeClueShow] = useState(false);
  const [translateClueShow, setTranslateClueShow] = useState(false);
  const [explanationClueShow, setExplanationClueShow] = useState(false);

  useEffect(() => {
    fetchFruitCharacters(
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
      <DevilFruitQuestionTab
        todaysChar={todaysChar}
        typeClue={typeClue}
        translateClue={translateClue}
        explanationClue={explanationClue}
        typeClueShow={typeClueShow}
        translateClueShow={translateClueShow}
        explanationClueShow={explanationClueShow}
        setTranslateClueShow={setTranslateClueShow}
        setTypeClueShow={setTypeClueShow}
        setExplanationClueShow={setExplanationClueShow}
      />
      {!foundChar && todaysChar !== undefined && (
        <DevilFruitSearchInput
          inputName={inputName}
          numTries={numTries}
          setNumTries={setNumTries}
          charactersSelected={charactersSelected}
          setCharactersSelected={setCharactersSelected}
          availableCharacters={availableCharacters}
          setAvailableCharacters={setAvailableCharacters}
          setSearchingNames={setSearchingNames}
          setInputName={setInputName}
          setNoCharacterFound={setNoCharacterFound}
          todaysChar={todaysChar}
          typeClue={typeClue}
          translateClue={translateClue}
          explanationClue={explanationClue}
          setTypeClue={setTypeClue}
          setTranslateClue={setTranslateClue}
          setExplanationClue={setExplanationClue}
          setFoundChar={setFoundChar}
        />
      )}
      {todaysChar !== undefined && (
        <div className="relative">
          <DevilFruitSearchingNames
            numTries={numTries}
            setNumTries={setNumTries}
            charactersSelected={charactersSelected}
            setCharactersSelected={setCharactersSelected}
            availableCharacters={availableCharacters}
            setAvailableCharacters={setAvailableCharacters}
            setSearchingNames={setSearchingNames}
            searchingNames={searchingNames}
            setInputName={setInputName}
            todaysChar={todaysChar}
            typeClue={typeClue}
            translateClue={translateClue}
            explanationClue={explanationClue}
            setTypeClue={setTypeClue}
            setTranslateClue={setTranslateClue}
            setExplanationClue={setExplanationClue}
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
              to={"/wanted"}
            />
          )}
          {yesterdaysChar !== undefined && (
            <div className="flex justify-center items-center font-black text-xl pt-20">
              <div>Yesterday's character was &nbsp;</div>
              <div className="text-orange">{yesterdaysChar}</div>
            </div>
          )}
          <div className="mb-40"></div>
        </div>
      )}
    </Navbar>
  );
}

export default DevilFruitPage;

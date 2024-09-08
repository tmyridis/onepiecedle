import { useEffect, useRef, useState } from "react";
import Navbar from "../UI/Navbar";
import EndAnswers from "../UI/EndAnswers";
import { getTriesFromAnswers, subtractTillZero } from "../../lib/utilities";

import {
  fetchLaughCharacters,
  fetchTodaysChar,
  fetchYesterdaysChar,
} from "./hooks";
import LaughQuestionTab from "./components/LaughQuestionTab";
import LaughSearchInput from "./components/LaughSearchInput";
import LaughSearchingNames from "./components/LaughSearchingNames";
import NamesList from "../UI/NamesList";

function LaughPage() {
  const [numTries, setNumTries] = useState(
    getTriesFromAnswers("laugh_answers")
  );
  const [inputName, setInputName] = useState("");
  const [searchingNames, setSearchingNames] = useState([]);
  const [availableCharacters, setAvailableCharacters] = useState([]);
  const [noCharacterFound, setNoCharacterFound] = useState(false);
  const [charactersSelected, setCharactersSelected] = useState([]);

  const [foundChar, setFoundChar] = useState(
    localStorage.getItem("laugh_found")
      ? localStorage.getItem("laugh_found")
      : false
  );

  const [todaysChar, setTodaysChar] = useState();

  const [originClue, setOriginClue] = useState(
    localStorage.getItem("laugh_found")
      ? 0
      : subtractTillZero(4, getTriesFromAnswers("laugh_answers"))
  );
  const [affiliationClue, setAffiliationClue] = useState(
    localStorage.getItem("laugh_found")
      ? 0
      : subtractTillZero(9, getTriesFromAnswers("laugh_answers"))
  );

  const [originClueShow, setOriginClueShow] = useState(false);
  const [affiliationClueShow, setAffiliationClueShow] = useState(false);

  const [yesterdaysChar, setYesterdaysChar] = useState();

  const [isPlayingLaugh, setIsPlayingLaugh] = useState(false);
  const audioElement = useRef();

  const onPlayPauseEvent = () => {
    setIsPlayingLaugh(!isPlayingLaugh);
  };

  useEffect(() => {
    if (todaysChar !== undefined) {
      if (isPlayingLaugh) {
        audioElement.current.play();
      } else {
        audioElement.current.pause();
        audioElement.current.currentTime = 0;
      }
    }
  }, [isPlayingLaugh]);

  useEffect(() => {
    fetchLaughCharacters(
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
      <LaughQuestionTab
        originClue={originClue}
        originClueShow={originClueShow}
        setOriginClueShow={setOriginClueShow}
        affiliationClue={affiliationClue}
        affiliationClueShow={affiliationClueShow}
        setAffiliationClueShow={setAffiliationClueShow}
        todaysChar={todaysChar}
        isPlayingLaugh={isPlayingLaugh}
        onPlayPauseEvent={onPlayPauseEvent}
        audioElement={audioElement}
      />
      {!foundChar && todaysChar !== undefined && (
        <LaughSearchInput
          inputName={inputName}
          charactersSelected={charactersSelected}
          availableCharacters={availableCharacters}
          setAvailableCharacters={setAvailableCharacters}
          setCharactersSelected={setCharactersSelected}
          setSearchingNames={setSearchingNames}
          setInputName={setInputName}
          setNoCharacterFound={setNoCharacterFound}
          todaysChar={todaysChar}
          setOriginClue={setOriginClue}
          setAffiliationClue={setAffiliationClue}
          originClue={originClue}
          affiliationClue={affiliationClue}
          numTries={numTries}
          setNumTries={setNumTries}
          setFoundChar={setFoundChar}
        />
      )}
      {todaysChar !== undefined && (
        <div className="relative">
          <LaughSearchingNames
            inputName={inputName}
            charactersSelected={charactersSelected}
            availableCharacters={availableCharacters}
            setAvailableCharacters={setAvailableCharacters}
            setCharactersSelected={setCharactersSelected}
            setSearchingNames={setSearchingNames}
            searchingNames={searchingNames}
            setInputName={setInputName}
            noCharacterFound={noCharacterFound}
            todaysChar={todaysChar}
            setOriginClue={setOriginClue}
            setAffiliationClue={setAffiliationClue}
            originClue={originClue}
            affiliationClue={affiliationClue}
            numTries={numTries}
            setNumTries={setNumTries}
            setFoundChar={setFoundChar}
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
              to={"/classic"}
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

export default LaughPage;

import { useEffect, useState } from "react";
import Navbar from "../UI/Navbar";
import EndAnswers from "../UI/EndAnswers";
import { getTriesFromAnswers, subtractTillZero } from "../../lib/utilities";
import ClassicSearchInput from "./components/ClassicSearchInput";
import ClassicSearchingNames from "./components/ClassicSearchingNames";
import ClassicQuestionTab from "./components/ClassicQuestionTab";
import CharacterTable from "./components/CharacterTable";
import ColorIndicators from "./components/ColorIndicators";
import {
  fetchTodaysChar,
  fetchArcs,
  fetchYesterdaysChar,
  fetchClassicCharacters,
} from "./hooks";

function ClassicPage() {
  const [searchingNames, setSearchingNames] = useState([]);
  const [availableCharacters, setAvailableCharacters] = useState([]);
  const [inputName, setInputName] = useState("");
  const [noCharacterFound, setNoCharacterFound] = useState(false);
  const [charactersSelected, setCharactersSelected] = useState([]);
  const [todaysChar, setTodaysChar] = useState();
  const [yesterdaysChar, setYesterdaysChar] = useState();
  const [foundChar, setFoundChar] = useState(
    localStorage.getItem("classic_found")
      ? localStorage.getItem("classic_found")
      : false
  );
  const [arcs, setArcs] = useState([]);
  const [numTries, setNumTries] = useState(
    getTriesFromAnswers("classic_answers")
  );

  const [firstApparitionClue, setFirstApparitionClue] = useState(
    localStorage.getItem("classic_found")
      ? 0
      : subtractTillZero(6, getTriesFromAnswers("classic_answers"))
  );
  const [devilFruitClue, setDevilFruitClue] = useState(
    localStorage.getItem("classic_found")
      ? 0
      : subtractTillZero(9, getTriesFromAnswers("classic_answers"))
  );

  const [firstApparitionClueShow, setFirstApparitionClueShow] = useState(false);
  const [devilFruitClueShow, setDevilFruitClueShow] = useState(false);

  const [colorIndicators, setColorIndicators] = useState(false);

  const [infiniteMode, setInfiniteMode] = useState(
    localStorage.getItem("infinite") !== null
      ? JSON.parse(localStorage.getItem("infinite"))
      : false
  );

  const fetchRandomChar = async () => {
    try {
      await fetch("http://localhost:5000/classic/random_char")
        .then((result) => result.json())
        .then((char) => {
          console.log(char);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (infiniteMode === true) {
      fetchRandomChar();
    }
  }, [infiniteMode]);

  useEffect(() => {
    fetchClassicCharacters(
      charactersSelected,
      setAvailableCharacters,
      setCharactersSelected
    );
    fetchArcs(setArcs);
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
    <Navbar infiniteMode={infiniteMode} setInfiniteMode={setInfiniteMode}>
      <ClassicQuestionTab
        numTries={numTries}
        todaysChar={todaysChar}
        firstApparitionClue={firstApparitionClue}
        setFirstApparitionClueShow={setFirstApparitionClueShow}
        firstApparitionClueShow={firstApparitionClueShow}
        devilFruitClue={devilFruitClue}
        setDevilFruitClueShow={setDevilFruitClueShow}
        devilFruitClueShow={devilFruitClueShow}
      />
      {!foundChar && todaysChar !== undefined && (
        <ClassicSearchInput
          inputName={inputName}
          numTries={numTries}
          setNumTries={setNumTries}
          setColorIndicators={setColorIndicators}
          charactersSelected={charactersSelected}
          setCharactersSelected={setCharactersSelected}
          availableCharacters={availableCharacters}
          setAvailableCharacters={setAvailableCharacters}
          setSearchingNames={setSearchingNames}
          setInputName={setInputName}
          setNoCharacterFound={setNoCharacterFound}
          todaysChar={todaysChar}
          setFirstApparitionClue={setFirstApparitionClue}
          setDevilFruitClue={setDevilFruitClue}
          firstApparitionClue={firstApparitionClue}
          devilFruitClue={devilFruitClue}
          setFoundChar={setFoundChar}
        />
      )}
      {todaysChar !== undefined ? (
        <div className="relative">
          <ClassicSearchingNames
            numTries={numTries}
            setNumTries={setNumTries}
            setColorIndicators={setColorIndicators}
            charactersSelected={charactersSelected}
            setCharactersSelected={setCharactersSelected}
            availableCharacters={availableCharacters}
            setAvailableCharacters={setAvailableCharacters}
            setSearchingNames={setSearchingNames}
            searchingNames={searchingNames}
            setInputName={setInputName}
            todaysChar={todaysChar}
            setFirstApparitionClue={setFirstApparitionClue}
            setDevilFruitClue={setDevilFruitClue}
            firstApparitionClue={firstApparitionClue}
            devilFruitClue={devilFruitClue}
            setFoundChar={setFoundChar}
            noCharacterFound={noCharacterFound}
          />
          {charactersSelected.length > 0 && (
            <>
              <CharacterTable
                charactersSelected={charactersSelected}
                todaysChar={todaysChar}
                arcs={arcs}
              />
              {colorIndicators && (
                <ColorIndicators setColorIndicators={setColorIndicators} />
              )}
            </>
          )}
          {foundChar && (
            <EndAnswers
              todaysChar={todaysChar}
              numTries={numTries}
              to={"/devilFruit"}
            />
          )}
          {yesterdaysChar !== undefined && (
            <div className="flex justify-center items-center font-black text-xl pt-20 mb-20">
              <div>Yesterday's character was &nbsp;</div>
              <div className="text-orange">{yesterdaysChar}</div>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </Navbar>
  );
}

export default ClassicPage;

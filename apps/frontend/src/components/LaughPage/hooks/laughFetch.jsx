import {
  getFoundCharFromStorage,
  getTriesFromAnswers,
  subtractTillZero,
} from '../../../lib/utilities';

export const fetchLaughCharacters = async (
  charactersSelected,
  setAvailableCharacters,
  setCharactersSelected
) => {
  try {
    await fetch('http://localhost:5000/laugh/characters')
      .then((result) => result.json())
      .then((characters) => {
        // Get previous characters stored in local storage
        var laugh_answers = JSON.parse(localStorage.getItem('laugh_answers'));
        console.log(characters);

        // Remove characters that already had been stored in local storage from available characters
        var availableCharactersTemp = [...characters];
        // Also save characters that already have been choosed
        var charactersSelectedTemp = charactersSelected;

        if (laugh_answers !== null && laugh_answers.length > 0) {
          for (let answer of laugh_answers) {
            var index = availableCharactersTemp.findIndex((e) => {
              return e.char_name === answer;
            });
            console.log(availableCharactersTemp[index], index);
            availableCharactersTemp.splice(index, 1);
          }
          console.log(availableCharactersTemp);
          for (let answer of laugh_answers) {
            for (let i = 0; i < characters.length; i++) {
              if (answer === characters[i].char_name) {
                charactersSelectedTemp.push(characters[i]);
              }
            }
          }
        }

        setAvailableCharacters(availableCharactersTemp);
        setCharactersSelected(charactersSelectedTemp);
      });
  } catch (err) {
    console.log(err);
  }
};

// Function to fetch yesterdays random character
export const fetchYesterdaysChar = async (setYesterdaysChar) => {
  try {
    await fetch('http://localhost:5000/yesterdays_char')
      .then((result) => result.json())
      .then((char) => {
        console.log(char['laugh_char'].char_name);
        setYesterdaysChar(char['laugh_char'].char_name);
      });
  } catch (err) {
    console.log(err);
  }
};

// Function to fetch todays random character
export const fetchTodaysChar = async (
  setTodaysChar,
  setFoundChar,
  clearAll,
  cluesState
) => {
  try {
    await fetch('http://localhost:5000/laugh/todays_char')
      .then((result) => result.json())
      .then((json) => {
        console.log(json);
        setTodaysChar(json.character);

        // clear storage if json.clearStorage === true => first fetch for todays character
        if (json.clearStorage) {
          console.log('CLEARING');
          clearAll();
          cluesState.clearAll();
          localStorage.clear();
          return;
        }

        const foundChar = getFoundCharFromStorage(
          json.character.char_name,
          'laugh_answers'
        );
        console.log(foundChar);
        setFoundChar(foundChar);

        cluesState.updateOriginClue(
          foundChar
            ? 0
            : subtractTillZero(4, getTriesFromAnswers('laugh_answers'))
        );

        cluesState.updateAffiliationClue(
          foundChar
            ? 0
            : subtractTillZero(9, getTriesFromAnswers('laugh_answers'))
        );

        if (json.clearStorage) {
          localStorage.clear();
        }
      });
  } catch (err) {
    console.log(err);
  }
};

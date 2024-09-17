import {
  getFoundCharFromStorage,
  subtractTillZero,
  getTriesFromAnswers,
} from '../../../lib/utilities';

// Function to fetch all fruit available characters
export const fetchFruitCharacters = async (
  charactersSelected,
  setAvailableCharacters,
  setCharactersSelected
) => {
  try {
    await fetch('http://localhost:5000/fruit/characters')
      .then((result) => result.json())
      .then((characters) => {
        // Get previous characters stored in local storage
        var fruit_answers = JSON.parse(localStorage.getItem('fruit_answers'));
        console.log(characters);

        // Remove characters that already had been stored in local storage from available characters
        var availableCharactersTemp = [...characters];
        // Also save characters that already have been choosed
        var charactersSelectedTemp = charactersSelected;

        if (fruit_answers !== null && fruit_answers.length > 0) {
          for (let answer of fruit_answers) {
            var index = availableCharactersTemp.findIndex((e) => {
              return e.char_name === answer;
            });
            console.log(availableCharactersTemp[index], index);
            availableCharactersTemp.splice(index, 1);
          }
          console.log(availableCharactersTemp);
          for (let answer of fruit_answers) {
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

// Function to fetch todays random character
export const fetchTodaysChar = async (
  setTodaysChar,
  setFoundChar,
  cluesState
) => {
  try {
    await fetch('http://localhost:5000/fruit/todays_char')
      .then((result) => result.json())
      .then((json) => {
        console.log(json.character);
        setTodaysChar(json.character);
        const foundChar = getFoundCharFromStorage(
          json.character.char_name,
          'fruit_answers'
        );
        console.log(foundChar);
        setFoundChar(foundChar);

        cluesState.updateTypeClue(
          foundChar
            ? 0
            : subtractTillZero(4, getTriesFromAnswers('fruit_answers'))
        );

        cluesState.updateTranslateClue(
          foundChar
            ? 0
            : subtractTillZero(7, getTriesFromAnswers('fruit_answers'))
        );

        cluesState.updateExplanationClue(
          foundChar
            ? 0
            : subtractTillZero(13, getTriesFromAnswers('fruit_answers'))
        );

        if (json.clearStorage) {
          localStorage.clear();
        }
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
        console.log(char['fruit_char'].char_name);
        setYesterdaysChar(char['fruit_char'].char_name);
      });
  } catch (err) {
    console.log(err);
  }
};

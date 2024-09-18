import {
  getFoundCharFromStorage,
  getTriesFromAnswers,
  subtractTillZero,
} from '../../../lib/utilities';

export const fetchWantedCharacters = async (
  charactersSelected,
  setAvailableCharacters,
  setCharactersSelected
) => {
  try {
    await fetch('http://localhost:5000/wanted/characters')
      .then((result) => result.json())
      .then((characters) => {
        // Get previous characters stored in local storage
        var wanted_answers = JSON.parse(localStorage.getItem('wanted_answers'));
        console.log(characters);

        // Remove characters that already had been stored in local storage from available characters
        var availableCharactersTemp = [...characters];
        // Also save characters that already have been choosed
        var charactersSelectedTemp = charactersSelected;

        if (wanted_answers !== null && wanted_answers.length > 0) {
          for (let answer of wanted_answers) {
            var index = availableCharactersTemp.findIndex((e) => {
              return e.char_name === answer;
            });
            console.log(availableCharactersTemp[index], index);
            availableCharactersTemp.splice(index, 1);
          }
          console.log(availableCharactersTemp);
          for (let answer of wanted_answers) {
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
        console.log(char['wanted_char'].char_name);
        setYesterdaysChar(char['wanted_char'].char_name);
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
    await fetch('http://localhost:5000/wanted/todays_char')
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
          'wanted_answers'
        );
        console.log(foundChar);
        setFoundChar(foundChar);

        cluesState.updateBountyClue(
          foundChar
            ? 0
            : subtractTillZero(10, getTriesFromAnswers('wanted_answers'))
        );

        if (json.clearStorage) {
          localStorage.clear();
        }
      });
  } catch (err) {
    console.log(err);
  }
};

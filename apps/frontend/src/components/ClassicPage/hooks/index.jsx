// Function to fetch all classic available characters
export const fetchClassicCharacters = async (
  charactersSelected,
  setAvailableCharacters,
  setCharactersSelected
) => {
  try {
    await fetch('http://localhost:5000/classic/characters')
      .then((result) => result.json())
      .then((characters) => {
        // Get previous characters stored in local storage
        var classic_answers = JSON.parse(
          localStorage.getItem('classic_answers')
        );
        console.log(characters);

        // Remove characters that already had been stored in local storage from available characters
        var availableCharactersTemp = [...characters];
        // Also save characters that already have been choosed
        var charactersSelectedTemp = charactersSelected;

        if (classic_answers !== null && classic_answers.length > 0) {
          for (let answer of classic_answers) {
            var index = availableCharactersTemp.findIndex((e) => {
              return e.char_name === answer;
            });
            console.log(availableCharactersTemp[index], index);
            availableCharactersTemp.splice(index, 1);
          }
          console.log(availableCharactersTemp);
          for (let answer of classic_answers) {
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
export const fetchTodaysChar = async (setTodaysChar) => {
  try {
    await fetch('http://localhost:5000/classic/todays_char')
      .then((result) => result.json())
      .then((char) => {
        console.log(char);
        setTodaysChar(char);
      });
  } catch (err) {
    console.log(err);
  }
};

// Function to fetch arcs
export const fetchArcs = async (setArcs) => {
  try {
    await fetch('http://localhost:5000/arcs')
      .then((result) => result.json())
      .then((arcs) => {
        console.log(arcs);
        setArcs(arcs);
      });
  } catch (err) {
    console.log(err);
  }
};

// Function to fetch yesterdays character
export const fetchYesterdaysChar = async (setYesterdaysChar) => {
  try {
    await fetch('http://localhost:5000/yesterdays_char')
      .then((result) => result.json())
      .then((char) => {
        console.log(char['classic_char'].char_name);
        setYesterdaysChar(char['classic_char'].char_name);
      });
  } catch (err) {
    console.log(err);
  }
};

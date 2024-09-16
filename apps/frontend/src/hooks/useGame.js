import { useReducer } from "react"
import { gameReducer } from "../reducers/gameReducer"
import { getTriesFromAnswers, subtractTillZero, getFoundCharFromStorage } from "../lib/utilities"

function useGame(type) {
  const gameAnswers = type + "_answers"
  const gameFound = type + '_found'
  const initialState = {
    numTries: getTriesFromAnswers(gameAnswers),
    foundChar: false,
    charactersSelected: [],
    availableCharacters: [],
    searchingNames: [],
    inputName: '',
    noCharacterFound: false,
    yesterdaysChar: undefined,
    todaysChar: undefined
  };

  if (type === 'classic') {
    initialState['arcs'] = []
    initialState["colorIndicators"] = false;
  } else if (type === "wanted") {
    initialState["blurPixels"] = subtractTillZero(7.5, getTriesFromAnswers("wanted_answers"))
    initialState["blurDisplay"] = true
    initialState["displayColors"] = false
  } else if (type === "laugh") {
    initialState["isPlayingLaugh"] = false
  }

  const [state, dispatch] = useReducer(gameReducer, initialState)

  // GENERAL FUNCTIONALITY
  const updateInputName = (obj) => {
    dispatch({ type: 'update_input_name', inputName: obj });
  };

  const updateTodaysChar = (obj) => {
    dispatch({ type: 'update_todays_char', todaysChar: obj });
  };

  const updateNumTries = () => {
    dispatch({ type: 'update_num_tries' });
  };

  const updateFoundChar = (obj) => {
    dispatch({ type: 'found_todays_char', foundChar: obj });
  };

  const updateSearchingNames = (obj) => {
    dispatch({ type: 'update_searching_names', searchingNames: obj });
  };

  const updateAvailableCharacters = (obj) => {
    dispatch({
      type: 'update_available_characters',
      availableCharacters: obj,
    });
  };

  const updateCharactersSelected = (obj) => {
    dispatch({
      type: 'update_characters_selected',
      charactersSelected: obj,
    });
  };

  const updateNoCharacterFound = (value) => {
    dispatch({
      type: 'update_no_character_found',
      noCharacterFound: value,
    });
  };

  const updateYesterdaysChar = (obj) => {
    dispatch({
      type: "update_yesterdays_char",
      yesterdaysChar: obj
    })
  }
  // CLASSIC ONLY
  const updateArcs = (obj) => {
    dispatch({ type: 'update_arcs', arcs: obj });
  };

  const updateColorIndicators = (obj) => {
    dispatch({ type: 'show_color_indicators', colorIndicators: obj });
  };

  // WANTED ONLY
  const updateBlurPixels = (obj) => {
    dispatch({ type: 'update_blur_pixels', blurPixels: obj });
  };

  const updateBlurDisplay = (obj) => {
    dispatch({ type: 'update_blur_display', blurDisplay: obj });
  };

  const updateDisplayColors = (obj) => {
    dispatch({ type: 'update_display_colors', displayColors: obj });
  };

  // LAUGH ONLY
  const updatePlayingLaugh = (obj) => {
    dispatch({ type: 'update_playing_laugh', isPlayingLaugh: obj });
  };

  const gameObject = {
    updateNoCharacterFound,
    updateAvailableCharacters,
    updateCharactersSelected,
    updateSearchingNames,
    updateInputName,
    updateFoundChar,
    updateNumTries,
    updateTodaysChar,
    updateYesterdaysChar,
    ...state
  }

  if (type === 'classic') {
    gameObject["updateArcs"] = updateArcs
    gameObject["updateColorIndicators"] = updateColorIndicators
  } else if (type === "wanted") {
    gameObject["updateBlurPixels"] = updateBlurPixels
    gameObject["updateBlurDisplay"] = updateBlurDisplay
    gameObject["updateDisplayColors"] = updateDisplayColors
  } else if (type === "laugh") {
    gameObject["updatePlayingLaugh"] = updatePlayingLaugh
  }

  return gameObject
}

export default useGame

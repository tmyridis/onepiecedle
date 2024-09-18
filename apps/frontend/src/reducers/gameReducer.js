import { UPDATE_ACTIONS, CLASSIC_ACTIONS, DEVIL_FRUIT_ACTIONS, WANTED_ACTIONS, LAUGH_ACTIONS } from '../actions/index'

const initialState = {
  numTries: 0,
  foundChar: false,
  charactersSelected: [],
  availableCharacters: [],
  searchingNames: [],
  inputName: '',
  noCharacterFound: false,
  todaysChar: {},
  yesterdaysChar: undefined
}

const gameReducer = (state, action) => {
  switch (action.type) {
    // GENERAL GAME ACTIONS
    case UPDATE_ACTIONS.NUM_TRIES_UPDATE: {
      return { ...state, numTries: state.numTries + 1 }
    }
    case UPDATE_ACTIONS.FOUND_TODAYS_CHARACTER: {
      return { ...state, foundChar: action.foundChar }
    }
    case UPDATE_ACTIONS.UPDATE_CHARACTERS_SELECTED: {
      return { ...state, charactersSelected: action.charactersSelected }
    }
    case UPDATE_ACTIONS.UPDATE_AVAILABLE_CHARACTERS: {
      return { ...state, availableCharacters: action.availableCharacters }
    }
    case UPDATE_ACTIONS.UPDATE_SEARCHING_NAMES: {
      return { ...state, searchingNames: action.searchingNames }
    }
    case UPDATE_ACTIONS.UPDATE_INPUT_NAME: {
      return { ...state, inputName: action.inputName }
    }
    case UPDATE_ACTIONS.UPDATE_NO_CHARACTER_FOUND: {
      return { ...state, noCharacterFound: action.noCharacterFound }
    }
    case UPDATE_ACTIONS.UPDATE_TODAYS_CHAR: {
      return { ...state, todaysChar: action.todaysChar }
    }
    case UPDATE_ACTIONS.UPDATE_YESTERDAYS_CHAR: {
      return { ...state, yesterdaysChar: action.yesterdaysChar }
    }
    // CLASSIC ACTIONS ONLY
    case CLASSIC_ACTIONS.UPDATE_ARCS: {
      return { ...state, arcs: action.arcs }
    }
    case CLASSIC_ACTIONS.SHOW_COLOR_INDICATORS: {
      return { ...state, colorIndicators: action.colorIndicators }
    }
    case CLASSIC_ACTIONS.CLEAR_GAME: {
      return { ...state, numTries: 0, foundChar: false }
    }
    // DEVIL FRUIT ACTIONS ONLY
    case DEVIL_FRUIT_ACTIONS.CLEAR_GAME: {
      return { ...state, numTries: 0, foundChar: false }
    }
    // WANTED ACTIONS ONLY
    case WANTED_ACTIONS.UPDATE_BLUR_PIXELS: {
      return { ...state, blurPixels: action.blurPixels }
    }
    case WANTED_ACTIONS.UPDATE_BLUR_DISPLAY: {
      return { ...state, blurDisplay: action.blurDisplay }
    }
    case WANTED_ACTIONS.UPDATE_DISPLAY_COLORS: {
      return { ...state, displayColors: action.displayColors }
    }
    case WANTED_ACTIONS.CLEAR_GAME: {
      return { ...state, numTries: 0, foundChar: false, blurPixels: 7.5, displayColors: false, blurDisplay: true }
    }
    // LAUGH ACTIONS ONLY
    case LAUGH_ACTIONS.UPDATE_PLAYING_LAUGH: {
      return { ...state, isPlayingLaugh: action.isPlayingLaugh }
    }
    case WANTED_ACTIONS.CLEAR_GAME: {
      return { ...state, numTries: 0, foundChar: false, isPlayingLaugh: false }
    }
    default:
      return state;
  }
}

export { gameReducer, initialState }

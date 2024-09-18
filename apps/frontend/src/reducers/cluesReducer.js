import { CLASSIC_ACTIONS, DEVIL_FRUIT_ACTIONS, WANTED_ACTIONS, LAUGH_ACTIONS } from "../actions";

const cluesReducer = (state, action) => {
  switch (action.type) {
    // CLASSIC CLUES
    case CLASSIC_ACTIONS.UPDATE_FIRST_APPARITION_CLUE: {
      return { ...state, firstApparitionClue: action.firstApparitionClue }
    }
    case CLASSIC_ACTIONS.UPDATE_DEVIL_FRUIT_CLUE: {
      return { ...state, devilFruitClue: action.devilFruitClue }
    }
    case CLASSIC_ACTIONS.SHOW_FIRST_APPARITION_CLUE_SHOW: {
      return { ...state, firstApparitionClueShow: action.firstApparitionClueShow }
    }
    case CLASSIC_ACTIONS.SHOW_DEVIL_FRUIT_CLUE_SHOW: {
      return { ...state, devilFruitClueShow: action.devilFruitClueShow }
    }
    case CLASSIC_ACTIONS.CLEAR_CLUES: {
      return { ...state, firstApparitionClue: 6, devilFruitClue: 9, firstApparitionClueShow: false, devilFruitClueShow: false }
    }
    // DEVIL FRUIT CLUES
    case DEVIL_FRUIT_ACTIONS.UPDATE_TYPE_CLUE: {
      return { ...state, typeClue: action.typeClue }
    }
    case DEVIL_FRUIT_ACTIONS.UPDATE_TRANSLATE_CLUE: {
      return { ...state, translateClue: action.translateClue }
    }
    case DEVIL_FRUIT_ACTIONS.UPDATE_EXPLANATION_CLUE: {
      return { ...state, explanationClue: action.explanationClue }
    }
    case DEVIL_FRUIT_ACTIONS.SHOW_TYPE_CLUE_SHOW: {
      return { ...state, typeClueShow: action.typeClueShow }
    }
    case DEVIL_FRUIT_ACTIONS.SHOW_TRANSLATE_CLUE_SHOW: {
      return { ...state, translateClueShow: action.translateClueShow }
    }
    case DEVIL_FRUIT_ACTIONS.SHOW_EXPLANATION_CLUE_SHOW: {
      return { ...state, explanationClueShow: action.explanationClueShow }
    }
    case DEVIL_FRUIT_ACTIONS.CLEAR_CLUES: {
      return { ...state, typeClue: 4, translateClue: 7, explanationClue: 13, typeClueShow: false, explanationClueShow: false, translateClueShow: false }
    }
    // WANTED CLUES
    case WANTED_ACTIONS.UPDATE_BOUNTY_CLUE: {
      return { ...state, bountyClue: action.bountyClue }
    }
    case WANTED_ACTIONS.SHOW_BOUNTY_CLUE: {
      return { ...state, bountyClueShow: action.bountyClueShow }
    }
    case WANTED_ACTIONS.CLEAR_CLUES: {
      return { ...state, bountyClue: 10, bountyClueShow: false }
    }
    // LAUGH CLUES
    case LAUGH_ACTIONS.UPDATE_ORIGIN_CLUE: {
      return { ...state, originClue: action.originClue }
    }
    case LAUGH_ACTIONS.SHOW_ORIGIN_CLUE: {
      return { ...state, originClueShow: action.originClueShow }
    }
    case LAUGH_ACTIONS.UPDATE_AFFILIATION_CLUE: {
      return { ...state, affiliationClue: action.affiliationClue }
    }
    case LAUGH_ACTIONS.SHOW_AFFILIATION_CLUE: {
      return { ...state, affiliationClueShow: action.affiliationClueShow }
    }
    case LAUGH_ACTIONS.CLEAR_CLUES: {
      return { ...state, originClue: 4, affiliationClue: 9, originClueShow: false, affiliationClueShow: false }
    }
    default:
      return state
  }
}

export { cluesReducer }

import { useReducer } from "react";
import { cluesReducer } from "../reducers/cluesReducer";
import { subtractTillZero, getTriesFromAnswers } from "../lib/utilities";

function useClues(type) {
  const initialState = {}
  if (type === 'classic') {

    initialState["firstApparitionClue"] = localStorage.getItem('classic_found')
      ? 0
      : subtractTillZero(6, getTriesFromAnswers('classic_answers'))
    initialState["devilFruitClue"] = localStorage.getItem('classic_found')
      ? 0
      : subtractTillZero(9, getTriesFromAnswers('classic_answers'))

    initialState["firstApparitionClueShow"] = false;
    initialState["devilFruitClueShow"] = false;

  } else if (type === "fruit") {

    initialState["typeClue"] = localStorage.getItem('fruit_found')
      ? 0
      : subtractTillZero(4, getTriesFromAnswers('fruit_answers'))

    initialState["translateClue"] = localStorage.getItem('fruit_found')
      ? 0
      : subtractTillZero(7, getTriesFromAnswers('fruit_answers'))

    initialState["explanationClue"] = localStorage.getItem('fruit_found')
      ? 0
      : subtractTillZero(13, getTriesFromAnswers('fruit_answers'))

    initialState["typeClueShow"] = false;
    initialState["translateClueShow"] = false;
    initialState["explanationClueShow"] = false;

  } else if (type === "wanted") {
    initialState["bountyClue"] = localStorage.getItem("wanted_found")
      ? 0
      : subtractTillZero(10, getTriesFromAnswers("wanted_answers"))

    initialState["bountyClueShow"] = false

  } else if (type === "laugh") {
    initialState["originClue"] = localStorage.getItem("laugh_found")
      ? 0
      : subtractTillZero(4, getTriesFromAnswers("laugh_answers"))

    initialState["originClueShow"] = false

    initialState["affiliationClue"] = localStorage.getItem("laugh_found")
      ? 0
      : subtractTillZero(9, getTriesFromAnswers("laugh_answers"))

    initialState["affiliationClueShow"] = false
  }
  const [state, dispatch] = useReducer(cluesReducer, initialState)

  // CLASSIC CLUES
  const updateFirstApparitionClue = (obj) => {
    dispatch({ type: 'update_first_apparition_clue', firstApparitionClue: obj });
  };

  const updateDevilFruitClue = (obj) => {
    dispatch({ type: 'update_devil_fruit_clue', devilFruitClue: obj });
  };

  const updateFirstApparitionClueShow = (obj) => {
    dispatch({ type: 'show_first_apparition_clue', firstApparitionClueShow: obj });
  };

  const updateDevilFruitClueShow = (obj) => {
    dispatch({ type: 'show_devil_fruit_clue', devilFruitClueShow: obj });
  };

  // DEVIL FRUIT CLUES
  const updateTypeClue = (obj) => {
    dispatch({ type: 'update_type_clue', typeClue: obj });
  };

  const updateTranslateClue = (obj) => {
    dispatch({ type: 'update_translate_clue', translateClue: obj });
  };

  const updateExplanationClue = (obj) => {
    dispatch({ type: 'update_explanation_clue', explanationClue: obj });
  };

  const updateTypeClueShow = (obj) => {
    dispatch({ type: 'show_type_clue', typeClueShow: obj });
  };

  const updateTranslateClueShow = (obj) => {
    dispatch({ type: 'show_translate_clue', translateClueShow: obj });
  };

  const updateExplanationClueShow = (obj) => {
    dispatch({ type: 'show_explanation_clue', explanationClueShow: obj });
  };

  // WANTED CLUES
  const updateBountyClue = (obj) => {
    dispatch({ type: 'update_bounty_clue', bountyClue: obj });
  };

  const updateBountyClueShow = (obj) => {
    dispatch({ type: 'show_bounty_clue', bountyClueShow: obj });
  };

  // LAUGH CLUES
  const updateOriginClue = (obj) => {
    dispatch({ type: 'update_origin_clue', originClue: obj });
  };

  const updateOriginClueShow = (obj) => {
    dispatch({ type: 'show_origin_clue', originClueShow: obj });
  };
  const updateAffiliationClue = (obj) => {
    dispatch({ type: 'update_affiliation_clue', affiliationClue: obj });
  };

  const updateAffiliationClueShow = (obj) => {
    dispatch({ type: 'show_affiliation_clue', affiliationClueShow: obj });
  };

  const gameObject = { ...state }

  if (type === 'classic') {

    gameObject["updateFirstApparitionClue"] = updateFirstApparitionClue
    gameObject["updateDevilFruitClue"] = updateDevilFruitClue
    gameObject["updateFirstApparitionClueShow"] = updateFirstApparitionClueShow
    gameObject["updateDevilFruitClueShow"] = updateDevilFruitClueShow
  } else if (type === "fruit") {

    gameObject["updateTypeClue"] = updateTypeClue
    gameObject["updateTranslateClue"] = updateTranslateClue
    gameObject["updateExplanationClue"] = updateExplanationClue
    gameObject["updateTypeClueShow"] = updateTypeClueShow
    gameObject["updateTranslateClueShow"] = updateTranslateClueShow
    gameObject["updateExplanationClueShow"] = updateExplanationClueShow

  } else if (type === "wanted") {
    gameObject["updateBountyClue"] = updateBountyClue
    gameObject["updateBountyClueShow"] = updateBountyClueShow
  } else if (type === "laugh") {
    gameObject["updateOriginClue"] = updateOriginClue
    gameObject["updateOriginClueShow"] = updateOriginClueShow
    gameObject["updateAffiliationClue"] = updateAffiliationClue
    gameObject["updateAffiliationClueShow"] = updateAffiliationClueShow
  }

  return gameObject
}


export default useClues

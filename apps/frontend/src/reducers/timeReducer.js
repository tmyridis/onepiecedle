import { TIME_ACTIONS } from "../actions"

const timeReducer = (state, action) => {
  switch (action.type) {
    case TIME_ACTIONS.UPDATE_DAYS: {
      return { ...state, days: action.days }
    }
    case TIME_ACTIONS.UPDATE_HOURS: {
      return { ...state, hours: action.hours }
    }
    case TIME_ACTIONS.UPDATE_MINUTES: {
      return { ...state, minutes: action.minutes }
    }
    case TIME_ACTIONS.UPDATE_SECONDS: {
      return { ...state, seconds: action.seconds }
    }
    case TIME_ACTIONS.UPDATE_TIMER_ENDED: {
      return { ...state, timerEnded: action.timerEnded }
    }
    default:
      return state
  }
}


export { timeReducer }

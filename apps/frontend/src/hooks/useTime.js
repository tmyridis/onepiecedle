import { useEffect, useReducer } from "react"
import { timeReducer } from "../reducers/timeReducer"

function useTime() {
  const initialState = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    timerEnded: false
  }

  const [state, dispatch] = useReducer(timeReducer, initialState)

  const updateDays = (obj) => {
    dispatch({ type: 'update_days', days: obj });
  };

  const updateHours = (obj) => {
    dispatch({ type: 'update_hours', hours: obj });
  };

  const updateMinutes = (obj) => {
    dispatch({ type: 'update_minutes', minutes: obj });
  };

  const updateSeconds = (obj) => {
    dispatch({ type: 'update_seconds', seconds: obj });
  };

  const updateTimerEnded = (obj) => {
    dispatch({ type: 'update_timer_ended', timerEnded: obj });
  };

  useEffect(() => {

    const todayLocale = new Date().toLocaleString("en-US", { timeZone: "Europe/Athens" });
    const today = new Date(todayLocale)
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = mm + '-' + dd + '-' + yyyy;
    const target = new Date(formattedToday + ' 23:59:59');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      updateDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      updateHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      updateMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      updateSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        updateTimerEnded(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (state.timerEnded) {

      setTimeout(() => {
        localStorage.clear();
      }, 5000);
    }
  }, [state.timerEnded]);

  return {
    updateDays,
    updateHours,
    updateMinutes,
    updateSeconds,
    updateTimerEnded,
    ...state
  }
}


export default useTime

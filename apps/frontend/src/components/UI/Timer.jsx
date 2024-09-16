import useTime from '../../hooks/useTime';
function Timer() {
  const timer = useTime();
  return (
    <div>
      {timer.timerEnded ? (
        <>
          <h1>Refresh for new character!</h1>
        </>
      ) : (
        <>
          <div>
            <div className="flex justify-center items-center gap-x-2 text-4xl">
              <div className="animate-bounce">
                <span>
                  {timer.hours < 10 ? '0' + timer.hours : timer.hours}
                </span>
              </div>
              <span className="divider">:</span>
              <div className="animate-bounce">
                <span>
                  {timer.minutes < 10 ? '0' + timer.minutes : timer.minutes}
                </span>
              </div>
              <span className="divider">:</span>
              <div className="animate-bounce">
                <span>
                  {timer.seconds < 10 ? '0' + timer.seconds : timer.seconds}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Timer;

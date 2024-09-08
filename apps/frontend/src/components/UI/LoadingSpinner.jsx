function LoadingSpinner(props) {
  const randomClassicLoadingText = [
    "Loading your knowledge",
    "Navigating through the seas",
    "Measuring each character's height",
    "Assembling a crew of might pirates",
  ];
  const randomFruitLoadingText = [
    "Eating the fruit",
    "Learning Japanese",
    "The fruit grows",
  ];
  const randomWantedLoadingText = [
    "Printing the poster on newspaper",
    "Computing the bounty",
    "Drawing the poster from memory",
  ];
  const randomLaughLoadingText = [
    "Tickling the character",
    "Searching for the weirdest laugh",
    "Is that really a laugh?",
  ];
  return (
    <>
      <div className="flex justify-center items-center pt-32 text-xl">
        <div>
          {props.type === "classic" && (
            <div>
              {
                randomClassicLoadingText[
                  Math.floor(Math.random() * randomClassicLoadingText.length)
                ]
              }
            </div>
          )}
          {props.type === "fruit" && (
            <div>
              {
                randomFruitLoadingText[
                  Math.floor(Math.random() * randomFruitLoadingText.length)
                ]
              }
            </div>
          )}
          {props.type === "wanted" && (
            <div>
              {
                randomWantedLoadingText[
                  Math.floor(Math.random() * randomWantedLoadingText.length)
                ]
              }
            </div>
          )}
          {props.type === "laugh" && (
            <div>
              {
                randomLaughLoadingText[
                  Math.floor(Math.random() * randomLaughLoadingText.length)
                ]
              }
            </div>
          )}
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-dark-grey"></div>
        <img
          src="src\assets\luffyQuestionMark.png"
          className="rounded-full h-28 w-28"
        />
      </div>
    </>
  );
}

export default LoadingSpinner;

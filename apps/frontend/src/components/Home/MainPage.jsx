import { Link } from "react-router-dom";
function MainPage() {
  return (
    <div className="flex justify-center p-10">
      <div className="grid-cols-1 space-y-4 text-white">
        <div className="transition ease-in-out delay-50 hover:traslate-y-1 hover:scale-105 duration-150">
          <Link to="/classic">
            <div className="w-96 relative text-center">
              <img src="src\assets\gameButtonClassic.png" />
              <div className="w-full absolute top-0 left-0 text-center mt-8">
                <div className="text-xl font-bold text-center">Classic</div>
                <div className="text-sm font-medium text-center">
                  Get clues on every try
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="transition ease-in-out delay-50 hover:traslate-y-1 hover:scale-105 duration-150">
          <Link to="/devilfruit">
            <div className="w-96 relative text-center">
              <img src="src\assets\gameButtonFruit.png" />
              <div className="w-full absolute top-0 left-0 text-center mt-8">
                <div className="text-xl font-bold text-center">Devil fruit</div>
                <div className="text-sm font-medium text-center">
                  Guess with a name
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="transition ease-in-out delay-50 hover:traslate-y-1 hover:scale-105 duration-150">
          <Link to="/wanted">
            <div className="w-96 relative text-center">
              <img src="src\assets\gameButtonWanted.png" />
              <div className="w-full absolute top-0 left-0 text-center mt-8">
                <div className="text-xl font-bold text-center">Wanted</div>
                <div className="text-sm font-medium text-center">
                  Guess with a poster
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="transition ease-in-out delay-50 hover:traslate-y-1 hover:scale-105 duration-150">
          <Link to="/laugh">
            <div className="w-96 relative text-center">
              <img src="src\assets\gameButtonLaugh.png" />
              <div className="w-full absolute top-0 left-0 text-center mt-8">
                <div className="text-xl font-bold text-center">Laugh</div>
                <div className="text-sm font-medium text-center">
                  Guess with a laugh audio
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

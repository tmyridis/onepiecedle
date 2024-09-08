function ColorIndicators(props) {
  return (
    <div
      className="flex justify-center items-center m-10 bg-light-grey mx-auto"
      style={{
        border: "2px solid #534e41",
        borderRadius: "10px",
        width: "450px",
        height: "200px",
      }}
    >
      <div className=" border-2 rounded-lg border-dark-grey-font p-1 relative">
        <div className="absolute top-2 bottom-0 right-2" dir="rtl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            style={{ cursor: "pointer" }}
            className="size-6 hover:scale-125"
            onClick={() => {
              props.setColorIndicators(false);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center m-10">
          Color indicators
        </div>
        <div className="grid grid-cols-5 gap-5 justify-items-center">
          <div className="">
            <div
              className="w-10 h-10 border-1"
              style={{ backgroundColor: "#3da75e" }}
            ></div>
            <div>Correct</div>
          </div>
          <div
            className="tooltip tooltip-top"
            data-tip="One or more properties are correct, but not all"
          >
            <div
              className="w-10 h-10 border-1"
              style={{ backgroundColor: "#d9c827" }}
            ></div>
            <div>Partial</div>
          </div>
          <div>
            <div
              className="w-10 h-10 border-1"
              style={{ backgroundColor: "#d53633" }}
            ></div>
            <div>Incorrect</div>
          </div>
          <div
            className="tooltip tooltip-top"
            data-tip="The correct value is higher"
          >
            <div
              className="w-10 h-10 border-1"
              style={{ backgroundColor: "#d53633" }}
            >
              <svg
                fill="#80201f"
                height="42px"
                width="42px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-39.36 -39.36 570.72 570.72"
                xmlSpace="preserve"
                stroke="#000000"
                strokeWidth="0.00492001"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="11.808024"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M455.86,262.249L248.976,1.377c-1.46-1.836-4.56-1.836-6.024,0L35.668,262.749c-0.916,1.156-1.084,2.744-0.444,4.072 c0.64,1.324,1.984,2.176,3.456,2.176h76.592v219.22c0,2.124,2.028,3.784,4.148,3.784h253.604c2.124,0,3.7-1.66,3.7-3.784v-219.22 h76.512h0.04c2.22,0,3.884-1.716,3.884-3.856C457.16,263.993,456.66,262.957,455.86,262.249z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div>Higher</div>
          </div>
          <div
            className="tooltip tooltip-top"
            data-tip="The correct value is lower"
          >
            <div
              className="w-10 h-10 border-1"
              style={{ backgroundColor: "#d53633" }}
            >
              <svg
                fill="#80201f"
                height="42px"
                width="42px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-39.36 -39.36 570.72 570.72"
                xmlSpace="preserve"
                stroke="#000000"
                strokeWidth="0.00492001"
                transform="rotate(180)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="11.808024"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M455.86,262.249L248.976,1.377c-1.46-1.836-4.56-1.836-6.024,0L35.668,262.749c-0.916,1.156-1.084,2.744-0.444,4.072 c0.64,1.324,1.984,2.176,3.456,2.176h76.592v219.22c0,2.124,2.028,3.784,4.148,3.784h253.604c2.124,0,3.7-1.66,3.7-3.784v-219.22 h76.512h0.04c2.22,0,3.884-1.716,3.884-3.856C457.16,263.993,456.66,262.957,455.86,262.249z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div>Lower</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorIndicators;

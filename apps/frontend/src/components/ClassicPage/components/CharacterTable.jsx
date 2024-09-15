import {
  arcComparison,
  hakiComparison,
  attributeComparison,
  convertToBellyCurrencySystem,
  superiorAttribute,
} from '../../../lib/utilities';

function CharacterTable({ gameState }) {
  return (
    <div className="pt-20 z-0 flex justify-center">
      <table className="items-center text-sm text-center text-dark-grey-font border-separate border-spacing-x-1 break-normal">
        <thead className="uppercase">
          <tr>
            <th scope="col" className="w-20">
              CHARACTER
            </th>
            <th scope="col" className="w-20">
              <div
                className="tooltip tooltip-bottom"
                data-tip="Male, Female or Other"
              >
                GENDER
              </div>
            </th>
            <th scope="col" className="w-20">
              <div
                className="tooltip tooltip-bottom"
                data-tip="The character's main affiliation (crew, etc.)."
              >
                AFFILIATION
              </div>
            </th>
            <th scope="col" className="w-20">
              <div
                className="tooltip tooltip-bottom"
                data-tip="The main fruit eaten by the character."
              >
                DEVIL FRUIT
              </div>
            </th>
            <th scope="col" className="w-20">
              <div
                className="tooltip tooltip-bottom"
                data-tip="Observation, Armament, Conqueror, None"
              >
                HAKI
              </div>
            </th>
            <th scope="col" className="w-20">
              <div
                className="tooltip tooltip-bottom"
                data-tip="The character's last bounty. If the character is deceased, it will display the last bounty when alive. If the character never had a bounty, it will display 0."
              >
                LAST BOUNTY
              </div>
            </th>
            <th scope="col" className="w-20">
              <div
                className="tooltip tooltip-bottom"
                data-tip="The character's height."
              >
                HEIGHT
              </div>
            </th>
            <th scope="col" className="w-20">
              <div
                className="tooltip tooltip-bottom"
                data-tip="The character's origin."
              >
                ORIGIN
              </div>
            </th>
            <th scope="col" className="w-20">
              <div
                className="tooltip tooltip-bottom"
                data-tip="The arc in which the character first appeared."
              >
                FIRST ARC
              </div>
            </th>
          </tr>
          <tr>
            <th scope="col" className="w-20">
              <hr className="flex justify-center w-11/12 h-1 bg-gray-700 border-0 rounded" />
            </th>
            <th scope="col" className="w-20">
              <hr className="flex justify-center w-11/12 h-1 bg-gray-700 border-0 rounded" />
            </th>
            <th scope="col" className="w-20">
              <hr className="flex justify-center w-11/12 h-1 bg-gray-700 border-0 rounded" />
            </th>
            <th scope="col" className="w-20">
              <hr className="flex justify-center w-11/12 h-1 bg-gray-700 border-0 rounded" />
            </th>
            <th scope="col" className="w-20">
              <hr className="flex justify-center w-11/12 h-1 bg-gray-700 border-0 rounded" />
            </th>
            <th scope="col" className="w-20">
              <hr className="flex justify-center w-11/12 h-1 bg-gray-700 border-0 rounded" />
            </th>
            <th scope="col" className="w-20">
              <hr className="flex justify-center w-11/12 h-1 bg-gray-700 border-0 rounded" />
            </th>
            <th scope="col" className="w-20">
              <hr className="flex justify-center w-11/12 h-1 bg-gray-700 border-0 rounded" />
            </th>
            <th scope="col" className="w-20">
              <hr className="flex justify-center w-11/12 h-1 bg-gray-700 border-0 rounded" />
            </th>
          </tr>
        </thead>
        <tbody className="text-white">
          {gameState.charactersSelected.toReversed().map((item) => (
            <tr key={item.id}>
              <td className="py-4 animate-flip">
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={item.char_name}
                >
                  <img
                    src={item.image}
                    className="object-cover border-2 rounded-lg h-20 w-20 flex justify-center items-center tooltip tooltip-bottom border-dark-grey"
                  />
                </div>
              </td>
              <td className="py-4 animate-flip">
                <div
                  className="border-2 rounded-lg h-20 w-20 flex justify-center items-center border-transparent"
                  style={{
                    backgroundColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'gender'
                    )
                      ? '#3da75e'
                      : '#d53633',
                    borderColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'gender'
                    )
                      ? '#24d475'
                      : '#ff3737',
                  }}
                >
                  {item.gender}
                </div>
              </td>
              <td className="py-4 animate-flip">
                <div
                  className="border-2 rounded-lg h-20 w-20 flex justify-center items-center border-transparent"
                  style={{
                    backgroundColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'affiliation'
                    )
                      ? '#3da75e'
                      : '#d53633',
                    borderColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'affiliation'
                    )
                      ? '#24d475'
                      : '#ff3737',
                  }}
                >
                  {item.affiliation}
                </div>
              </td>
              <td className="py-4 animate-flip">
                <div
                  className="border-2 rounded-lg h-20 w-20 flex justify-center items-center border-transparent"
                  style={{
                    backgroundColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'devil_fruit_type'
                    )
                      ? '#3da75e'
                      : '#d53633',
                    borderColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'devil_fruit_type'
                    )
                      ? '#24d475'
                      : '#ff3737',
                  }}
                >
                  {item.devil_fruit_type}
                </div>
              </td>
              <td className="py-4 animate-flip">
                <div
                  className="border-2 rounded-lg h-20 w-20 flex justify-center items-center border-transparent"
                  style={{
                    backgroundColor:
                      hakiComparison(item.haki, gameState.todaysChar.haki) === 1
                        ? '#3da75e'
                        : hakiComparison(
                            item.haki,
                            gameState.todaysChar.haki
                          ) === 0
                        ? '#d9c827'
                        : '#d53633',
                    borderColor:
                      hakiComparison(item.haki, gameState.todaysChar.haki) === 1
                        ? '#24d475'
                        : hakiComparison(
                            item.haki,
                            gameState.todaysChar.haki
                          ) === 0
                        ? '#f3e033'
                        : '#ff3737',
                  }}
                >
                  <div className="flex justify-center items-center">
                    {item.haki.conqueror === true && (
                      <img
                        className="w-6 inline-block p-0 mx-0 -my-4"
                        src="src\assets\conquerorsIcon.png"
                        style={{
                          overflowClipMargin: 'content-box',
                          overflow: 'clip',
                        }}
                      />
                    )}
                    {item.haki.armament === true && (
                      <img
                        className="w-6 inline-block p-0"
                        src="src\assets\armamentIcon.png"
                        style={{
                          overflowClipMargin: 'content-box',
                          overflow: 'clip',
                        }}
                      />
                    )}
                    {item.haki.observation === true && (
                      <img
                        className="w-6 inline-block p-0"
                        src="src\assets\observationIcon.png"
                        style={{
                          overflowClipMargin: 'content-box',
                          overflow: 'clip',
                        }}
                      />
                    )}
                    {item.haki.conqueror === false &&
                      item.haki.armament === false &&
                      item.haki.observation === false && (
                        <img
                          className="w-6 inline-block p-0"
                          src="src\assets\noneHakiIcon.png"
                        />
                      )}
                  </div>
                </div>
              </td>
              <td className="py-4 animate-flip">
                <div
                  className="border-2 rounded-lg h-20 w-20 flex justify-center items-center border-transparent relative"
                  style={{
                    backgroundColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'bounty'
                    )
                      ? '#3da75e'
                      : '#d53633',
                    borderColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'bounty'
                    )
                      ? '#24d475'
                      : '#ff3737',
                  }}
                >
                  {superiorAttribute(item, gameState.todaysChar, 'bounty') ===
                  1 ? (
                    <svg
                      fill="#80201f"
                      height="256px"
                      width="256px"
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
                        {' '}
                        <g>
                          {' '}
                          <g>
                            {' '}
                            <path d="M455.86,262.249L248.976,1.377c-1.46-1.836-4.56-1.836-6.024,0L35.668,262.749c-0.916,1.156-1.084,2.744-0.444,4.072 c0.64,1.324,1.984,2.176,3.456,2.176h76.592v219.22c0,2.124,2.028,3.784,4.148,3.784h253.604c2.124,0,3.7-1.66,3.7-3.784v-219.22 h76.512h0.04c2.22,0,3.884-1.716,3.884-3.856C457.16,263.993,456.66,262.957,455.86,262.249z"></path>{' '}
                          </g>{' '}
                        </g>{' '}
                      </g>
                    </svg>
                  ) : superiorAttribute(
                      item,
                      gameState.todaysChar,
                      'bounty'
                    ) === -1 ? (
                    <svg
                      fill="#80201f"
                      height="256px"
                      width="256px"
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
                        {' '}
                        <g>
                          {' '}
                          <g>
                            {' '}
                            <path d="M455.86,262.249L248.976,1.377c-1.46-1.836-4.56-1.836-6.024,0L35.668,262.749c-0.916,1.156-1.084,2.744-0.444,4.072 c0.64,1.324,1.984,2.176,3.456,2.176h76.592v219.22c0,2.124,2.028,3.784,4.148,3.784h253.604c2.124,0,3.7-1.66,3.7-3.784v-219.22 h76.512h0.04c2.22,0,3.884-1.716,3.884-3.856C457.16,263.993,456.66,262.957,455.86,262.249z"></path>{' '}
                          </g>{' '}
                        </g>{' '}
                      </g>
                    </svg>
                  ) : (
                    <></>
                  )}
                  <div className="flex absolute z-10">
                    <img
                      className="w-3 p-0"
                      src="src\assets\bountyBellyIcon.png"
                    />
                    {convertToBellyCurrencySystem(item.bounty)}
                  </div>
                </div>
              </td>
              <td className="py-4 animate-flip">
                <div
                  className="border-2 rounded-lg h-20 w-20 flex justify-center items-center border-transparent relative"
                  style={{
                    backgroundColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'height'
                    )
                      ? '#3da75e'
                      : '#d53633',
                    borderColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'height'
                    )
                      ? '#24d475'
                      : '#ff3737',
                  }}
                >
                  {superiorAttribute(item, gameState.todaysChar, 'height') ===
                  1 ? (
                    <svg
                      fill="#80201f"
                      height="256px"
                      width="256px"
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
                        {' '}
                        <g>
                          {' '}
                          <g>
                            {' '}
                            <path d="M455.86,262.249L248.976,1.377c-1.46-1.836-4.56-1.836-6.024,0L35.668,262.749c-0.916,1.156-1.084,2.744-0.444,4.072 c0.64,1.324,1.984,2.176,3.456,2.176h76.592v219.22c0,2.124,2.028,3.784,4.148,3.784h253.604c2.124,0,3.7-1.66,3.7-3.784v-219.22 h76.512h0.04c2.22,0,3.884-1.716,3.884-3.856C457.16,263.993,456.66,262.957,455.86,262.249z"></path>{' '}
                          </g>{' '}
                        </g>{' '}
                      </g>
                    </svg>
                  ) : superiorAttribute(
                      item,
                      gameState.todaysChar,
                      'height'
                    ) === -1 ? (
                    <svg
                      fill="#80201f"
                      height="256px"
                      width="256px"
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
                        {' '}
                        <g>
                          {' '}
                          <g>
                            {' '}
                            <path d="M455.86,262.249L248.976,1.377c-1.46-1.836-4.56-1.836-6.024,0L35.668,262.749c-0.916,1.156-1.084,2.744-0.444,4.072 c0.64,1.324,1.984,2.176,3.456,2.176h76.592v219.22c0,2.124,2.028,3.784,4.148,3.784h253.604c2.124,0,3.7-1.66,3.7-3.784v-219.22 h76.512h0.04c2.22,0,3.884-1.716,3.884-3.856C457.16,263.993,456.66,262.957,455.86,262.249z"></path>{' '}
                          </g>{' '}
                        </g>{' '}
                      </g>
                    </svg>
                  ) : (
                    <></>
                  )}
                  <div className="absolute z-10">
                    {item.height.toString().split('.')[0] +
                      'm' +
                      item.height.toString().split('.')[1].padEnd(2, '0')}
                  </div>
                </div>
              </td>
              <td className="py-4 animate-flip">
                <div
                  className="border-2 rounded-lg h-20 w-20 flex justify-center items-center border-transparent"
                  style={{
                    backgroundColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'origin'
                    )
                      ? '#3da75e'
                      : '#d53633',
                    borderColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'origin'
                    )
                      ? '#24d475'
                      : '#ff3737',
                  }}
                >
                  {item.origin}
                </div>
              </td>
              <td className="py-4 animate-flip">
                <div
                  className="border-2 rounded-lg h-20 w-20 flex justify-center items-center relative"
                  style={{
                    backgroundColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'first_arc'
                    )
                      ? '#3da75e'
                      : '#d53633',
                    borderColor: attributeComparison(
                      item,
                      gameState.todaysChar,
                      'first_arc'
                    )
                      ? '#24d475'
                      : '#ff3737',
                  }}
                >
                  {arcComparison(item, gameState.todaysChar, gameState.arcs) ===
                  1 ? (
                    <svg
                      fill="#80201f"
                      height="256px"
                      width="256px"
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
                        {' '}
                        <g>
                          {' '}
                          <g>
                            {' '}
                            <path d="M455.86,262.249L248.976,1.377c-1.46-1.836-4.56-1.836-6.024,0L35.668,262.749c-0.916,1.156-1.084,2.744-0.444,4.072 c0.64,1.324,1.984,2.176,3.456,2.176h76.592v219.22c0,2.124,2.028,3.784,4.148,3.784h253.604c2.124,0,3.7-1.66,3.7-3.784v-219.22 h76.512h0.04c2.22,0,3.884-1.716,3.884-3.856C457.16,263.993,456.66,262.957,455.86,262.249z"></path>{' '}
                          </g>{' '}
                        </g>{' '}
                      </g>
                    </svg>
                  ) : arcComparison(
                      item,
                      gameState.todaysChar,
                      gameState.arcs
                    ) === -1 ? (
                    <svg
                      fill="#80201f"
                      height="256px"
                      width="256px"
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
                        {' '}
                        <g>
                          {' '}
                          <g>
                            {' '}
                            <path d="M455.86,262.249L248.976,1.377c-1.46-1.836-4.56-1.836-6.024,0L35.668,262.749c-0.916,1.156-1.084,2.744-0.444,4.072 c0.64,1.324,1.984,2.176,3.456,2.176h76.592v219.22c0,2.124,2.028,3.784,4.148,3.784h253.604c2.124,0,3.7-1.66,3.7-3.784v-219.22 h76.512h0.04c2.22,0,3.884-1.716,3.884-3.856C457.16,263.993,456.66,262.957,455.86,262.249z"></path>{' '}
                          </g>{' '}
                        </g>{' '}
                      </g>
                    </svg>
                  ) : (
                    <></>
                  )}
                  <div className="absolute z-10">{item.first_arc}</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CharacterTable;

import { attributeComparison } from '../../lib/utilities';

function NamesList({ gameState }) {
  return (
    <div className="grid grid-cols-1 px-2 py-5 gap-y-2 max-w-sm mx-auto items-center text-md font-bold text-center text-white">
      {gameState.charactersSelected.toReversed().map((item) => (
        <div
          key={item.id}
          className={`${
            attributeComparison(item, gameState.todaysChar, 'char_name')
              ? 'animate-winner'
              : 'animate-leftRight'
          } rounded-lg border-2 border-black h-24 hover:scale-105`}
          style={{
            backgroundColor: attributeComparison(
              item,
              gameState.todaysChar,
              'char_name'
            )
              ? '#35b956'
              : '#df5858',
            border: attributeComparison(item, gameState.todaysChar, 'char_name')
              ? '2px solid #fff'
              : '2px solid #ff8686',
          }}
        >
          <div className="flex justify-center p-2">
            <img
              src={item.image}
              className="border-2 rounded-lg w-[40px] h-[46px]"
            />
          </div>
          <div className="">{item.char_name}</div>
        </div>
      ))}
    </div>
  );
}

export default NamesList;

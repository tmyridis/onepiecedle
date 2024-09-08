function SearchingNames(props) {
  return (
    <>
      {props.searchingNames?.length > 0 && !props.foundChar && (
        <div className="max-w-sm mx-auto text-center max-h-80	overflow-y-auto overflow-x-hidden absolute left-0 right-0 top-0 z-10">
          <div className="grid grid-cols-1 border-4 border-dark-grey rounded-lg divide-y-2 divide-inherit bg-light-grey text-dark-grey-font">
            {props.searchingNames.map((item) => (
              <button
                className="h-16 hover:bg-gray-200"
                onClick={() => {
                  props.onSubmitClick(item);
                }}
                key={item.id}
              >
                <div className="flex justify-start items-center pl-4 gap-x-5">
                  <img className="w-10" src={item.image} />
                  {item.char_name}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      {props.noCharacterFound && (
        <div className="max-w-sm mx-auto text-center p-2 text-dark-grey-font border-4 border-dark-grey rounded-lg bg-light-grey overflow-y-auto overflow-x-hidden absolute left-0 right-0 top-0">
          <p>No character found</p>
        </div>
      )}
    </>
  );
}

export default SearchingNames;

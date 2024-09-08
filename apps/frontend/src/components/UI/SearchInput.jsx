function SearchInput(props) {
  // Function to handle changes while searching for character and outputting characters on the character list
  const onChangeSearchingInput = (target) => {
    props.setInputName(target);
    var temp = [];
    for (let char of props.availableCharacters) {
      if (char.char_name.toLowerCase().includes(target.toLowerCase())) {
        temp.push(char);
      }
    }
    if (temp.length > 0 && target !== "") {
      props.setSearchingNames(temp);
      props.setNoCharacterFound(false);
    } else {
      props.setSearchingNames([]);
      props.setNoCharacterFound(target !== "" ? true : false);
    }
  };

  return (
    <div className="pt-5">
      <form className="max-w-sm mx-auto" onSubmit={props.onSubmitInput}>
        <div className="relative">
          <input
            value={props.inputName}
            autoComplete="off"
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border-4 border-dark-grey rounded-lg bg-light-grey"
            placeholder="Character name, alias, epithet ..."
            required
            onChange={(e) => onChangeSearchingInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-dark-grey-font absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-orange"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;

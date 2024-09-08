import { useRef, useEffect } from "react";

export default function SettingsModal(props) {
  const ref = useRef();

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(ref, () => props.setShowSettings(false));

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"
        aria-hidden="true"
      ></div>
      <div
        className="fixed top-10 w-1/2 right-1/4 z-10 overflow-y-auto rounded-lg"
        ref={ref}
      >
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
          <div className="flex justify-between bg-orange h-full pl-5 pr-2 text-2xl text-white py-4 uppercase">
            <div>Settings</div>
            <button
              onClick={() => {
                props.setShowSettings(false);
              }}
            >
              <div>X</div>
            </button>
          </div>
          <div className="h-40 bg-white">
            <div className="text-left text-wrap flex justify-between pl-5 pr-10 pt-4 uppercase text-xl">
              <div>Infinite mode</div>
              <label className="relative flex items-center mb-5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={props.infiniteMode}
                  onChange={() => {
                    localStorage.setItem("infinite", !props.infiniteMode);
                    props.setInfiniteMode(!props.infiniteMode);
                  }}
                  className="sr-only peer"
                />
                <div className="w-20 h-8 bg-beige peer-focus:outline-0 rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-12 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-orange "></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

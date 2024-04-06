import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const preRef = useRef();
  const [thumbColor, setThumbColor] = useState("#6BAF8D");
  const [trackColor, setTrackColor] = useState("#e0e0e0");
  const [scrollbarWidth, setScrollbarWidth] = useState(12);
  const [scrollbarBorderRadius, setScrollbarBorderRadius] = useState(10);
  const [thumbBorderWidth, setThumbBorderWidth] = useState(0);
  const [thumbBorderColor, setThumbBorderColor] = useState("#232E33");

  const copyToClipboard = () => {
    const textToCopy = preRef.current.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Scrollbar kodu kopyalandı");
      })
      .catch((error) => {
        toast.error("Kopyalama başarısız");
      });
  };

  const scrollbarStyle = {
    "--thumb-color": thumbColor,
    "--track-color": trackColor,
    "--scrollbar-width": `${scrollbarWidth}px`,
    "--scrollbar-border-radius": `${scrollbarBorderRadius}px`,
    "--scrollbar-thumb-border-width": `${thumbBorderWidth}px`,
    "--scrollbar-thumb-border-color": thumbBorderColor,
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster />
      <div className=" flex flex-col w-[1200px]">
        <div className="font-bold capitalize text-4xl text-[#6BA18D] text-center pb-20">
          Scrollbar.style
        </div>
        <div className="flex py-5">
          <div className="w-[50%]">
            <div className="flex items-center">
              <span className="w-[250px] my-4">Thumb Color</span>
              <input
                type="color"
                className="border-none bg-transparent w-10 h-10 appearance-none cursor-pointer"
                value={thumbColor}
                onChange={(e) => setThumbColor(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <span className="w-[250px] my-4">Track Color</span>
              <input
                type="color"
                className="border-none bg-transparent w-10 h-10 appearance-none cursor-pointer"
                value={trackColor}
                onChange={(e) => setTrackColor(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <span className="w-[250px] my-4">Scrollbar Width</span>
              <input
                type="number"
                className="border border-gray-300 p-2 w-20"
                value={scrollbarWidth}
                onChange={(e) => setScrollbarWidth(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <span className="w-[250px] my-4">Scrollbar Border Radius</span>
              <input
                type="number"
                className="border border-gray-300 p-2 w-20"
                value={scrollbarBorderRadius}
                onChange={(e) => setScrollbarBorderRadius(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <span className="w-[250px] my-4">Thumb Border Width</span>
              <input
                type="number"
                className="border border-gray-300 p-2 w-20"
                value={thumbBorderWidth}
                onChange={(e) => setThumbBorderWidth(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <span className="w-[250px] my-4">Thumb Border Color</span>
              <input
                type="color"
                className="border-none bg-transparent w-10 h-10 appearance-none cursor-pointer"
                value={thumbBorderColor}
                onChange={(e) => setThumbBorderColor(e.target.value)}
              />
            </div>
          </div>
          <div className="w-[50%]">
            <code>
              <pre
                ref={preRef}
                className="w-full h-[500px] bg-white overflow-y-auto px-4 py-3 rounded-lg border-2 border-gray-300"
                style={scrollbarStyle}
              >
                {`* {
  --thumb-color: ${thumbColor};
  --track-color: ${trackColor};
  --scrollbar-width: ${scrollbarWidth}px;
  --scrollbar-border-radius: ${scrollbarBorderRadius}px;
  --scrollbar-thumb-border-width: ${thumbBorderWidth}px;
  --scrollbar-thumb-border-color: ${thumbBorderColor};
}

::-webkit-scrollbar {
  width: var(--scrollbar-width);
}

::-webkit-scrollbar-track {
  background: var(--track-color);
  border-radius: var(--scrollbar-border-radius);
}

::-webkit-scrollbar-thumb {
  background: var(--thumb-color);
  border-radius: var(--scrollbar-border-radius);
  border: var(--scrollbar-thumb-border-width) solid var(--scrollbar-thumb-border-color);
}

@supports not selector(::-webkit-scrollbar) {
  * {
      scrollbar-color: var(--thumb-color) var(--track-color);
  }
}`}
              </pre>
            </code>
            <button
              onClick={copyToClipboard}
              className="bg-[#6BA18D] mt-3 hover:opacity-90 capitalize text-white font-bold py-2 px-4 rounded-lg shadow-md duration-300"
            >
              Copy Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

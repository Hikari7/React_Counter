import { useRef } from "react";

function Practice() {
  const ref = useRef();

  const handleRef = () => {
    // console.log(ref);
    console.log(ref.current.value);
  };
  return (
    <div className="container mx-auto my-36 flex justify-center">
      <input type="text" ref={ref} />
      <button
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        onClick={handleRef}
      >
        useRef
      </button>
    </div>
  );
}
export default Practice;

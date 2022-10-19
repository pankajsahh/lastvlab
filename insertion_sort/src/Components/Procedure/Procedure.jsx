import React from "react";
import proc1 from "./proc.png";
import proc2 from "./choices.jpg";

const Procedure = () => {
  return (
    <div className="flex pb-5 h-3/5 static">
      <div className="m-0 p-2 sm:p-5 h-3/5 inline-block">
      <h1 className="underline font-semibold text-lg sm:text-2xl sm:mt-2 sm:mb-5 text-center text-slate-500 mx-5">
            Procedure
          </h1>
          <p className="m-5 font-medium text-base leading-loose">
            Simulation is divided into two modules. The first module allows the
            user to step-by-step analyze the working of the algorithm on arrays.
            In the next module, some exercises are provided so that the user can
            have a hands-on experience with the algorithm.
          </p>

        <div className="relative shadow-2xl px-8 py-4 rounded-3xl mr-6 bg-gradient-to-r m-5">
          <h2 className="text-lg underline text-stone-600 font-bold mb-3">
            Steps of Simulator:
          </h2>
          <ol className="text-lg list-decimal px-5">
            {/* <li>The screen consists of three panels, first panel is for input, second panel consists of code of the algorithm and the third panel will contain the output.</li> */}
            <li className="mb-1">
              The screen consists of three partitions, the input partition, the
              algorithm's code on the second partition, and the output on the
              third partition.
            </li>
            <li className="mb-1">
              Read the simulator details and enter the desired input for the
              number of elements in the array.
            </li>
            {/* <li className='mb-1'>Enter the array size (maximum allowed size is 10).</li>
                    <li>Click on Random elements to generate the array randomly.</li>
                    <li>Click on Enter elements manually to manually enter the elements of the array.</li> */}
            <li className="mb-1">
              Press <span className="font-semibold">Start</span> to begin the
              execution of code.
            </li>
            <li className="mb-1">
              The relevant line of the code will be highlighted as it executes.
            </li>
            <li className="mb-1">
              The local variables will be shown in the Output Panel with their
              values.
            </li>
          </ol>
          <img className="absolute right-5 bottom-0 top-8 h-40 mt-7" src={proc1} alt="Procedure"></img>
        </div>

        <div className="relative shadow-2xl px-8 py-4 rounded-3xl mr-6 bg-gradient-to-r m-5 mt-10">
          <h2 className="text-lg underline text-stone-600 font-bold mb-3">
            Try Yourself Module:
          </h2>
          <ol className="text-lg list-decimal px-5">
            <li className="mb-1">
              Click on <span className="font-semibold">Try Yourself</span> to
              try some exercises based on the algorithm.
            </li>
            <li className="mb-1">
              Select the exercise number from the left navigation pane.
            </li>
            <li className="mb-1">
              Type your answer in the highlighted text box.
            </li>
            <li className="mb-1">
              Click <span className="text-green-500">Submit Answer</span> to
              submit the answer.
            </li>
            <li className="mb-1">
              Click <span className="font-medium">Show Answer</span> to display
              the correct answer.
            </li>
          </ol>
          <img className="absolute right-10 top-12 h-44" src={proc2} alt="Procedure"></img>
        </div>
      </div>
    </div>
  );
};

export default Procedure;

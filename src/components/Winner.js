import { dataWinners, maxWinner } from "../data";

function Winner() {
  return dataWinners.length > 0 ? (
    <div className="w-full p-6">
      <h2 className="text-white font-bold text-4xl">
        Winner Winner Chicken Dinner {dataWinners.length}/{maxWinner}:
      </h2>
      <div className="grid grid-cols-3 gap-10 w-full overflow-y-auto px-6 my-8">
        {dataWinners.map((data, index) => (
          <div
            key={index}
            className="border-t-2 border-x-2 border-white px-2 py-3 rounded-full flex justify-center items-center font-semibold text-xl max-h-min text-white"
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex justify-center items-center font-semibold text-2xl text-white">
      Empty
    </div>
  );
}

export default Winner;

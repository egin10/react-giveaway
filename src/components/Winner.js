import { dataWinners, maxWinner } from "../data";
import TotalWinner from "./TotalWinner";

function Winner() {
  return (
    <>
      {dataWinners.length > 0 ? (
        <div className="grid grid-cols-5 gap-10 w-full h-full overflow-y-auto p-6 mt-8">
          {dataWinners.map((data, index) => (
            <div
              key={index}
              className="border-b-2 border-x-2 border-white px-2 py-3 rounded-xl flex justify-center items-center text-2xl max-h-min text-white relative"
            >
              {data}

              <div className="absolute top-[-15px] right-0 text-black bg-white px-2 rounded-md">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center text-2xl text-white">
          Empty
        </div>
      )}
      <TotalWinner dataWinners={dataWinners} maxWinner={maxWinner} />
    </>
  );
}

export default Winner;

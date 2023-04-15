import { dataWinners, maxWinner } from "../data";

function Winner() {
  return (
    <>
      {dataWinners.length > 0 ? (
        <div className="grid grid-cols-5 gap-10 w-full h-full overflow-y-auto px-6 mt-8">
          {dataWinners.map((data, index) => (
            <div
              key={index}
              className="border-b-2 border-x-2 border-white px-2 py-3 rounded-full flex justify-center items-center font-semibold text-xl max-h-min text-white"
            >
              {data}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center font-semibold text-2xl text-white">
          Empty
        </div>
      )}
      <div className="sticky bottom-0 w-full text-xl font-semibold text-end px-6 py-2 text-white">
        Total Winners : {dataWinners.length}/{maxWinner}
      </div>
    </>
  );
}

export default Winner;

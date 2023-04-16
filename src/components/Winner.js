import { useEffect, useState } from "react";
import { dataWinners } from "../data";
import TotalWinner from "./TotalWinner";
import { Utils } from "../utils";

function Winner() {
  const [maxWinner, setMaxWinner] = useState(0);
  const [winners, setWinners] = useState([]);

  async function removeItem(value) {
    const index = dataWinners.findIndex((data) => data === value);
    const data = dataWinners.splice(index, 1);

    if (data) {
      console.log(dataWinners);
      setWinners(dataWinners);
      console.log(winners);
    }
  }

  useEffect(() => {
    setMaxWinner(parseInt(Utils.getMaxWinner()));
    setWinners(dataWinners);
  }, [winners]);

  return (
    <>
      {winners.length > 0 ? (
        <div
          className={`grid grid-cols-${
            maxWinner >= 10 ? "5" : maxWinner === 5 ? "5" : "2"
          } gap-${
            maxWinner > 10 ? "10" : "4"
          } w-full h-full overflow-y-auto p-6 mt-8 justify-center items-center`}
        >
          {winners.map((data, index) => (
            <div
              key={index}
              className="border-b-2 border-x-2 border-white px-2 py-3 rounded-xl flex justify-center items-center text-2xl max-h-16 text-white relative"
            >
              {data}
              {/* <div
                className="bg-white rounded-full p-1 absolute right-1 bottom-[-12px] hover:cursor-pointer"
                onClick={() => removeItem(data)}
              >
                <img src="delete.png" alt="delete.png" height={15} width={15} />
              </div> */}

              <div className="absolute top-[-15px] right-3 text-black bg-white px-2 rounded-md">
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
      <TotalWinner totalWinners={winners.length} maxWinner={maxWinner} />
    </>
  );
}

export default Winner;

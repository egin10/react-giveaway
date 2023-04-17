import { useEffect, useState } from "react";
import TotalWinner from "./TotalWinner";
import { Utils } from "../utils";

function Winner() {
  const [maxWinner, setMaxWinner] = useState(0);
  const [dataWinners, setDataWinners] = useState([]);

  function removeItem(value) {
    const index = dataWinners.findIndex((data) => data === value);
    const data = dataWinners.splice(index, 1);

    if (data) {
      Utils.setListWinners(dataWinners);
      setDataWinners(Utils.getListWinner());
    }
  }

  function resetAll() {
    setDataWinners([]);
    Utils.setListWinners([]);
  }

  useEffect(() => {
    setMaxWinner(parseInt(Utils.getMaxWinner()));
    setDataWinners(Utils.getListWinner());
  }, []);

  return (
    <>
      {dataWinners.length > 0 ? (
        <div
          className={`grid ${
            maxWinner > 5 ? "grid-cols-5 gap-10" : "grid-cols-2 gap-4"
          } w-full h-full overflow-y-auto p-6 mt-8 justify-center items-center`}
        >
          {dataWinners.map((data, index) => (
            <div
              key={index}
              className="border-b-2 border-x-2 border-white px-2 py-3 rounded-xl flex justify-center items-center text-2xl max-h-16 text-white relative"
            >
              {data}
              <div
                className="bg-white rounded-full p-1 absolute right-1 bottom-[-12px] hover:cursor-pointer"
                onClick={() => removeItem(data)}
              >
                <img src="delete.png" alt="delete.png" height={15} width={15} />
              </div>

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
      <div className="flex justify-end pt-2">
        <div
          className="text-white text-xl bg-red-500 rounded-full text-center px-3 py-1 hover:cursor-pointer"
          onClick={() => resetAll()}
        >
          Reset All
        </div>
      </div>
      <TotalWinner totalWinners={dataWinners.length} maxWinner={maxWinner} />
    </>
  );
}

export default Winner;

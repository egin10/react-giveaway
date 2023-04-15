import { useState } from "react";
import { dataContestants, dataWinners, maxWinner } from "../data";
import { Utils } from "../Utils";

function Home() {
  // const [winner, setWinner] = useState("...");
  const [winners, setWinners] = useState([]);

  async function pickAWinner() {
    if (dataWinners.length === maxWinner) {
      return setWinners(
        "Ow ow, you have reached the maximum number of the winners"
      );
    }

    Utils.randomWinner(dataContestants, dataWinners, 25, setWinners);
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-4">
      <h2 className="font-bold text-white text-6xl">The winner is 😱</h2>

      <h3
        className={`font-bold text-white ${
          dataWinners.length === maxWinner ? "w-3/5 text-center" : ""
        } ${
          winners.length > 1 && dataWinners.length === maxWinner
            ? "text-5xl"
            : "text-7xl animate-pulse"
        }`}
      >
        {winners}
      </h3>

      <img
        src="start.png"
        alt="start.png"
        width={120}
        height={120}
        className="hover:cursor-pointer"
        onClick={() => pickAWinner()}
      />
    </div>
  );
}

export default Home;

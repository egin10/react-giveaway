import { useState } from "react";
import { dataContestants, dataWinners, maxWinner } from "../data";

function Home() {
  console.log("contestants:", dataContestants.length);

  const maxScramble = 100;
  const [winner, setWinner] = useState("...");

  async function pickAWinner() {
    if (dataWinners.length === maxWinner) {
      return setWinner(
        "Ow ow, you have reached the maximum number of the winners"
      );
    }
    let count = 0,
      winningNumber;

    const timer = setInterval(scramble, 100);

    function scramble() {
      if (count === maxScramble) {
        dataWinners.push(dataContestants[winningNumber]);
        dataContestants.splice(winningNumber, 1);
        return clearInterval(timer);
      } else {
        winningNumber = Math.floor(
          Math.random() * (dataContestants.length / 10)
        );

        count++;
        console.log(winningNumber, count);
        setWinner(dataContestants[winningNumber]);
      }
    }
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-4">
      <h2 className="font-bold text-white text-6xl">The winner is 😱</h2>

      <h3
        className={`font-bold text-white ${dataWinners.length === maxWinner ? 'w-3/5 text-center':''} ${
          winner === "..." || dataWinners.length === maxWinner ? "text-5xl" : "text-7xl animate-pulse"
        }`}
      >
        {winner}
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

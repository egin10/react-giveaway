import { useEffect, useState } from "react";
import { dataContestants, dataWinners, maxWinner } from "../data";

function Home() {
  const [winners, setWinners] = useState([]);
  const [start, setStart] = useState(false);

  function pickAWinner() {
    if (start) return;

    setStart(true);

    let count = 0;
    const maxRandomTimes = 30;
    const timer = setInterval(generateTheWinners, 100);

    function generateTheWinners() {
      // SetInterval Done
      if (count === maxRandomTimes) {
        setStart(false);

        return clearInterval(timer);
      } else {
        // reset
        setWinners([]);

        if (dataWinners.length === maxWinner) {
          return setWinners([
            "Ow ow, you have reached the maximum number of the winners",
          ]);
        }

        scrambling();

        count++;
      }
    }
  }

  function scrambling() {
    const maxNumberOfWinner = 25;
    let timers = [];

    for (let win = 0; win < maxNumberOfWinner; win++) {
      // Random Index of Winners from dataContestants
      timers[win] = Math.floor(Math.random() * dataContestants.length);
      const theWinner = dataContestants[timers[win]];

      // Show the winners
      setWinners((prev) => [...prev, theWinner]);
    }
  }

  useEffect(() => {
    function pushDataWinners() {
      winners.forEach((data) => {
        // Add to dataWinners
        dataWinners.push(data);

        // Remove from dataContestants
        const index = dataContestants.findIndex(
          (contestant) => contestant === data
        );
        dataContestants.splice(index, 1);
      });
    }

    if (winners.length > 1 && !start && dataWinners.length < maxWinner) {
      pushDataWinners();
      console.log(winners);
    }
  }, [winners, start]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-4">
      <h2 className="font-bold text-white text-6xl">The winner is 🚀</h2>

      {winners.length > 1 ? (
        <div className="grid grid-cols-5 gap-4">
          {winners.map((winner, index) => (
            <h3
              key={index}
              className="border-2 border-white rounded-xl text-white font-bold p-2 mx-2 text-center"
            >
              {winner}
            </h3>
          ))}
        </div>
      ) : winners.length === 0 ? (
        ""
      ) : (
        <div className="w-full flex justify-center items-center">
          <h3 className="text-white font-bold p-2 mx-2 text-center text-2xl">
            {winners[0]}
          </h3>
        </div>
      )}

      {start ? (
        <img
          src="loading.png"
          alt="loading.png"
          width={50}
          height={50}
          className="animate-spin"
        />
      ) : (
        <img
          src="start.png"
          alt="start.png"
          width={120}
          height={120}
          className="hover:cursor-pointer"
          onClick={() => pickAWinner()}
        />
      )}
    </div>
  );
}

export default Home;

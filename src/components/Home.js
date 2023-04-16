import { useEffect, useState } from "react";
import { dataContestants, dataWinners, maxWinner } from "../data";
import TotalWinner from "./TotalWinner";
import CustomButton from "./CustomButton";
import ListWinners from "./ListWinners";

function Home() {
  const [winners, setWinners] = useState([]);
  const [start, setStart] = useState(false);
  const [done, setDone] = useState(false);
  const [totalWinners, setTotalWinners] = useState(0);

  function pickAWinner() {
    if (start) return;
    if (maxWinner === dataWinners.length) {
      setWinners(["Ow ow, you have reached the maximum number of the winners"]);
      return setDone(true);
    }

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
      setTotalWinners(dataWinners.length);
    }

    if (winners.length > 1 && !start && dataWinners.length < maxWinner) {
      pushDataWinners();
      console.log(winners);
    }
  }, [winners, start]);

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center space-y-4">
        <h2 className="font-bold text-white text-6xl">The winner is 🚀</h2>

        <ListWinners winners={winners} />

        <CustomButton
          dataWinners={dataWinners}
          maxWinner={maxWinner}
          start={start}
          done={done}
          pickAWinner={pickAWinner}
        />
      </div>
      <TotalWinner totalWinners={totalWinners} maxWinner={maxWinner} />
    </>
  );
}

export default Home;

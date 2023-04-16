import { useEffect, useState } from "react";
import { dataContestants, dataWinners } from "../data";
import TotalWinner from "./TotalWinner";
import CustomButton from "./CustomButton";
import ListWinners from "./ListWinners";
import { Utils } from "../utils";

function Home() {
  const [winners, setWinners] = useState([]);
  const [start, setStart] = useState(false);
  const [done, setDone] = useState(false);
  const [totalWinners, setTotalWinners] = useState(dataWinners.length);

  const [maxWinner, setMaxWinner] = useState(0);
  const [maxNumberOfWinner, setMaxNumberOfWinner] = useState(0);

  function pickAWinner() {
    if (start) return;
    if (maxWinner === dataWinners.length) {
      setWinners(["Ow ow, you have reached the maximum number of the winners"]);
      return setDone(true);
    }

    if (
      winners.length > 1 &&
      maxNumberOfWinner + dataWinners.length > maxWinner
    ) {
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
    setMaxWinner(parseInt(Utils.getMaxWinner()));
    setMaxNumberOfWinner(parseInt(Utils.getMaxNumberOfWinner()));

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
      console.log(winners);
      if (dataWinners.length + winners.length > maxWinner) {
        setWinners([
          "Ow ow, you have reached the maximum number of the winners",
        ]);
        return setDone(true);
      }
      pushDataWinners();
    }
  }, [winners, start, maxWinner]);

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center space-y-4">
        <h2 className="font-bold text-white text-6xl">Here's our winners 🚀</h2>

        <ListWinners winners={winners} maxNumberOfWinner={maxNumberOfWinner} />

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

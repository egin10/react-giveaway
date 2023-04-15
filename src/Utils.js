export const Utils = {
  randomWinner: (
    dataContestants,
    dataWinners,
    maxNumberOfWinner,
    setWinners
  ) => {
    const maxScramble = 30;

    let count = 0,
      winningNumber,
      timers = [];

    for (let win = 0; win < maxNumberOfWinner; win++) {
      timers[win] = setInterval(scramble, 100);
      //   console.log(timers);
    }

    function scramble() {
      if (count === maxScramble) {
        for (let win = 0; win < maxNumberOfWinner; win++) {
          clearInterval(timers[win]);
          dataWinners.push(dataContestants[winningNumber]);
          dataContestants.splice(winningNumber, 1);
        }

        return;
      } else {
        for (let win = 0; win < maxNumberOfWinner; win++) {
          winningNumber = Math.floor(
            Math.random() * (dataContestants.length / 10)
          );

          console.log(winningNumber, count);
          setWinners(dataContestants[winningNumber]);
        }

        count++;
      }
    }
  },
};

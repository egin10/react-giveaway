function CustomButton({ start, dataWinners, maxWinner, done, pickAWinner }) {
  return (
    <>
      {
        /* Loading & Start Button */
        start && dataWinners !== maxWinner ? (
          <img
            src="loading.png"
            alt="loading.png"
            width={30}
            height={30}
            className="animate-spin"
          />
        ) : done ? (
          <img src={"done.png"} alt={"done.png"} width={60} height={60} />
        ) : (
          <img
            src={"start.png"}
            alt={"start.png"}
            width={120}
            height={120}
            className="hover:cursor-pointer"
            onClick={() => pickAWinner()}
          />
        )
      }
    </>
  );
}

export default CustomButton;

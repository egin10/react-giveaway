function TotalWinner({ totalWinners, maxWinner }) {
  return (
    <div className="sticky bottom-0 w-full text-3xl text-end px-6 py-2 text-white">
      Total Winners : {totalWinners}/{maxWinner}
    </div>
  );
}

export default TotalWinner;

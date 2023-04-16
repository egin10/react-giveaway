function ListWinners({ winners, maxNumberOfWinner }) {
  return (
    <>
      {/* List the winners */}
      {winners.length > 1 ? (
        <div
          className={`grid px-12 w-full grid-cols-${
            maxNumberOfWinner > 5 ? "5" : `${maxNumberOfWinner}`
          } gap-4`}
        >
          {winners.map((winner, index) => (
            <h3
              key={index}
              className="border-2 border-white rounded-xl text-white text-3xl p-2 mx-2 text-center"
            >
              {winner}
            </h3>
          ))}
        </div>
      ) : winners.length === 0 ? (
        ""
      ) : (
        <div className="w-full flex justify-center items-center">
          <h3 className="text-white p-2 mx-2 text-center text-4xl">
            {winners[0]}
          </h3>
        </div>
      )}
    </>
  );
}
export default ListWinners;

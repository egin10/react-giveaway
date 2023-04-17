function ListWinners({ winners, maxNumberOfWinner }) {
  return (
    <>
      {/* List the winners */}
      {winners.length > 1 ? (
        <div
          className={`grid px-12 w-full ${
            maxNumberOfWinner > 5
              ? "grid-cols-5"
              : maxNumberOfWinner === 4
              ? "grid-cols-4"
              : maxNumberOfWinner === 3
              ? "grid-cols-3"
              : maxNumberOfWinner === 2
              ? "grid-cols-2"
              : "grid-cols-1"
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

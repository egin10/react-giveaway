import { dataContestants } from "../data";

function Contestant() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 w-full h-full overflow-y-auto p-6 mb-4">
        {dataContestants.length > 0 ? (
          dataContestants.map((data, index) => (
            <div
              key={index}
              className="border-t-2 border-x-2 border-white px-2 py-3 rounded-xl flex justify-center items-center text-2xl text-white"
            >
              {data}
            </div>
          ))
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            Empty
          </div>
        )}
      </div>
      <div className="sticky bottom-2 flex justify-end text-white text-3xl mr-6">
        Total Contestant : {dataContestants.length}
      </div>
    </>
  );
}

export default Contestant;

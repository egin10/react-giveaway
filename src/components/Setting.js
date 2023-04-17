import { useEffect, useState } from "react";
import { Utils } from "../utils";

function Setting() {
  const [maxNumberWinner, setMaxNumberWinner] = useState(0);
  const [maxAllWinner, setMaxAllWinner] = useState(0);
  const [alert, setAlert] = useState({});
  const [totalWinners, setTotalWinners] = useState([]);

  function reset() {
    setMaxNumberWinner(25);
    setMaxAllWinner(400);
    Utils.setMaxWinner(400);
    Utils.setMaxNumberOfWinner(25);
    setAlert({
      status: "success",
      message: "Updated!",
    });
  }

  function submit() {
    if (maxNumberWinner > maxAllWinner)
      return setAlert({
        status: "error",
        message: "Maximum winner perscrambling cannot more than Total winners",
      });

    if (totalWinners.length > maxAllWinner) {
      totalWinners.splice(0, totalWinners.length);
    }

    Utils.setMaxWinner(maxAllWinner);
    Utils.setMaxNumberOfWinner(maxNumberWinner);
    setAlert({
      status: "success",
      message: "Updated!",
    });
  }

  function closeAlert() {
    setAlert({});
  }

  useEffect(() => {
    setTimeout(closeAlert, 5000);
  }, [alert]);

  useEffect(() => {
    setMaxAllWinner(parseInt(Utils.getMaxWinner()));
    setMaxNumberWinner(parseInt(Utils.getMaxNumberOfWinner()));
    setTotalWinners(Utils.getListWinner());
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center text-2xl">
      <div className="bg-white flex flex-col space-y-4 p-6 rounded-2xl">
        {alert ? (
          <div
            className={`bg-${
              alert.status === "success" ? "green" : "red"
            }-500 text-white px-3 rounded-2xl mb-6 text-center max-w-xs h-full hover:cursor-pointer break-words`}
            onClick={() => closeAlert()}
          >
            {alert.message}
          </div>
        ) : (
          <></>
        )}
        <h2 className="text-3xl">Settings</h2>
        <hr />
        <TextField
          type={"number"}
          label={"Maximum winner perscrambling"}
          value={maxNumberWinner}
          placeholder={"25"}
          infospan={"Default value: 25 person."}
          onChange={(value) => setMaxNumberWinner(parseInt(value))}
        />
        <TextField
          type={"number"}
          label={"Total winners"}
          value={maxAllWinner}
          placeholder={"400"}
          infospan={"Default value: 400 person."}
          onChange={(value) => setMaxAllWinner(parseInt(value))}
        />
        <div className="flex justify-between">
          <button
            className="bg-red-500 rounded-lg px-3 text-white"
            onClick={() => reset()}
          >
            Reset
          </button>
          <button
            className="bg-green-500 rounded-lg px-3 text-white"
            onClick={() => submit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Setting;

function TextField({
  label,
  value,
  type = null,
  placeholder,
  infospan,
  onChange,
}) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type={type ?? "text"}
        className="px-2 py-1 border-b-[1px] border-purple-200"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="text-base">{infospan}</span>
    </div>
  );
}

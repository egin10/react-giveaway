export const Utils = {
  initSettings: () => {
    const maxWinner = localStorage.getItem("maxWinner");
    if (!maxWinner) localStorage.setItem("maxWinner", 400);

    const maxNumberOfWinner = localStorage.getItem("maxNumberOfWinner");
    if (!maxNumberOfWinner) localStorage.setItem("maxNumberOfWinner", 25);

    const listWinners = localStorage.getItem("listWinners");
    if (!listWinners) localStorage.setItem("listWinners", "[]");
  },
  setMaxWinner: (value) => {
    localStorage.setItem("maxWinner", value);
  },
  getMaxWinner: () => {
    return localStorage.getItem("maxWinner") ?? 0;
  },
  setMaxNumberOfWinner: (value) => {
    localStorage.setItem("maxNumberOfWinner", value);
  },
  getMaxNumberOfWinner: () => {
    return localStorage.getItem("maxNumberOfWinner") ?? 0;
  },
  setListWinners: (value) => {
    localStorage.setItem("listWinners", JSON.stringify(value));
  },
  getListWinner: () => {
    return localStorage.getItem("listWinners")
      ? JSON.parse(localStorage.getItem("listWinners"))
      : [];
  },
};

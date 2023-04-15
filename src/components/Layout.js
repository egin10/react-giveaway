import { useState } from "react";
import Contestant from "./Contestant";
import Home from "./Home";
import Header from "./Header";
import Winner from "./Winner";
import Setting from "./Setting";

function Layout() {
  const pages = [
    {
      name: "",
      page: <Home />,
    },
    {
      name: "Contestants",
      page: <Contestant />,
    },
    {
      name: "The Winners",
      page: <Winner />,
    },
    {
      name: "Settings",
      page: <Setting />,
    },
  ];
  const [selectedPage, setSelectedPage] = useState(pages[0]);

  return (
    <div className="w-full h-screen bg-pink-600 flex flex-col">
      <Header pages={pages} setSelectedPage={setSelectedPage} />

      {selectedPage.page}
    </div>
  );
}

export default Layout;

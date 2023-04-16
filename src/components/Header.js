function Header({ pages, setSelectedPage }) {
  return (
    <div className="flex h-min justify-between items-center p-5 sticky top-0">
      <div
        className="bg-white rounded-full p-2 hover:cursor-pointer"
        onClick={() => setSelectedPage(pages[0])}
      >
        <img src="icon.png" alt="icon.png" width={30} height={30} />
      </div>

      <div className="h-full flex space-x-4">
        {pages.map((page, index) =>
          index !== 0 ? (
            <div
              key={index}
              className="hover:border-[3px] border-white flex justify-center items-center px-3 rounded-full text-white text-2xl hover:cursor-pointer"
              onClick={() => setSelectedPage(page)}
            >
              <h3 className="">{page.name}</h3>
            </div>
          ) : (
            <div key={index}></div>
          )
        )}
      </div>
    </div>
  );
}

export default Header;

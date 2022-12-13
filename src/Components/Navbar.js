import { Link } from "react-router-dom";

const Navbar = ({
  success,
  userEmail,
  userName,
  menuToggle,
  isOpen,
  menuClose,
}) => {
  const logOut = () => {
    success(false);
  };

  return (
    <div className="fixed w-full">
      <nav className=" flex items-center justify-between flex-wrap bg-black p-6">
        <div
          onClick={menuClose}
          className="flex items-center justify-between flex-shrink-0 text-white mr-6 "
        >
          <Link
            to="/"
            className="font-semibold text-xl tracking-tight cursor-pointer"
          >
            The <span className="text-teal-500">Plug</span>
          </Link>
        </div>

        <div>
          {success ? (
            <section>
              <div>
                <button
                  onClick={menuToggle}
                  type="button"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <img
                    className="w-8 h-8  rounded-full p-1 ring-2 ring-teal-600 
                  hover:ring-gray-900"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt="Random User"
                  />
                </button>
              </div>

              <div
                className={
                  isOpen
                    ? "absolute right-0 z-10 mt-3 w-56 origin-top-right bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                    : "hidden"
                }
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div
                  className="absolute right-0 z-10  w-56 origin-top-right divide-y divide-gray-900  bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div>
                    <div className="pt-2 px-3 flex" role="none">
                      <img
                        className="w-8 h-8  rounded-full p-1"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="Random User"
                      />
                      <p className="text-gray-700 block px-2 pt-2 text-sm">
                        {userName}
                      </p>
                    </div>
                    <p className="text-gray-700 block px-4 pb-2 text-sm">
                      {userEmail}
                    </p>
                  </div>
                  <div classNameName="py-1" role="none">
                    <Link
                      to="/Account"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      My Account
                    </Link>
                    <Link
                      to="/Favorites"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                    >
                      My Favorites
                    </Link>
                  </div>
                  <div className="py-1" role="none">
                    <Link
                      onClick={logOut}
                      to="/"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-6"
                    >
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <Link
              to="/Login"
              className=" text-md px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white-500 hover:bg-white mt-1 lg:mt-0"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className=" grid place-items-center pt-32">
      <h1 className="text-black py-12 flex justify-center items-center font-bold text-3xl">
        My Account
      </h1>
      <div className="block md:flex w-94 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="btn-1 pb-2">
          <button
            type="button"
            className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800 w-80"
          >
            <Link to="/Account">My Account</Link>
          </button>
        </div>

        <div className="btn-2">
          <button
            type="button"
            className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800 w-80"
          >
            <Link to="/Favorites">My Favorites</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;

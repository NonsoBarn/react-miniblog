import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-auto">
      <footer className="p-4 bg-black shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="font-semibold text-xl tracking-tight cursor-pointer text-white"
          >
            The <span className="text-teal-500">Plug</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-2 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:text-teal-600 md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-teal-600 md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-teal-600 md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 md:my-4" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link to="top" className="hover:underline">
            The Plug™
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;

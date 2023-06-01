import { Link } from "react-router-dom";
import AccountIcon from "../assets/account.svg";
import SettingsIcon from "../assets/settings.svg";
import NotificationIcon from "../assets/notifications.svg";
import InvestmentIcon from "../assets/investment.svg";
import TransactionIcon from "../assets/transaction.svg";
import LogoutIcon from "../assets/logout.svg";
import ArrowIcon from "../assets/arrow.svg";

const Menu: React.FC<any> = ({ settingsClicked }) => {
  return (
    <>
      <div className="fixed z-50 bg-white top-0 bottom-0 left-0 right-0 bg-opacity-80">
        <button
          onClick={() => settingsClicked()}
          className="h-8 w-8 rounded-full bg-primary absolute right-4 top-4 lead-tight text-lg font-semibold text-white hover bg-opacity-90"
        >
          x
        </button>

        <div className="mt-12 md:m-12 md:mt-16 ">
          <ul className="flex flex-col gap-6 text-gray-800 font-semibold text-lg p-12 w-full md:w-1/2 lg:w-1/3">
            <li className="hover:text-gray-700">
              <Link to="/" className="flex items-center gap-3 ">
                <img src={SettingsIcon} className="w-6" />
                Settings
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/" className="flex items-center gap-3 ">
                <img src={AccountIcon} className="w-6" />
                Edit Profile
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/" className="flex items-center gap-3 ">
                <img src={NotificationIcon} className="w-6" />
                Notification
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/" className="flex items-center gap-3 ">
                <img src={InvestmentIcon} className="w-6" />
                Investment
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/" className="flex items-center gap-3 ">
                <img src={TransactionIcon} className="w-6" />
                Transaction History
              </Link>
            </li>
          </ul>
          <div className="border w-full border-gray-500 my-6"></div>
          <ul className="flex flex-col gap-6 text-gray-800 font-semibold text-lg p-12 w-full md:w-1/2 lg:w-1/3">
            <li className="hover:text-gray-700">
              <Link to="/" className="flex items-center justify-between ">
                Support
                <img src={ArrowIcon} className="w-6" />
              </Link>
            </li>
            <li className="hover:text-gray-700 flex flex-col gap-3">
              Dark Mode
              <label className="relative inline-flex items-center cursor-pointer w-fit">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-16 h-6 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['off'] after:text-xs after:text-center after:absolute after:top-0 after:left-0 after:bg-primary after:text-white after:font-semibold after:leading-5 after:rounded-full after:h-6 after:w-10 after:transition-all peer-checked:after:-left-[14px] peer-checked:after:content-['on']"></div>
              </label>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/" className="flex items-center gap-3 ">
                <img src={LogoutIcon} className="w-6" />
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;

import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col text-center justify-center gap-2 py-2">
            <div className="log">
                <img src={logo} className="w-[300px] mx-auto" alt="" />
            </div>
            <h2 className="text-gray-400">Journalism Wihout Fear or Favorite</h2>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;
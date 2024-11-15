import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Find = () => {
    return (
        <div>
            <h1 className='font-bold'>Find Us On</h1>
            <div className="flex flex-col  space-y-3 w-full">
                <div className="join join-vertical *:bg-slate-100">
                    <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
                    <button className="btn join-item justify-start"><FaTwitter />Twitter</button>
                    <button className="btn join-item justify-start"><FaInstagramSquare />Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default Find;
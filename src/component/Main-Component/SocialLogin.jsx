import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold'>Login With</h1>
            <div className="flex flex-col  space-y-3 w-full">
            <button className="btn"><FaGoogle />Login With Google</button>
            <button className="btn"><FaGithub />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;
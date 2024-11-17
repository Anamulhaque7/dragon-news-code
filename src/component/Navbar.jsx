import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <div className="flex justify-between items-center">
            <div>{user && user.email}</div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div>
                    {

                        user && user?.email ? (
                            <div>
                                <img className="rounded-full w-10 h-10 bg-none" src={user?.photoURL} alt="" />
                                <p>{user.displayName}</p>
                            </div>)
                            :
                            (<Link to="/auth/register"> <img src={userIcon} alt="" /></Link>)
                    }

                </div>
                {
                    user && user?.email ? (<button onClick={logout} className="btn btn-neutral rounded-none">Log-out</button>) : (<Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>)
                }

            </div>
        </div>
    );
};

export default Navbar;
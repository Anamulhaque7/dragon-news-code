import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";


const Register = () => {
    const { creatNewUser, setUser, updateUseProfile } = useContext(AuthContext)
    const [error, setError] = useState({})
    const navigate = useNavigate();
    const handelSubmit = (e) => {
        e.preventDefault();
        // get from data

        const form = new FormData(e.target)
        const name = form.get('name')
        if (name.length < 5) {
            setError({ ...error, name: 'must be more then 5 charact long' })
            return;
        }
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')

        creatNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                updateUseProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')
                    })
                    .catch((err => {
                        console.log(err)
                    }))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)

            });
    };

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="card bg-base-100 rounded-none w-full max-w-sm lg:max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handelSubmit} className="card-body">
                        <h1 className="font-bold text-center py-7">Register your account</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="text" name="name" placeholder="enter your name" className="input input-bordered" />
                            {
                                error && <label className="lable text-xs text-red-500">
                                    {
                                        error.name
                                    }
                                </label>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold mb-5">Don't Have An Account ? <Link to='/auth/login' className=" underline text-red-600 ">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
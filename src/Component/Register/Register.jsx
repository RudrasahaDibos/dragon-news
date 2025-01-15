import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {
    return (
        <div className="bg-base-200">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className=" bg-base-200  mt-10">
                <div className="hero-content ">

                    <div className="card bg-base-100 rounded-lg md:w-2/5 shadow-2xl  p-10 ">
                        <div className="text-center mb-10 ">
                            <h1 className="text-3xl font-bold">Login Your Account</h1>
                        </div>
                        <hr />
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" name="Name" placeholder="Enter your Name" className="input bg-base-200 " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Photo Url</span>
                                </label>
                                <input type="image" name="image" placeholder="Enter Photo Url" className="input bg-base-200 " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email address" className="input  bg-base-200 " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter Your password " className="input bg-base-200" required />
                                <div className="flex  items-center gap-2 mt-2">
                                     <input type="checkbox" name="Checked" id="" />
                                     <a href="#" className="label-text-alt link link-hover">Accept Term & Conditions</a>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Register</button>
                            </div>
                            <h1 className="p-4 text-center">Already You Have an Account ? <Link to='/login' className="text-red-600">Login</Link></h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
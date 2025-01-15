import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const Login = () => {
  const {SigninUser} =  useContext(AuthContext)
    const handleLogin =(e)=>{
        e.preventDefault()
        const form = new FormData(e.cuurentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)

        // SignUser
        SigninUser(email,password)
        .then(result =>{
           console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
         <div className="bg-base-200">
            <div className="">
            <Navbar></Navbar>
            </div>
            <div className="  min-h-screen mt-10">
            <div className="hero-content ">
               
                <div className="card bg-base-100 rounded-lg md:w-2/5 shadow-2xl  p-10 ">
                   <div className="text-center mb-10 ">
                     <h1 className="text-3xl font-bold">Login Your Account</h1>
                   </div>
                   <hr />
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input type="password" name="password" placeholder="Enter Your password " className="input  bg-base-200" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                        <h1 className="p-4 text-center">Dont’t Have An Account ? <Link to='/register' className="text-red-600">Register</Link></h1>
                    </form>
                </div>
            </div>
        </div>
         </div>
    );
};

export default Login;
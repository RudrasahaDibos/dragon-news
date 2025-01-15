import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import img1 from '../../../assets/swimming.png'
import img2 from '../../../assets/playground.png'
import img3 from '../../../assets/class.png'

const RightSideNav = () => {
    return (
        <div>
            {/* LOGIN IN */}
            <div>
                <h1 className="text-2xl font-bold ml-4">Login With</h1>

                <div className="p-4 space-y-3">
                    <div >
                        <button className="btn btn-outline btn-primary w-full p-4 ">
                            <FaGoogle />
                            Login With Google</button>
                    </div>
                    <div>
                        <button className="btn btn-outline btn-ghost w-full p-4">
                            <FaGithub />
                            Login With GitHub</button>
                    </div>
                </div>

            </div>
            {/* Find Us On  */}
            <div className="p-4 mb-6">
                <h1 className="text-xl font-bold ">Find Us On </h1>
                <a className="flex items-center text-lg p-4 mt-3 rounded-t-lg border">
                    <FaFacebook className="mr-3 text-primary"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="flex items-center text-lg p-4 border-l border-r">
                    <FaTwitter className="mr-3 text-blue-700"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="flex items-center text-lg p-4 rounded-b-lg border">
                    <FaInstagram className="mr-3 text-secondary"></FaInstagram>
                    <span>Instagram</span>
                </a>

            </div>

            {/* Quick Q start here */}
            <div className="p-4 mb-6 bg-[#F3F3F3]">
                <h1 className="text-xl font-bold ">Q - Zone </h1>
                 <img src={img1} alt="" />
                 <img src={img2} alt="" />
                 <img src={img3} alt="" />
                
            </div>
            {/* Quick Q End here */}

        </div>
    );
};

export default RightSideNav;
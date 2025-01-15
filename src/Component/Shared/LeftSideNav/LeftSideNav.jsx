import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [Catagories, setCatagories] = useState([])
    useEffect(() => {
        fetch('Catagories.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div className="space-y-6">
            <h1 className="text-3xl ">All Catagories</h1>
            {
                Catagories.map(Catagory => <li className='block ml-4 text-2xl font-blod '
                    
                    key={Catagory.id}>

                    <NavLink to={`/catagory/${Catagory.id}`} 
                    className={({isActive})=> isActive ? 'bg-primary': ''}
                    >

                        {Catagory.name}
                    </NavLink>
                </li>)
            }
        </div>
    );
};

export default LeftSideNav;
import moment from 'moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
               <div className='flex justify-center items-center'>
               <img  src={logo} alt="" />
               </div>
               <h1>Journalism Without Fear or Favour</h1>
               <p>{moment().format('MMMM D YYYY')}</p>
        </div>
    );
};

export default Header;
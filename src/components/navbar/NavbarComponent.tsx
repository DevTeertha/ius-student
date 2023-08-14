import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { clearStorage } from '../../shared/service/storageService';
import { ToastContext } from '../../shared/components/toast/Toast';

function NavbarComponent() {
  const { successState, messageState } = useContext(ToastContext);
  const setIsSuccess = successState[1];
  const setMessage = messageState[1];

  const navigate = useNavigate();

  const logout = () => {
    clearStorage();
    setIsSuccess(true);
    setMessage('Logout successfully');
    navigate('/login');
  };
  return (
    <div className='navbar bg-neutral text-neutral-content px-5'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </label>
        </div>
        <Link to={'/dashboard'} className='btn btn-ghost normal-case text-xl'>
          IUS Student
        </Link>
      </div>
      <div className='navbar-end'>
        <a onClick={logout} className='btn'>
          Sign Out
        </a>
      </div>
    </div>
  );
}

export default NavbarComponent;

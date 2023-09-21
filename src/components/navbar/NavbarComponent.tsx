import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { clearStorage } from '../../shared/service/storageService';
import { ToastContext } from '../../shared/components/toast/Toast';

import { StateContext } from '../../App';

function NavbarComponent() {
  const { successState, messageState } = useContext(ToastContext);
  const setIsSuccess = successState[1];
  const setMessage = messageState[1];
  const { adminState } = useContext(StateContext);
  const [isAdmin, setIsAdmin] = adminState;

  const navigate = useNavigate();

  const logout = () => {
    clearStorage();
    setIsSuccess(true);
    setMessage('Logout successfully');
    setIsAdmin(() => false);
    navigate('/');
  };

  return (
    <div className='bg-neutral'>
      <div className='container'>
        <div className='navbar text-neutral-content px-5'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
                </svg>
              </label>
            </div>
            <Link to={'/'} className='btn btn-ghost normal-case text-xl'>
              IUS Student
            </Link>
          </div>
          <div className='navbar-end'>
            {isAdmin ? (
              <a onClick={logout} className='btn'>
                Sign Out
              </a>
            ) : (
              <Link to={'/login'}>
                <a type='button' className='btn'>
                  Sign In
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;

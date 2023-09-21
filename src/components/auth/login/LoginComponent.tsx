import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ILoginPayload } from './login.interface';
import { EToastStatusType } from '../../../shared/interface/toast.interface';

import { postLogin } from './loginService';
import { setToken } from '../../../shared/service/storageService';
import { getErrorResponse } from '../../../shared/service/utilService';

import Toast, { ToastContext } from '../../../shared/components/toast/Toast';
import { StateContext } from '../../../App';

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPayload>();
  const [loading, setLoading] = useState<boolean>(false);
  const { errorState, successState, messageState } = useContext(ToastContext);
  const [isError, setIsError] = errorState;
  const [isSuccess, setIsSuccess] = successState;
  const [message, setMessage] = messageState;
  const navigate = useNavigate();

  const { adminState } = useContext(StateContext);
  const setIsAdmin = adminState[1];

  const onSubmit = async (data: ILoginPayload): Promise<void> => {
    try {
      setLoading(true);
      const loginResponse = await postLogin(data);
      setToken(loginResponse.data.access_token);
      setMessage(loginResponse.message);
      setLoading(false);
      setIsSuccess(true);
      navigate('/');
      setIsAdmin(loginResponse?.data?.access_token ? true : false);
    } catch (error) {
      const errorResponse = getErrorResponse(error);
      setMessage(errorResponse.message);
      setLoading(false);
      setIsError(true);
      setIsAdmin(false);
    }
  };

  return (
    <>
      {isSuccess && <Toast status={EToastStatusType.SUCCESS} state={[isSuccess, setIsSuccess]} message={message} />}
      {isError && <Toast status={EToastStatusType.ERROR} state={[isError, setIsError]} message={message} />}
      <div className='login-container'>
        <div className='login-card md:w-[500px] w-full bg-white drop-shadow-lg p-4 w-50 rounded-lg'>
          <h1 className='text-3xl font-semibold text-center text-gray-800'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input {...register('username', { required: true })} type='text' placeholder='Enter Username' className='w-full input input-bordered input-gray' />
              {errors.username && <span className='text-red-600'>Username is required</span>}
            </div>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input {...register('password', { required: true })} type='password' placeholder='Enter Password' className='w-full input input-bordered input-gray' />
              {errors.password && <span className='text-red-600'>Password is required</span>}
            </div>
            <div className='mt-3'>
              <button disabled={loading} className='btn btn-dark bg-gray-800 text-white hover:bg-gray-900 hover:text-white'>
                {loading && <span className='loading loading-ring loading-md'></span>}Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;

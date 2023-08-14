import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ILoginPayload } from './login.interface';
import { EToastStatusType } from '../../../shared/interface/toastProps.interface';

import { postLogin } from './loginService';
import { setToken } from '../../../shared/service/storageService';
import { getErrorResponse } from '../../../shared/service/utilService';

import Toast from '../../../shared/components/toast/Toast';

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPayload>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  const onSubmit = async (data: ILoginPayload): Promise<void> => {
    try {
      setLoading(true);
      const loginResponse = await postLogin(data);
      setToken(loginResponse.data.access_token);
      setMessage(loginResponse.message);
      setLoading(false);
      setIsSuccess(true);
      navigate('/');
    } catch (error) {
      const errorResponse = getErrorResponse(error);
      setMessage(errorResponse.message);
      setLoading(false);
      setIsError(true);
    }
  };

  return (
    <>
      {isSuccess && <Toast status={EToastStatusType.SUCCESS} state={[isSuccess, setIsSuccess]} message={message} />}
      {isError && <Toast status={EToastStatusType.ERROR} state={[isError, setIsError]} message={message} />}
      <div className='login-container'>
        <div className='login-card md:w-6/12 w-full bg-white drop-shadow-lg p-4 w-50'>
          <h1 className='text-3xl font-semibold text-center text-primary'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input {...register('username', { required: true })} type='text' placeholder='Enter Username' className='w-full input input-bordered input-primary' />
              {errors.username && <span>Username is required</span>}
            </div>
            <div>
              <label className='label'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input {...register('password', { required: true })} type='password' placeholder='Enter Password' className='w-full input input-bordered input-primary' />
              {errors.password && <span>Password is required</span>}
            </div>
            <div className='mt-3'>
              <button disabled={loading} className='btn btn-primary'>
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

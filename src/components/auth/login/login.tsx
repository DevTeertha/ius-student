import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ILoginPayload } from './login.interface';
import { postLogin } from './loginService';

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPayload>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ILoginPayload): Promise<void> => {
    setLoading(true);
    const loginResponse = await postLogin(data);
    console.log('loginResponse: ', loginResponse);
    setLoading(false);
  };

  return (
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
  );
}

export default LoginComponent;

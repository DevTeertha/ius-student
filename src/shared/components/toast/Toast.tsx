import { useEffect, createContext } from 'react';
import { Alert } from 'react-daisyui';

import { toastConfig } from './config';

import { EToastStatusType, IToastContext, IToastProps } from '../../interface/toast.interface';

export const ToastContext = createContext<IToastContext | null>(null);

function Toast({ message, state, status = 'success' }: IToastProps) {
  const [isTrigger, setIsTrigger] = state;
  useEffect(() => {
    setTimeout(() => {
      setIsTrigger(false);
    }, toastConfig.timeout);
  }, [isTrigger, message]);

  return (
    isTrigger && (
      <div className='toast toast-center'>
        <Alert status={status} icon={GetIcon(status)}>
          <div>
            <span>{message}</span>
          </div>
        </Alert>
      </div>
    )
  );
}

export default Toast;

function GetIcon(status: string) {
  if (EToastStatusType.SUCCESS === status)
    return (
      <svg xmlns='http://www.w3.org/2000/svg' className='stroke-current shrink-0 h-6 w-6' fill='none' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    );

  if (EToastStatusType.ERROR === status)
    return (
      <svg xmlns='http://www.w3.org/2000/svg' className='stroke-current shrink-0 h-6 w-6' fill='none' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    );
}

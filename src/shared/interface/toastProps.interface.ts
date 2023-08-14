import { Dispatch, SetStateAction } from 'react';

export interface IToastProps {
  status: 'info' | 'success' | 'warning' | 'error' | undefined;
  message: string;
  state: [boolean, Dispatch<SetStateAction<boolean>>];
}

export enum EToastStatusType {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

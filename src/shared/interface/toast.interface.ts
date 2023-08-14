import { Dispatch, SetStateAction } from 'react';

export interface IToastProps {
  status: 'info' | 'success' | 'warning' | 'error' | undefined;
  message: string;
  state: [boolean, Dispatch<SetStateAction<boolean>>];
}

export interface IToastContext {
  errorState: [boolean, Dispatch<SetStateAction<boolean>>];
  successState: [boolean, Dispatch<SetStateAction<boolean>>];
  messageState: [string, Dispatch<SetStateAction<string>>];
}

export enum EToastStatusType {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

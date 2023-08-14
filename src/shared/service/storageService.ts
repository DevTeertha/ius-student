export enum EStorageKey {
  TOKEN = 'ius-student-token',
}

export const setToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(EStorageKey.TOKEN, token);
  }
};

export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(EStorageKey.TOKEN);
  } else {
    return null;
  }
};

export const clearStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.clear();
  } else {
    return null;
  }
};

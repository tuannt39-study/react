import { createContext, ReactNode } from 'react';

interface ProgressContextProviderProps {
  children: ReactNode;
}

export interface ProgressContextDefault {
  lastTime: string;
  status: string;
}

const progressDataDefault: ProgressContextDefault = {
  lastTime: '16/09/2021',
  status: 'In progress',
};

export const ProgressContext = createContext<ProgressContextDefault>(progressDataDefault);

export const ProgressContextProvider = (props: ProgressContextProviderProps) => {
  const { children } = props;
  return (
    <ProgressContext.Provider value={progressDataDefault}>{children}</ProgressContext.Provider>
  );
};

export default ProgressContextProvider;

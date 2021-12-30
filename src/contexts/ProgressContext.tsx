import { createContext, ReactNode } from 'react';
interface ProgressContextDefault {
  status: string;
  lastTime: string;
}
const ProgressDefault = {
  status: 'In progress',
  lastTime: '12/30/2021',
};
export const ProgressContext =
  createContext<ProgressContextDefault>(ProgressDefault);
interface ProgressContextProviderProps {
  children: ReactNode;
}
const ProgressProvider = ({ children }: ProgressContextProviderProps) => {
  return (
    <ProgressContext.Provider value={ProgressDefault}>
      {children}
    </ProgressContext.Provider>
  );
};
export default ProgressProvider;

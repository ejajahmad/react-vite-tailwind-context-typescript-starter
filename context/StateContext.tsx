import React, { createContext, useContext, useState } from 'react';

type StateContextType = {
    count: number;
    setCount: (count: number) => void;
};

const Context = createContext<StateContextType | undefined>(undefined);

type Props = {
    children: React.ReactNode;
};

export const StateContext = ({ children }: Props) => {
    const [count, setCount] = useState(0);

    return (
        <Context.Provider
            value={{
                count,
                setCount,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = (): StateContextType | undefined => useContext(Context);

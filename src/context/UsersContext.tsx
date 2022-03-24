import useSWR from 'swr';
import { createContext } from 'react';

const UsersContext = createContext({});

// @ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

const UsersContextProvider = ({ children }: any) => {
    const { data, error } = useSWR(
        `https://${process.env.REACT_APP_HOSTNAME}/get-users`,
        fetcher
    );

    return (
        <UsersContext.Provider value={{ data, error }}>
            {children}
        </UsersContext.Provider>
    );
};

export { UsersContext, UsersContextProvider };

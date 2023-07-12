import React, { createContext, useContext, useState } from 'react';

type SetUserContextType = (user: string) => void;

interface UserContextType {
    user: string;
    setUserContext: SetUserContextType;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<any> = ({ children }) => {
    const [user, setUser] = useState<string>('');

    const setUserContext: SetUserContextType = (newUser) => {
        setUser(newUser);
    };

    const contextValue: UserContextType = {
        user,
        setUserContext,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser debe ser usado dentro de UserProvider');
    }
    return context;
};

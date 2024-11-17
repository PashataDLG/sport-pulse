import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

interface AppContextValue {
    isDrawerOpen: boolean;
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
    handleDrawerToggle: ( reason?: string) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const useAppContext = () => {
    const appContext = useContext(AppContext);
    if (!appContext) {
        throw new Error('useAppContext must be used within AppContextProvider');
    };

    return appContext;
};

interface AppContextProviderProps {
    children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = (reason?: string) => {
        if (isDrawerOpen && reason === 'backdropClick') {
            setIsDrawerOpen(false);
        } else if (!isDrawerOpen) {
            setIsDrawerOpen(true);
        }
    };

    const values = {
        isDrawerOpen,
        setIsDrawerOpen,
        handleDrawerToggle
    };

    return (
        <AppContext.Provider value={values}>
            { children }
        </AppContext.Provider>
    );
};
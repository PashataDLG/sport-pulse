import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

interface AppContextValue {
    isDrawerOpen: boolean;
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
    handleDrawerToggle: (event: Event, reason?: string) => void;
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

type Event = React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>;

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = (_: Event, reason?: string) => {
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
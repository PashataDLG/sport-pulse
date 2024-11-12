import { createContext, useContext, useState } from 'react';

interface TeamPageContextValue {
    selectedButton: number | null;
    setSelectedButton: (index: number) => void;
};

export const TeamPageContext = createContext<TeamPageContextValue | undefined>(undefined);

export const TeamPageProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedButton, setSelectedButton] = useState<number | null>(null);

    const values = {
        selectedButton,
        setSelectedButton,
    };

    return (
        <TeamPageContext.Provider value={values}>
            {children}
        </TeamPageContext.Provider>
    );
};
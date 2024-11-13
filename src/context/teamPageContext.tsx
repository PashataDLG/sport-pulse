import { createContext, useState, ReactNode, useContext } from 'react';

interface TeamPageContextValue {
    selectedButton: number | null;
    handleButtonClick: (index: number) => void;
};

export const useTeamPageContext = () => {
    const teamContext = useContext(TeamPageContext);
    if (!teamContext) {
        throw new Error('useTeamPageContext must be used within TeamPageProvider');
    };

    return teamContext;
};

export const TeamPageContext = createContext<TeamPageContextValue | undefined>(undefined);

export const TeamPageProvider = ({ children }: { children: ReactNode }) => {
    const [selectedButton, setSelectedButton] = useState<number | null>(null);

    const handleButtonClick = (index: number) => {
        setSelectedButton(index);
    };

    const values = {
        selectedButton,
        handleButtonClick,
    };

    return (
        <TeamPageContext.Provider value={values}>
            {children}
        </TeamPageContext.Provider>
    );
};
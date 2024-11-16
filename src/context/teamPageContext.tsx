import { createContext, useState, ReactNode, useContext } from 'react';

interface TeamPageContextValue {
    selectedButton: number | null;
    handleButtonClick: (index: number) => void;
    setSelectedButton: React.Dispatch<React.SetStateAction<number>>;
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
    const [selectedButton, setSelectedButton] = useState<number>(0);

    const handleButtonClick = (index: number) => {
        setSelectedButton(index);
    };

    const values = {
        selectedButton,
        handleButtonClick,
        setSelectedButton,
    };

    return (
        <TeamPageContext.Provider value={values}>
            {children}
        </TeamPageContext.Provider>
    );
};
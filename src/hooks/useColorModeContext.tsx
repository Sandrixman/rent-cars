import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface ChildrenProps {
    children: ReactNode;
}

interface ColorModeContextProps {
    mode: ThemeType;
    toggleColorMode: () => void;
}

type ThemeType = 'light' | 'dark';

const ColorModeContext = createContext<ColorModeContextProps | null>(null);

export const useColorModeContext = () => {
    const context = useContext(ColorModeContext);
    if (context === null) {
        throw new Error('context is null');
    }
    return context;
};

export const ColorModeProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [mode, setMode] = useState<ThemeType>('light');

    useEffect(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode) {
            setMode(JSON.parse(savedMode));
        }
    }, []);

    const colorMode = {
        mode,
        toggleColorMode: () => {
            const newMode = mode === 'light' ? 'dark' : 'light';
            setMode(newMode);
            localStorage.setItem('theme', JSON.stringify(newMode));
        },
    };

    return <ColorModeContext.Provider value={colorMode}>{children}</ColorModeContext.Provider>;
};

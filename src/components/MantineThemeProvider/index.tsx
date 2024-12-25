import React from "react";
import { MantineProvider } from "@mantine/core";


interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return (
        <MantineProvider
            defaultColorScheme="auto"
        >
            {children}
        </MantineProvider>
    );
}
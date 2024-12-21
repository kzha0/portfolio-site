import React from "react";
import { Flex, ScrollArea } from "@mantine/core";

import { Header } from "~/components/Header/Header";
import { DotBackground } from "../Background/DotBackground";

/* -------------------------------------------------------------------------- */

export interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <Flex direction="column">
            <ScrollArea.Autosize>
                <DotBackground>
                    <Header />
                    {children}
                </DotBackground>
            </ScrollArea.Autosize>
        </Flex>
    );
};

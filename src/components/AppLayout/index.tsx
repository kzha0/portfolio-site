import React from "react";
import { useHeadroom } from "@mantine/hooks";
import { Flex, ScrollArea, AppShell, useMantineColorScheme } from "@mantine/core";

import { Header } from "./Header";

/* -------------------------------------------------------------------------- */

export const HEADER_HEIGHT = 60;

export interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const { colorScheme } = useMantineColorScheme();
    const pinned = useHeadroom({ fixedAt: 120 });

    return (
        <Flex direction="column" bg={colorScheme === "dark" ? "black" : undefined}>
            <ScrollArea.Autosize>
                <AppShell header={{ height: HEADER_HEIGHT, collapsed: !pinned, offset: false }}>
                    <AppShell.Header
                        style={{
                            backdropFilter: "blur(10px)",
                            background: "transparent",
                            border: "unset",
                            display: "flex",
                            overflow: "visible",
                            justifyContent: "center",
                        }}
                    >
                        <Header />
                    </AppShell.Header>
                    <AppShell.Main>{children}</AppShell.Main>
                </AppShell>
            </ScrollArea.Autosize>
        </Flex>
    );
};

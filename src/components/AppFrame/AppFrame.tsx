import { useHeadroom, useDisclosure } from "@mantine/hooks";
import { ScrollArea, AppShell } from "@mantine/core";

import { ThemeProvider } from "./Theme";
import { NavContextProvider } from "./NavContext";
import { Header, Sidenav } from "./Nav";
import { Footer } from "./Footer";

/* -------------------------------------------------------------------------- */

export const headerHeight = 60;
export const mobileBreakpoint = "sm";
export const backgroundBlur: React.CSSProperties = {
    backgroundColor: `light-dark(rgba(255, 255, 255, 0.65), rgba(0, 0, 0, 0.85))`,
    backdropFilter: "blur(5px)",
};

export const AppFrame: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [sidenavOpened, { toggle: toggleSidenav }] = useDisclosure(false);
    const isHeaderPinned = useHeadroom({ fixedAt: headerHeight });

    return (
        <ThemeProvider>
            <NavContextProvider {...{ sidenavOpened, toggleSidenav }}>
                <ScrollArea.Autosize>
                    <AppShell
                        transitionDuration={500}
                        header={{
                            height: headerHeight,
                            collapsed: !isHeaderPinned && !sidenavOpened,
                            offset: false,
                        }}
                        navbar={{
                            width: "100%",
                            breakpoint: mobileBreakpoint,
                            collapsed: { mobile: !sidenavOpened, desktop: true },
                        }}
                    >
                        <AppShell.Header
                            withBorder={false}
                            bg="transparent"
                            zIndex={201}
                        >
                            <Header />
                        </AppShell.Header>
                        <AppShell.Navbar
                            withBorder={false}
                            bg="transparent"
                            mt={headerHeight}
                        >
                            <div
                                style={{
                                    ...backgroundBlur,
                                    height: "100%",
                                    opacity: !sidenavOpened ? 0 : 1,
                                    transition: "opacity 0.7s ease, backdrop-filter 0.7s ease",
                                }}
                            >
                                <Sidenav />
                            </div>
                        </AppShell.Navbar>
                        <AppShell.Main
                            mt={headerHeight}
                            mih={`calc(100dvh - ${headerHeight}px)`}
                            display="flex"
                            style={{ flexDirection: "column" }}
                        >
                            <div
                                style={{
                                    flex: 1,
                                    minHeight: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {children}
                            </div>
                            <Footer />
                        </AppShell.Main>
                    </AppShell>
                </ScrollArea.Autosize>
            </NavContextProvider>
        </ThemeProvider>
    );
};

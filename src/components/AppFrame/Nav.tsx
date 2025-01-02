import React, { useCallback } from "react";
import { useNavigate, useLocation } from "@remix-run/react";
import { useHover } from "@mantine/hooks";
import {
    useMantineColorScheme,
    useMantineTheme,
    MantineStyleProps,
    FlexProps,
    Flex,
    UnstyledButton,
    ActionIcon,
    Box,
    Burger,
    Text,
} from "@mantine/core";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";

import { useNavContext } from "./NavContext";
import { mobileBreakpoint, backgroundBlur } from "./AppFrame";

/* -------------------------------------------------------------------------- */

// MARK: navlink

interface NavlinkProps extends React.PropsWithChildren {
    to?: string;
    fz?: MantineStyleProps["fz"];
    fw?: MantineStyleProps["fw"];
}

const Navlink: React.FC<NavlinkProps> = ({ to = "", fz = 20, fw = 350, children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { hovered, ref: hoverRef } = useHover();
    const { sidenavOpened, toggleSidenav } = useNavContext();

    const handleClick = useCallback(() => {
        if (sidenavOpened) {
            toggleSidenav();
        }
        navigate(to);
    }, [sidenavOpened]);

    return (
        <Flex
            ref={hoverRef}
            pos="relative"
            maw="max-content"
        >
            <Flex
                // makes the underline longer
                px={4}
                align="center"
            >
                <UnstyledButton
                    h="min-content"
                    onClick={handleClick}
                    style={(theme) => ({
                        borderRadius: theme.radius.sm,
                        zIndex: 1,
                    })}
                >
                    <Text
                        {...{ fz, fw }}
                        lh={1}
                        mt={4}
                        mx={2}
                    >
                        {children}
                    </Text>
                </UnstyledButton>
            </Flex>
            <Box
                pos="absolute"
                h={3}
                w={hovered || location.pathname === to ? "100%" : 0}
                style={{
                    background: "var(--mantine-primary-color-filled)",
                    transition: "width 0.3s ease",
                    transform: "translateY(100%)",
                    top: "calc(100% + 2px)",
                    left: 0,
                }}
            />
        </Flex>
    );
};

/* -------------------------------------------------------------------------- */

// MARK: navlist

export const NavlinkList: React.FC<FlexProps> = ({ ...props }) => {
    return (
        <Flex
            gap="md"
            {...props}
        >
            <Navlink to="/blog">Blog</Navlink>
            <Navlink to="/projects">Projects</Navlink>
            <Navlink to="/about">About</Navlink>
            <Navlink to="/contact">Contact</Navlink>
        </Flex>
    );
};

/* -------------------------------------------------------------------------- */

// MARK: color

const ToggleColorScheme: React.FC = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const { hovered, ref } = useHover();

    return (
        <ActionIcon
            ref={ref}
            onClick={toggleColorScheme}
            variant="transparent"
            c="light-dark(black, white)"
            size="lg"
            // aria-label="toggle-color-scheme"
        >
            <Box
                component={colorScheme === "light" ? IconMoonFilled : IconSunFilled}
                style={{
                    transform: hovered ? "scale(1.2)" : undefined,
                    transition: "transform 0.2s ease",
                }}
                onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.7)")}
                onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
        </ActionIcon>
    );
};

/* -------------------------------------------------------------------------- */

// MARK: header

export const Header: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
    const theme = useMantineTheme();

    const { sidenavOpened, toggleSidenav } = useNavContext();

    return (
        <Flex
            h="100%"
            px="4rem"
            style={{ ...backgroundBlur }}
            align="center"
        >
            <Flex
                w="100%"
                maw={theme.breakpoints.xl}
                mx="auto"
                justify="space-between"
                align="flex-end"
            >
                <Flex gap="md">
                    {!disabled && (
                        <Burger
                            hiddenFrom={mobileBreakpoint}
                            opened={sidenavOpened}
                            onClick={toggleSidenav}
                            style={{ borderRadius: theme.radius.sm }}
                        />
                    )}
                    <Navlink
                        to="/"
                        fz={{ base: 24 }}
                        fw={700}
                    >
                        Jerrico Duran
                    </Navlink>
                </Flex>
                <Flex gap="md">
                    {!disabled && <NavlinkList visibleFrom={mobileBreakpoint} />}
                    <ToggleColorScheme />
                </Flex>
            </Flex>
        </Flex>
    );
};

/* -------------------------------------------------------------------------- */

// MARK: sidenav
export const Sidenav: React.FC = () => {
    return (
        <Flex p="4rem">
            <NavlinkList direction="column" />
        </Flex>
    );
};

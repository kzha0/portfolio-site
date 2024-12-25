import React from "react";
import { Flex, Text, UnstyledButton, ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";

export const Header: React.FC = () => {
    return (
        <Flex bg="transparent" h="100%" w="100%" maw={{ base: "70vw", xl: "50vw" }} px="xl" justify="space-between">
            <Flex align="center">
                <Text
                    fw={800}
                    fz={{ base: 18 }}
                >
                    jd.
                </Text>
            </Flex>
            <Flex align="center" gap="md">
                <HeaderNavLink>About Me</HeaderNavLink>
                <ToggleColorScheme />
            </Flex>
        </Flex>
    );
};

interface HeaderNavLinkProps {
    children: React.ReactNode;
}

const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({ children }) => {
    return (
        <UnstyledButton>
            <Text>{children}</Text>
        </UnstyledButton>
    );
};

const ToggleColorScheme: React.FC = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <ActionIcon
            onClick={toggleColorScheme}
            variant="transparent"
            color={colorScheme === "light" ? "black" : "white"}
            style={{ transition: "transform 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.3)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.7)"}
            onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
            {colorScheme === "light" ? <IconMoonFilled /> : <IconSunFilled />}
        </ActionIcon>
    );
};

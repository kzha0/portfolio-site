import cx from "classnames";
import styles from "./Header.module.css";
import fontStyles from "~/styles/fontStyles.module.css"

import {
    useMantineColorScheme,
    Group,
    Title,
    ActionIcon,
    Box,
    UnstyledButton,
    Text,
    Stack,
    Divider,
    Container,
    Transition,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { useState } from "react";

export interface HeaderProps {
    className?: string;
    children?: React.ReactNode;
}

export function Header({ className }: HeaderProps) {
    return (
        <header>
            <Box
                pr="xl"
                pl="xl"
                pt="xl"
                // pb="xl"
                style={(theme) => ({
                    borderBottom: 1,
                    borderBottomStyle: "solid",
                    borderBottomColor: theme.primaryShade,
                })}
            >
                <Group justify="space-between">
                    <Title className={fontStyles["bodoni-moda-font"]}>Jerrico Duran</Title>
                    <Group>
                        <UnderlineLinkText text="Projects" />
                        <UnderlineLinkText text="Blog" />
                        <UnderlineLinkText text="Contact" />
                        <ToggleColorScheme />
                    </Group>
                </Group>
            </Box>
        </header>
    );
}

function UnderlineLinkText({ text, children }: { text?: string; children?: React.ReactNode }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <UnstyledButton
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Container>
                <Text
                    className={styles["merriweather-regular"]}
                    size="xl"
                    style={{ position: "relative" }}
                >
                    {text ?? children ?? null}
                </Text>
                <Transition
                    mounted={isHovered}
                    transition="fade-right"
                    duration={400}
                    timingFunction="ease"
                    keepMounted
                >
                    {(transitionStyle) => (
                        <Box
                            style={(theme) => {
                                return {
                                    ...transitionStyle,
                                    ...(transitionStyle.display !== "none" ? { marginTop: -1 } : undefined),
                                    borderBottom: 1,
                                    // zIndex: 1,
                                    borderBottomStyle: "solid",
                                    borderBottomColor: theme.primaryShade,
                                };
                            }}
                        />
                    )}
                </Transition>
            </Container>
        </UnstyledButton>
    );
}

function ToggleColorScheme() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (
        <ActionIcon variant="outline" onClick={toggleColorScheme} title="Toggle color scheme">
            {colorScheme === "light" ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
    );
}

import { Link } from "@remix-run/react";
import { PaddedLayout } from "../Layouts";
import { Flex, Anchor } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { PropsWithChildren } from "react";

export const footerHeight = 60;

export const Footer: React.FC = () => {
    return (
        <PaddedLayout
            maw="md"
            style={{
                borderTop:
                    "1px solid light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-4))",
            }}
        >
            <Flex
                gap={{ sm: "4rem" }}
                direction={{ base: "column", sm: "row" }}
            >
                <LinkText to="https://www.linkedin.com/in/jerrico-duran/">LinkedIn</LinkText>
                <LinkText to="https://github.com/kzha0">GitHub</LinkText>
                <LinkText to="mailto://me@ricoduran.net">Email: me@ricoduran.net</LinkText>
            </Flex>
        </PaddedLayout>
    );
};

const LinkText: React.FC<PropsWithChildren & { to: string }> = ({ children, to }) => {
    const { hovered, ref } = useHover();

    return (
        <Anchor
            component={Link}
            {...{ to, ref }}
            underline="never"
            style={{
                color: hovered
                    ? "light-dark(black, var(--mantine-color-dark-2))"
                    : "light-dark(var(--mantine-color-dark-4), var(--mantine-color-dark-0))",
            }}
        >
            {children}
        </Anchor>
    );
};

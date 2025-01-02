import { Box, useMantineColorScheme } from "@mantine/core";

export interface InvertProps {
    children?: React.ReactNode;
}

export const Invert: React.FC<InvertProps> = ({ children }) => {
    const { colorScheme } = useMantineColorScheme();

    return (
        <Box
            w="auto"
            h="auto"
            style={(theme) => ({
                backgroundColor: colorScheme === "light" ? theme.black : theme.white,
                color: colorScheme === "light" ? theme.white : theme.black,
            })}
        >
            {children}
        </Box>
    );
};

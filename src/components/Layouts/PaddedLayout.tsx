import { useMantineTheme, MantineBreakpointsValues, FlexProps, Flex } from "@mantine/core";

export const PaddedLayout: React.FC<
    Pick<FlexProps, "px" | "py"> & { maw: keyof MantineBreakpointsValues } & React.PropsWithChildren
> = ({ px, py, maw = "sm", children }) => {
    const theme = useMantineTheme();
    return (
        <Flex
            px={px ?? "4rem"}
            py={py ?? "2rem"}
        >
            <Flex
                direction="column"
                maw={theme.breakpoints[maw]}
                w="100%"
                mx="auto"
            >
                {children}
            </Flex>
        </Flex>
    );
};

import { useMantineTheme, MantineBreakpointsValues, FlexProps, Flex } from "@mantine/core";

export const PaddedLayout: React.FC<
    Pick<FlexProps, "px" | "py" | "style"> & {
        maw?: keyof MantineBreakpointsValues;
    } & React.PropsWithChildren
> = ({ px, py, maw = "sm", style, children }) => {
    const theme = useMantineTheme();
    return (
        <Flex
            px={{ base: "xl", sm: "4rem" }}
            py="xl"
            {...{ style }}
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

export const PaddedVertical: React.FC<
    Pick<FlexProps, "px" | "py" | "style"> & React.PropsWithChildren
> = ({ px, py, style, children }) => {
    return (
        <Flex
            direction="column"
            w="100%"
            my="auto"
            align="center"
            justify="center"
            {...{ style }}
        >
            {children}
        </Flex>
    );
};

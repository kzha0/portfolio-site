import React from "react";
import { Flex, useMantineTheme, type MantineSpacing } from "@mantine/core";

export interface DotBackgroundProps {
    children?: React.ReactNode;
    dotSize?: MantineSpacing;
    dotSpace?: MantineSpacing;
}

export const DotBackground: React.FC<DotBackgroundProps> = ({
    children,
    dotSize = "1px",
    dotSpace = "28px",
}) => {
    const theme = useMantineTheme();
    const dotBg = theme.black;
    const dotColor = theme.white;

    return (
        <Flex
            direction="column"
            h="100vh"
            style={{
                background:
                    `linear-gradient(
                        90deg, ${dotBg} calc(${dotSpace} - ${dotSize}), transparent 1%)
                    center / ${dotSpace} ${dotSpace},
                    linear-gradient(${dotBg} calc(${dotSpace} - ${dotSize}), transparent 1%)
                    center / ${dotSpace} ${dotSpace}, ${dotColor}`,
            }}
        >
            {children}
        </Flex>
    );
};

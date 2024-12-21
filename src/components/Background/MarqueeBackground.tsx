import React from "react";
import { Flex, Text } from "@mantine/core";
import cx from "classnames";
import styles from "./MarqueeBackground.module.css";

export interface MarqueeBackgroundProps {
    marqueeText?: string;
}

export const MarqueeBackground: React.FC<MarqueeBackgroundProps> = ({
    marqueeText = "Some marquee text",
}) => {
    const textWall = Array.from({ length: 10 }).map((_, index) => {
        return (
            <Flex className={cx(styles.marquee)}>
                <Text
                    fz={55}
                    style={(theme) => ({
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        // outline: "solid 1px",
                        // color: "transparent",
                        fontWeight: "900",
                        fill: "none",
                        stroke: "black",
                        strokeWidth: ".5px",
                        strokeLinejoin: "round",
                        animation: "2s pulsate infinite",
                    })}
                >
                    {Array.from({ length: 5 }).reduce(
                        (last: string) => last + ` ${marqueeText}`,
                        marqueeText
                    )}
                </Text>
            </Flex>
        );
    });

    return <Flex direction="column">{textWall}</Flex>;
};

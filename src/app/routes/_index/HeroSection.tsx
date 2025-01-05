import { useWindowScroll } from "@mantine/hooks";
import { Box, Flex, Text, ActionIcon } from "@mantine/core";
import { IconArrowNarrowDown } from "@tabler/icons-react";

import { headerHeight } from "~/components/AppFrame";
import { CascadingWaves } from "~/components/CascadingWaves";

/* -------------------------------------------------------------------------- */

const defaultBorder =
    "1px solid light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-4))";

// MARK: x-area

const HorizontalGrid: React.FC = () => {
    const px = "10vw";
    const maw = "1119.4px";
    const offsetTextVertical: any = {
        pos: "relative",
        top: "clamp(-28.166px, -2vw, 0px)",
    };

    return (
        <Box>
            <Flex
                {...{ px }}
                style={{ borderTop: defaultBorder, borderBottom: defaultBorder }}
            >
                <Flex
                    {...{ maw }}
                    w="100%"
                    mx="auto"
                    {...offsetTextVertical}
                >
                    <MainText>JERRICO</MainText>
                </Flex>
            </Flex>
            <Flex
                {...{ px }}
                style={{ borderBottom: defaultBorder }}
            >
                <Flex
                    {...{ maw }}
                    w="100%"
                    mx="auto"
                    justify={{ base: "end", sm: "space-between" }}
                    gap="sm"
                >
                    <Box
                        visibleFrom="sm"
                        mt="sm"
                    >
                        <SubText />
                    </Box>
                    <Flex {...offsetTextVertical}>
                        <MainText>DURAN</MainText>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

/* -------------------------------------------------------------------------- */

// MARK: y-area

const VerticalGrid: React.FC = () => {
    return (
        <Flex
            pos="absolute"
            top="50%"
            left="50%"
            style={{ transform: "translate(-50%, -50%)", borderInline: defaultBorder }}
            maw="1154.8px"
            mah="419.547px"
            w="calc(100% - 18vw)"
            h="calc(100% + 4vw)"
        >
            <Box
                hiddenFrom="sm"
                pos="absolute"
                top="100%"
                px="sm"
            >
                <SubText />
            </Box>
        </Flex>
    );
};

/* -------------------------------------------------------------------------- */

const MainText: React.FC<React.PropsWithChildren> = ({ children }) => (
    <Text
        fw={400}
        fz="clamp(1rem, 16vw, 225.328px)"
        // fz="16vw"
        lh={0.8}
        style={{
            fontFamily: "'M PLUS 1 Code', serif",
        }}
    >
        {children}
    </Text>
);

const SubText = () => (
    <Text
        fz="clamp(1.2rem, 2.5vw, 35.2075px)"
        // fz="2.5vw"
        fw={{ base: 500, sm: 400 }}
        lh={1.4}
    >
        Business analyst. Fullstack programmer.
    </Text>
);

/* -------------------------------------------------------------------------- */

// MARK: titletext

const TitleText: React.FC = () => {
    return (
        <Flex
            direction="column"
            w="100%"
            pos="relative"
            style={{ zIndex: 1 }}
        >
            <HorizontalGrid />
            <VerticalGrid />
        </Flex>
    );
};

/* -------------------------------------------------------------------------- */

// MARK: downarr

const DownArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {

    // todo: OPTIMIZE
    // scroll listener is constantly updating state

    const [scroll, _] = useWindowScroll();

    return (
        <Flex
            direction="column"
            pos="absolute"
            top="100%"
            style={{ zIndex: 2 }}
        >
            <Flex
                pos="relative"
                style={{
                    transform: `translateY(clamp(-50px, -50px + ${scroll.y / 8}px, 0px))`,
                    transition: "transform 0.7s ease-in-out",
                }}
            >
                <ActionIcon
                    {...{ onClick }}
                    variant="transparent"
                    color="light-dark(var(--mantine-color-black), var(--mantine-color-white))"
                    size={32}
                >
                    <IconArrowNarrowDown size={28} />
                </ActionIcon>
            </Flex>
        </Flex>
    );
};

/* -------------------------------------------------------------------------- */

// MARK: herosec

export const HeroSection: React.FC<{ onArrowClick?: () => void }> = ({ onArrowClick }) => {
    return (
        <Flex
            pos="relative"
            mih={`calc(100dvh - ${headerHeight}px)`}
            h="100%"
            // hides the down arrow
            style={{ overflow: "hidden" }}
        >
            <Flex
                pos="absolute"
                mih="100dvh"
                w="100dvw"
                h="100%"
                align="center"
                justify="center"
                top={-headerHeight}
                direction="column"
            >
                <TitleText />
                <DownArrow onClick={onArrowClick} />
                <Flex pos="absolute">
                    <CascadingWaves />
                </Flex>
            </Flex>
        </Flex>
    );
};

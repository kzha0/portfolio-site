import cx from "classnames";
import styles from "./HomePage.module.css";
import { AspectRatio, Stack, Image, Flex, Overlay, Title, Container, Text } from "@mantine/core";

import { DotBackground } from "../Background/DotBackground";

import fontStyles from "~/styles/fontStyles.module.css";
import cityBg from "~/assets/img/bgcity.jpg";

export interface HomePageProps {
    className?: string;
    children?: React.ReactNode;
}

export function HomePage({ className, children = "HomePage" }: HomePageProps) {
    return (
        <Stack>
            <HeroCard />
        </Stack>
    );
}

function HeroCard() {
    return (
        <DotBackground h="100%">
            {/* <Flex w="100%" pos="relative">
                <AspectRatio ratio={16 / 9} mx="auto" pos="relative">
                    <Image src={cityBg} />
                    <Overlay
                        gradient="linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 45%)"
                        opacity={0.85}
                        style={{
                            zIndex: 1,
                        }}
                    />
                    <Overlay
                        color="#222"
                        backgroundOpacity={0.25}
                        blur={2}
                        style={{
                            zIndex: 2,
                        }}
                    />
                </AspectRatio>
                <Container
                    pos="absolute"
                    style={{
                        zIndex: 3,
                        top: "25%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                    }}
                >

                </Container>
            </Flex> */}
                                <Flex className={cx(styles.typewriter)}>
                        <Text
                            className={cx(fontStyles["merriweather-regular"])}
                            variant="gradient"
                            gradient={{ from: "blue", to: "pink" }}
                            style={{
                                fontSize: 56,
                                animation:
                                    "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
                            }}
                        >
                            Jerrico Duran
                        </Text>
                    </Flex>

                    <Text>Business IT Specialist</Text>
        </DotBackground>
    );
}

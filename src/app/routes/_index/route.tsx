// import type { MetaFunction } from "@remix-run/node";
import { useScrollIntoView } from "@mantine/hooks";
import { Flex } from "@mantine/core";

import { HeroSection } from "./HeroSection";
import { Invert } from "~/components/Invert";
import Profile from "~/components/Resume/Profile.mdx";
import Experience from "~/components/Resume/Experience.mdx";

/* -------------------------------------------------------------------------- */

export default function Component() {
    const { scrollIntoView, targetRef: scrollToRef } = useScrollIntoView<HTMLDivElement>();

    return (
        <Flex direction="column">
            <HeroSection onArrowClick={() => scrollIntoView({ alignment: "start" })} />
            <Invert>
                <Flex
                    ref={scrollToRef}
                    mih="100vh"
                    justify="center"
                    align="center"
                    py="4rem"
                >
                    <Profile />
                </Flex>
            </Invert>
            <Flex justify="center" py="4rem">
                <Experience />
            </Flex>
        </Flex>
    );
}

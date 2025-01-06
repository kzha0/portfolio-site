import { Flex, Image, AspectRatio } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import { ImageSkeleton } from "../Skeleton/Skeleton";

import img1 from "~/assets/img/1000021280.webp";
import img2 from "~/assets/img/Screenshot_From_2024-12-05_07-01-39.webp";
import img3 from "~/assets/img/1000021277.webp";
import vid1 from "~/assets/webm/Screencast_From_2024-11-27_06-59-42.webm";
import vid2 from "~/assets/webm/Screencast_From_2024-12-22_15-17-46.webm";
import vid3 from "~/assets/webm/Screencast_From_2024-12-22_15-20-45.webm";
import vid4 from "~/assets/webm/Screencast_From_2024-12-22_15-24-19.webm";

interface MediaItem {
    type: "image" | "webm" | "external";
    src: string;
}

const media: MediaItem[] = [
    {
        type: "image",
        src: img1,
    },
    {
        type: "image",
        src: img2,
    },
    {
        type: "webm",
        src: vid1,
    },
    {
        type: "webm",
        src: vid2,
    },
    {
        type: "webm",
        src: vid3,
    },
    {
        type: "webm",
        src: vid4,
    },
    {
        type: "external",
        src: "https://drive.google.com/file/d/1SYTGBEFXWwxJ7fL0FScXjKLRKRKQZdcQ/preview",
    },
    {
        type: "external",
        src: "https://drive.google.com/file/d/1NH3_XayRNZd-xenwTovjUOhsiPDNSi-J/preview",
    },
    {
        type: "image",
        src: img3,
    },
];

export const CarouselOliOrder = () => {
    const slides = media.map(({ type, src }) => {
        const inner: React.ReactNode = (() => {
            switch (type) {
                case "image": {
                    return (
                        <Flex
                            h="100%"
                            align="center"
                            justify="center"
                        >
                            <ImageSkeleton
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: "var(--mantine-radius-sm)",
                                }}
                            >
                                <Image
                                    loading="lazy"
                                    decoding="async"
                                    {...{ src }}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        borderRadius: "var(--mantine-radius-sm)",
                                    }}
                                />
                            </ImageSkeleton>
                        </Flex>
                    );
                }
                case "webm": {
                    return (
                        <Flex
                            align="center"
                            justify="center"
                        >
                            <video
                                controls
                                autoPlay
                                // width="100%"
                                // height="100%"
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                    borderRadius: "var(--mantine-radius-sm)",
                                }}
                            >
                                <source
                                    {...{ src }}
                                    type="video/webm"
                                />
                            </video>
                        </Flex>
                    );
                }
                case "external": {
                    return (
                        <iframe
                            allow="autoplay"
                            {...{ src }}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                                border: "none",
                                borderRadius: "var(--mantine-radius-sm)",
                                overflow: "hidden",
                            }}
                            width="100%"
                            height="100%"
                        />
                    );
                }
            }
        })();

        return (
            <Carousel.Slide key={src}>
                <AspectRatio
                    ratio={16 / 9}
                    mb="auto"
                    h="100%"
                >
                    <Flex justify="center">{inner}</Flex>
                </AspectRatio>
            </Carousel.Slide>
        );
    });

    return (
        <Carousel
            withIndicators
            slideGap="md"
            loop
        >
            {slides}
        </Carousel>
    );
};

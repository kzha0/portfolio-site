import { Flex, Box, Image, AspectRatio } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

interface MediaItem {
    type: "image" | "external";
    src: string;
}

const media: MediaItem[] = [
    {
        type: "image",
        src: "https://img.notionusercontent.com/s3/prod-files-secure%2F8dbf5952-2cd9-47d3-9d5f-ebc7e76f614d%2F0a2f47cf-2113-4a99-b7b7-a30ea255b44d%2F1000021280.heic/size/w=2000?exp=1735933882&sig=6VGluUw24vazFScznAYVQcNsxRbsl0PzYcApgLm1NPw",
    },
    {
        type: "image",
        src: "https://img.notionusercontent.com/s3/prod-files-secure%2F8dbf5952-2cd9-47d3-9d5f-ebc7e76f614d%2F77cab55f-9b6b-4ab5-bb51-a551f5b28db9%2FScreenshot_From_2024-12-05_07-01-39.png/size/w=2000?exp=1735933950&sig=V-573rQrvz01aj_IiIXHUK2L8VRhXDL9EPBZBBeUgFg",
    },
    {
        type: "external",
        src: "https://file.notion.so/f/f/8dbf5952-2cd9-47d3-9d5f-ebc7e76f614d/c9021a3e-677c-4ead-9f8a-fb7c07fe0875/Screencast_From_2024-11-27_06-59-42.webm?table=block&id=164c1b64-e0c8-80a3-ad90-f265bdd7ac2e&spaceId=8dbf5952-2cd9-47d3-9d5f-ebc7e76f614d&expirationTimestamp=1735941600000&signature=zVgkjaQqWyr-s-K7e-zw6LqbFWNdL34nqh5kQj8QsJQ&downloadName=Screencast+From+2024-11-27+06-59-42.webm",
    },
    {
        type: "external",
        src: "https://file.notion.so/f/f/8dbf5952-2cd9-47d3-9d5f-ebc7e76f614d/a54818ce-c7d1-4019-ab06-14689a28147b/Screencast_From_2024-12-22_15-17-46.webm?table=block&id=164c1b64-e0c8-800e-a90a-ddbed33c9330&spaceId=8dbf5952-2cd9-47d3-9d5f-ebc7e76f614d&expirationTimestamp=1735941600000&signature=nDztZFBm3dt2lyRkdtH3bvOCo2v7kZ2A7JTyBP-xTQ0&downloadName=Screencast+From+2024-12-22+15-17-46.webm",
    },
    {
        type: "external",
        src: "https://file.notion.so/f/f/8dbf5952-2cd9-47d3-9d5f-ebc7e76f614d/36d9b9e0-31b7-4ec8-bea2-104a580ab8cc/Screencast_From_2024-12-22_15-24-19.webm?table=block&id=164c1b64-e0c8-8003-b5b7-ed7c583c7358&spaceId=8dbf5952-2cd9-47d3-9d5f-ebc7e76f614d&expirationTimestamp=1735941600000&signature=gGEukLqB4aIAseWZVHOV-Nrjr2vxyrB6ay-VqlyCTf4&downloadName=Screencast+From+2024-12-22+15-24-19.webm",
    },
    {
        type: "external",
        src: "https://file.notion.so/f/f/8dbf5952-2cd9-47d3-9d5f-ebc7e76f614d/f84da087-9e23-4b5b-8f56-2c5a497ce0fa/Screencast_From_2024-12-22_15-20-45.webm?table=block&id=164c1b64-e0c8-80c5-874b-f4163089946e&spaceId=8dbf5952-2cd9-47d3-9d5f-ebc7e76f614d&expirationTimestamp=1735934400000&signature=OO5TX1awY4Y12tGjA9k6ozroOPuBBe5pxRI_LsQTews&downloadName=Screencast+From+2024-12-22+15-20-45.webm",
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
        src: "https://img.notionusercontent.com/s3/prod-files-secure%2F8dbf5952-2cd9-47d3-9d5f-ebc7e76f614d%2F259eb6f6-55f2-4439-b8f7-15ac72de150c%2F1000021277.heic/size/w=2000?exp=1735936149&sig=d5U5tJkAvAq6YPPOLl-zY6SebYjU3nKO3tC4QYyTo38",
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
                            <Image
                                loading="lazy"
                                decoding="async"
                                {...{ src }}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                    borderRadius: "var(--mantine-radius-sm)",
                                }}
                                // width="100%"
                                // height="100%"
                            />
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
        >
            {slides}
        </Carousel>
    );
};

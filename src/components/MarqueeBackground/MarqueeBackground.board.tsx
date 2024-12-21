import { MarqueeBackground } from "../Background/MarqueeBackground";
import { createBoard, ContentSlot } from "@wixc3/react-board";
import { MantineProvider } from "@mantine/core";

export default createBoard({
    name: "MarqueeBackground",
    Board: () => {
        return (
            <MantineProvider defaultColorScheme="auto">
                <ContentSlot>
                    <MarqueeBackground marqueeText="Jerrico Duran" />
                </ContentSlot>
            </MantineProvider>
        );
    },
});

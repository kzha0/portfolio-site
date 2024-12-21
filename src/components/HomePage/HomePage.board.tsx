import { HomePage } from "./HomePage";
import { createBoard, ContentSlot } from "@wixc3/react-board";
import { MantineProvider } from "@mantine/core";

export default createBoard({
    name: "HomePage",
    Board: () => {
        return (
            <MantineProvider defaultColorScheme="auto">
                <ContentSlot>
                    <HomePage />
                </ContentSlot>
            </MantineProvider>
        );
    },
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});

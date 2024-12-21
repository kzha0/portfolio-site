import { createBoard, ContentSlot } from "@wixc3/react-board";
import { MantineProvider } from "@mantine/core";

export default createBoard({
    name: "NewBoard",
    Board: () => {
        return (
            <MantineProvider defaultColorScheme="auto">
                <ContentSlot></ContentSlot>
            </MantineProvider>
        );
    },
});

import { Header } from "./Header";
import { createBoard, ContentSlot } from "@wixc3/react-board";
import { MantineProvider } from "@mantine/core";

export default createBoard({
    name: "Header",
    Board: () => {
        return (
            <MantineProvider defaultColorScheme="auto">
                <ContentSlot>
                    <Header />
                </ContentSlot>
            </MantineProvider>
        );
    },
});

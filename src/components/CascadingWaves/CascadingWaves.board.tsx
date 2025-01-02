import { CascadingWaves } from "./CascadingWaves.tsx";
import { createBoard, ContentSlot } from "@wixc3/react-board";

export default createBoard({
    name: "CascadingWaves",
    Board: () => {
        return (
            <div
                style={{
                    width: "100dvw",
                    height: "100dvh",
                }}
            >
                <ContentSlot>
                    <CascadingWaves />
                </ContentSlot>
            </div>
        );
    },
    environmentProps: {
        windowWidth: 1024,
    },
});

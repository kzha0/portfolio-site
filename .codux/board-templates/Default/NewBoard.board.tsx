import { createBoard, ContentSlot } from "@wixc3/react-board";

export default createBoard({
    name: "NewBoard",
    Board: () => {
        return (
            <div>
                <ContentSlot></ContentSlot>
            </div>
        );
    },
});

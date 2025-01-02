import { createBoard } from "@wixc3/react-board";
import { AppWrapper } from ".codux/util/AppWrapper.tsx";
import Component from "./route";

export default createBoard({
    name: "Home Page",
    Board: () => (
        <AppWrapper path="/">
            <Component />
        </AppWrapper>
    ),
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});

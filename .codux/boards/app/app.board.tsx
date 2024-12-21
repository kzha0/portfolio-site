import { createBoard } from "@wixc3/react-board";
import { createRemixStub } from "@remix-run/testing";
import App from "~/app/root";
import HomePage from "~/app/routes/_index/route";
import { ROUTES } from "~/router/config";
import { MantineProvider } from "@mantine/core";

const AppWrapper = createRemixStub([
    {
        Component: () => {
            return (
                <MantineProvider defaultColorScheme="auto">
                    <App />
                </MantineProvider>
            );
        },
        children: [
            {
                path: ROUTES.home.path,
                Component: HomePage,
            },
        ],
    },
]);

export default createBoard({
    name: "App",
    Board: () => <AppWrapper />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});

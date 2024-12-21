import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
    useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { MantineProvider } from "@mantine/core";

import { AppLayout } from "~/components/AppLayout";

import { ErrorComponent } from "~/components/error/Error";

import "normalize.css";
import "@mantine/core/styles.css";

export const links: LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap",
    },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <div id="root" style={{ height: "100vh" }}>
            <AppLayout>
                <Outlet />
            </AppLayout>
        </div>
    );
}

export function HydrateFallback() {
    return <p>Loading...</p>;
}

export function ErrorBoundary() {
    const error = useRouteError();
    const { title, message } = getErrorDetails(error);

    return <ErrorComponent title={title} message={message} />;
}

function getErrorDetails(error: unknown) {
    let title: string;
    let message: string | undefined;

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            title = "Page Not Found";
            message = "Looks like the page you're trying to visit doesn't exist";
        } else {
            title = `${error.status} - ${error.statusText}`;
            message = error.data?.message ?? "";
        }
    } else {
        title = "Unknown error ocurred";
    }

    return { title, message };
}

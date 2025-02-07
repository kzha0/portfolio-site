import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
    useRouteError,
} from "@remix-run/react";
import type { MetaFunction, LinksFunction } from "@remix-run/node";

import { AppFrame, headerHeight } from "~/components/AppFrame";
import { ErrorComponent } from "~/components/ErrorPage/ErrorPage";

import "normalize.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { PaddedVertical } from "~/components/Layouts/PaddedLayout";

/* -------------------------------------------------------------------------- */
export const meta: MetaFunction = () => {
    return [
        { title: "Jerrico Duran" },
        { name: "description", content: "Business automation specialist and fullstack programmer" },
    ];
};

export const links: LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Gloock&family=M+PLUS+1+Code:wght@100..700&display=swap",
    },
    {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
    },
    {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
    },
    {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
    },
    {
        rel: "manifest",
        href: "/site.webmanifest"
    }
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <AppFrame>{children}</AppFrame>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function HydrateFallback() {
    return (
        <PaddedVertical>
            <p>Loading...</p>
        </PaddedVertical>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();
    const { title, message } = getErrorDetails(error);

    return (
        <ErrorComponent
            title={title}
            message={message}
        />
    );
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

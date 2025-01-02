import { useEffect } from "react";
import { Outlet } from "@remix-run/react";
import { createRemixStub } from "@remix-run/testing";

import { links } from "~/app/root";
import { AppShell } from "~/components/AppShell";

export const AppWrapper = ({ path, children }: React.PropsWithChildren & { path: string }) => {
    const Stub = createRemixStub([
        {
            Component: () => {
                useEffect(() => {
                    links().forEach((props) => {
                        const link = document.createElement("link");
                        Object.entries(props).forEach(([key, value]) => {
                            if (value !== undefined && key !== "page") {
                                link.setAttribute(key, value as string);
                            }
                        });

                        document.head.appendChild(link);
                        return () => {
                            // Cleanup: Remove the links when the component unmounts
                            document.head.removeChild(link);
                        };
                    });

                }, []);

                return (
                    <AppShell>
                        <Outlet />
                    </AppShell>
                );
            },
            children: [
                {
                    path,
                    Component: () => <>{children}</>,
                },
            ],
        },
    ]);

    return <Stub />;
};

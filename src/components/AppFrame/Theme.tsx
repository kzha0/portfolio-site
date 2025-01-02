import { MDXProvider } from "@mdx-js/react";
import {
    CSSVariablesResolver,
    MantineProvider,
    createTheme,
    Text,
    Title,
} from "@mantine/core";

const theme = createTheme({
    fontFamily: "Geist, sans-serif",
    headings: {
        fontFamily: "Gloock, serif",
    },
    components: {
        Text: Text.extend({
            defaultProps: {
                fz: "1.375rem",
                fw: 300,
                lh: "160%",
            },
        }),
    },
});

// https://mantine.dev/styles/css-variables/
// https://mantine.dev/styles/css-variables-list/
const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
    variables: {
        // "--mantine-font-family": "Geist, sans-serif",
        // "--mantine-font-family-headings": "Gloock, serif",
    },
    light: {
        "--mantine-color-default-border": theme.colors.gray[6],
    },
    dark: {
        "--mantine-color-body": theme.black,
    },
});

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <MantineProvider
            defaultColorScheme="auto"
            {...{ theme, cssVariablesResolver }}
        >
            <MDXProvider
                components={{
                    h1: ({ children }) => (
                        <Title
                            fz="h1"
                            ta="justify"
                        >
                            {children}
                        </Title>
                    ),
                    h2: ({ children }) => (
                        <Title
                            fz="h2"
                            ta="justify"
                        >
                            {children}
                        </Title>
                    ),
                    h3: ({ children }) => (
                        <Text
                            fz="h3"
                            fw={700}
                            ta="justify"
                        >
                            {children}
                        </Text>
                    ),
                    li: ({ children }) => (
                        <li>
                            <Text>{children}</Text>
                        </li>
                    ),
                    p: ({ children }) => <Text ta="justify">{children}</Text>,
                    strong: ({ children }) => (
                        <Text
                            span
                            fw={700}
                        >
                            {children}
                        </Text>
                    ),
                }}
            >
                {children}
            </MDXProvider>
        </MantineProvider>
    );
};

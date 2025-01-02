import { List, Text, ThemeIcon } from "@mantine/core";
import {
    IconBrandTypescript,
    IconBrandJavascript,
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandMysql,
    IconBrandRust,
    IconBrandPython,
    IconProps,
} from "@tabler/icons-react";

const IconWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <ThemeIcon
            variant="transparent"
            c="light-dark(black, white)"
        >
            {children}
        </ThemeIcon>
    );
};

export const Languages = () => {
    const listItems: [React.FC<IconProps>, string][] = [
        [IconBrandRust, "Rust"],
        [IconBrandTypescript, "TypeScript"],
        [IconBrandMysql, "SQL"],
        [IconBrandPython, "Python"],
        [IconBrandJavascript, "JavaScript"],
        [IconBrandHtml5, "HTML"],
        [IconBrandCss3, "CSS"],
    ];

    return (
        <List
            center
            spacing="sm"
        >
            {listItems.map(([Icon, text]) => (
                <List.Item
                    key={`item.${text}`}
                    icon={
                        <IconWrapper>
                            <Icon size={24} />
                        </IconWrapper>
                    }
                >
                    <Text>{text}</Text>
                </List.Item>
            ))}
        </List>
    );
};

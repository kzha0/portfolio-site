import cx from "classnames";
import styles from "./NewComponent.module.css";

export interface NewComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export function NewComponent({ className, children = "NewComponent" }: NewComponentProps) {
    return (
        <div className={cx(styles.root, className, "text-center")}>
            {children}
        </div>
    );
}

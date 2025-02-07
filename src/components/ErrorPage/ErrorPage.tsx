import { Link } from "@remix-run/react";
import { PaddedVertical } from "../Layouts/PaddedLayout";

const unknownErrorTitle = "Ooops, something went wrong";

export interface ErrorProps {
    title: string | undefined | null;
    message: string | undefined | null;
}

export const ErrorComponent: React.FC<ErrorProps> = ({ title, message }) => {
    return (
        <PaddedVertical>
            <h1>{title ?? unknownErrorTitle}</h1>
            {message && <div>{message}</div>}
            <Link to="/">Back to Home page</Link>
        </PaddedVertical>
    );
};

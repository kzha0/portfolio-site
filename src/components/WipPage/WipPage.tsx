import { Link } from "@remix-run/react";
import { PaddedVertical } from "../Layouts/PaddedLayout";

export const WipComponent: React.FC = () => {
    return (
        <PaddedVertical>
            This page is currently a
            <h1>🚧 Work-in-progress 🏗️</h1>
            Please check back later soon.
            <Link to="/">Back to Home page</Link>
        </PaddedVertical>
    );
};

import { Link } from '@remix-run/react';
import { ROUTES } from '~/router/config';

const unknownErrorTitle = 'Ooops, something went wrong';

export interface ErrorProps {
    title: string | undefined | null;
    message: string | undefined | null;
}

export const ErrorComponent = ({ title, message }: ErrorProps) => {
    return (
        <div>
            <h1>{title ?? unknownErrorTitle}</h1>
            {message && <div>{message}</div>}
            <Link to={ROUTES.home.to()}>
                Navigate to Home Page
            </Link>
        </div>
    );
};

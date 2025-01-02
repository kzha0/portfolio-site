import { createContext, useContext } from "react";

interface NavContext {
    sidenavOpened: boolean;
    toggleSidenav: () => void;
}

const NavContext = createContext<NavContext | undefined>(undefined);

export const NavContextProvider: React.FC<NavContext & React.PropsWithChildren> = ({
    sidenavOpened,
    toggleSidenav,
    children,
}) => {
    return (
        <NavContext.Provider value={{ sidenavOpened, toggleSidenav }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNavContext = () => {
    return useContext(NavContext)!;
};

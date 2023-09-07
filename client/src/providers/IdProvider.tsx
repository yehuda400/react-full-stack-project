import {
    useState,
    useContext,
    ReactNode,
    SetStateAction,
    Dispatch,
    FC,
    createContext,
} from "react";

type ContextValue = {
    id: string | null;
    setId: Dispatch<SetStateAction<string | null>>;
};

const IdContext = createContext<null | ContextValue>(null);
const { Provider } = IdContext;

type IdProviderProps = {
    children: ReactNode;
};

export const IdProvider: FC<IdProviderProps> = ({ children }) => {
    const [id, setId] = useState<string | null>(null);

    return <Provider value={{ id, setId }}>{children}</Provider>;
};

export const useId = () => {
    const context = useContext(IdContext);
    if (!context) throw new Error("useId must be used within a IdProvider");
    return context;
};

export default IdProvider;

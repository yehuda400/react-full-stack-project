import {
    useState,
    useContext,
    ReactNode,
    SetStateAction,
    Dispatch,
    FC,
    createContext,
    useEffect,
} from "react";

export interface TripInterface {
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string[];
    id: string;
}

type ContextValue = {
    data: TripInterface[] | null;
    setData: Dispatch<SetStateAction<TripInterface[] | null>>;
};

const DataContext = createContext<null | ContextValue>(null);
const { Provider } = DataContext;

type DataProviderProps = {
    children: ReactNode;
};

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
    const [data, setData] = useState<TripInterface[] | null>(null);
    useEffect(() => {
        fetch("http://localhost:3000/api/trips")
            .then((resolve) => resolve.json())
            .then((data) => setData(data));
    }, []);
    return <Provider value={{ data, setData }}>{children}</Provider>;
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error("useData must be used within a DataProvider");
    return context;
};

export default DataProvider;

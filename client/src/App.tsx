import PageProvider from "./providers/RouterProvider";
import DataProvider from "./providers/DataProvider";
import Router from "./components/Router";
import IdProvider from "./providers/IdProvider";
import "./App.css";
import "./index.css";

function App() {
    return (
        <IdProvider>
            <DataProvider>
                <PageProvider>
                    <Router />
                </PageProvider>
            </DataProvider>
        </IdProvider>
    );
}

export default App;

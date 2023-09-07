import { usePage } from "../providers/RouterProvider";
import Home from "./Home";
import NewTripForm from "./NewTripForm";
import UpdateTripForm from "./UpdateTripForm";
import Trips from "./Trips";
import UserLogIn from "./UserLogin";
import UserRegistration from "./UserRegistration";
import TripDetail from "./TripDetail";
// import TripDetail from "./TripDetail";
const Router = () => {
    const { page } = usePage();
    if (page === "Home") return <Home />;
    if (page === "Trips") return <Trips />;
    if (page === "NewTripForm") return <NewTripForm />;
    if (page === "UpdateTripForm") return <UpdateTripForm />;
    if (page === "UserLogIn") return <UserLogIn />;
    if (page === "UserRegistration") return <UserRegistration />;
    if (page === "NewTripForm") return <NewTripForm />;
    if (page === "TripDetail") return <TripDetail />;
    if (page === "UpdateTripForm") return <UpdateTripForm />;
    return <>Page Not Found!</>;
};

export default Router;

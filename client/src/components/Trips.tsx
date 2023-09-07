import Trip from "./Trip";
import { usePage } from "../providers/RouterProvider";
import { useData } from "../providers/DataProvider";
import { useId } from "../providers/IdProvider";

const Trips = () => {
    const { setPage } = usePage();
    const { data, setData } = useData();
    const { setId } = useId();

    const handleDelete = async (tripId: string) => {
        try {
            // Make the DELETE request to the server
            await fetch(`http://localhost:3000/api/trips/${tripId}`, {
                method: "DELETE",
                headers: {
                    authorization: "test-token",
                },
            });

            // Update the component's state by filtering out the deleted trip
            setData((prevData) =>
                prevData!.filter((trip) => trip.id !== tripId)
            );
        } catch (error) {
            console.error("Error deleting trip:", error);
        }
    };

    return (
        <div>
            <button onClick={() => setPage("Home")}>Home</button>
            <button onClick={() => setPage("NewTripForm")}>Add Trip</button>
            <h2>All Trips</h2>
            {/* {data &&
                data.map((trip, index) => (
                    <div
                        className="card"
                        key={index}
                        onClick={() => {
                            setId(trip.id);
                            setPage("TripDetail");
                        }}
                    >
                        <Trip trip={trip} />
                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                handleDelete(trip.id); // Call the handleDelete function with trip I
                            }}
                        >
                            delete
                        </button>
                    </div>
                ))} */}
            {data &&
                data.map((trip, index) => (
                    <div
                        className="card"
                        key={index}
                        onClick={() => {
                            setId(trip.id);
                            setPage("TripDetail");
                        }}
                    >
                        <Trip trip={trip} />
                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                handleDelete(trip.id); // Call the handleDelete function with trip I
                            }}
                        >
                            delete
                        </button>
                    </div>
                ))}
        </div>
    );
};
export default Trips;

import { useData } from "../providers/DataProvider";
import { useId } from "../providers/IdProvider";
import { usePage } from "../providers/RouterProvider";
import { useEffect, useState } from "react";

const TripDetail = () => {
    const { setData } = useData();
    const { id } = useId();
    const { setPage } = usePage();
    const [thisTrip, setThisTrip] = useState();

    useEffect(() => {
        fetch(`http://localhost:3000/api/trips/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setThisTrip(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    if (!thisTrip) return <p>page not fount</p>;
    const {
        activities,
        description,
        destination,
        endDate,
        image,
        name,
        price,
        startDate,
    } = thisTrip;

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
            <header>
                <button onClick={() => setPage("Trips")}>All Trips</button>
                <button onClick={() => setPage("Home")}>Home</button>
            </header>

            <h2>{name}</h2>
            <div>
                <div className="trip-container">
                    <p>{description}</p>
                    <img src={image} alt={"Picture of " + name} />
                    <p>Activities: {activities}</p>
                    <p>Destination {destination}</p>
                    <p>
                        Starting {startDate} Ending {endDate}
                    </p>
                    <p>Price: {price}</p>
                    <button
                        onClick={(event) => {
                            event.stopPropagation();
                            handleDelete(id!); // Call the handleDelete function with trip ID
                        }}
                    >
                        delete
                    </button>{" "}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setPage("UpdateTripForm");
                        }}
                    >
                        update
                    </button>
                </div>
            </div>
        </div>
    );
};
export default TripDetail;

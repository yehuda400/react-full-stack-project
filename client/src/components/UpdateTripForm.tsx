import { useState } from "react";
import { useData } from "../providers/DataProvider";
import { usePage } from "../providers/RouterProvider";
import { useId } from "../providers/IdProvider";
import { TripInterface } from "../providers/DataProvider";

const UpdateTripForm = () => {
    const { id } = useId();
    const { setPage } = usePage();
    const { data, setData } = useData();
    const thisTrip = data?.find((trip) => trip.id === id);
    const [tripData, setTripData] = useState<TripInterface>(thisTrip!);

    return (
        <div>
            <header>
                <button onClick={() => setPage("Trips")}>All Trips</button>
                <button onClick={() => setPage("Home")}>Home</button>
            </header>

            <h2>Update Trip</h2>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={tripData.name}
                        onChange={(e) =>
                            setTripData({ ...tripData, name: e.target.value })
                        }
                    />
                </label>
                <label>
                    Destination:
                    <input
                        type="text"
                        name="destination"
                        value={tripData?.destination}
                        onChange={(e) =>
                            setTripData({
                                ...tripData,
                                destination: e.target.value,
                            })
                        }
                    />
                </label>
                <label>
                    Start Date:
                    <input
                        type="text"
                        name="startDate"
                        value={tripData?.startDate}
                        onChange={(e) =>
                            setTripData({
                                ...tripData,
                                startDate: e.target.value,
                            })
                        }
                    />
                </label>
                <label>
                    End Date:
                    <input
                        type="text"
                        name="endDate"
                        value={tripData?.endDate}
                        onChange={(e) =>
                            setTripData({
                                ...tripData,
                                endDate: e.target.value,
                            })
                        }
                    />
                </label>
                <label>
                    Image:
                    <input
                        type="text"
                        name="image"
                        value={tripData?.image}
                        onChange={(e) =>
                            setTripData({ ...tripData, image: e.target.value })
                        }
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={tripData?.price}
                        onChange={(e) =>
                            setTripData({
                                ...tripData,
                                price: Number(e.target.value),
                            })
                        }
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={tripData?.description}
                        onChange={(e) =>
                            setTripData({
                                ...tripData,
                                description: e.target.value,
                            })
                        }
                    />
                </label>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        setData((prevData) => [
                            ...prevData!.filter((trip) => trip.id !== id),
                            tripData,
                        ]);
                        const toJson = JSON.stringify(tripData);

                        fetch(`http://localhost:3000/api/trips/${id}`, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                authorization: "test-token",
                            },
                            body: toJson,
                        });

                        setPage("Home");
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateTripForm;

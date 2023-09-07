import { useState } from "react";
import { TripInterface } from "../providers/DataProvider";
import { useData } from "../providers/DataProvider";
import { usePage } from "../providers/RouterProvider";

const NewTripForm = () => {
    const emptyTrip = {
        id: "",
        name: "",
        destination: "",
        startDate: "",
        endDate: "",
        image: "",
        price: 0,
        description: "",
        activities: [],
    };
    const { setPage } = usePage();
    const [tripData, setTripData] = useState<TripInterface>(emptyTrip);
    const [activity, setActivity] = useState<string>();
    const [activities, setActivities] = useState<string[]>([]);
    const { setData: setData } = useData();

    return (
        <div>
            <header>
                <button onClick={() => setPage("Trips")}>All Trips</button>
                <button onClick={() => setPage("Home")}>Home</button>
            </header>
            <h2>New Trip</h2>
            <form>
                <label>
                    Name
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
                    Destination
                    <input
                        type="text"
                        name="destination"
                        value={tripData.destination}
                        onChange={(e) =>
                            setTripData({
                                ...tripData,
                                destination: e.target.value,
                            })
                        }
                    />
                </label>
                <label>
                    Start Date
                    <input
                        type="text"
                        name="startDate"
                        value={tripData.startDate}
                        onChange={(e) =>
                            setTripData({
                                ...tripData,
                                startDate: e.target.value,
                            })
                        }
                    />
                </label>
                <label>
                    End Date
                    <input
                        type="text"
                        name="endDate"
                        value={tripData.endDate}
                        onChange={(e) =>
                            setTripData({
                                ...tripData,
                                endDate: e.target.value,
                            })
                        }
                    />
                </label>
                <label>
                    Image
                    <input
                        type="text"
                        name="image"
                        value={tripData.image}
                        onChange={(e) =>
                            setTripData({ ...tripData, image: e.target.value })
                        }
                    />
                </label>
                <label>
                    Price
                    <input
                        type="number"
                        name="price"
                        value={tripData.price}
                        onChange={(e) =>
                            setTripData({
                                ...tripData,
                                price: parseFloat(e.target.value),
                            })
                        }
                    />
                </label>
                <label>
                    Description
                    <input
                        type="text"
                        name="description"
                        value={tripData.description}
                        onChange={(e) =>
                            setTripData({
                                ...tripData,
                                description: e.target.value,
                            })
                        }
                    />
                </label>
                <label>
                    Activities
                    <input
                        type="text"
                        name="activities"
                        value={tripData.activities}
                        onChange={(e) => {
                            setActivity(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            setActivities({ ...activities, activity });
                        }}
                    >
                        add
                    </button>
                </label>

                <button
                    type="button"
                    onClick={() => {
                        setData((prevData) => [...prevData!, tripData]);
                        const toJson = JSON.stringify(tripData);

                        fetch("http://localhost:3000/api/trips", {
                            method: "POST",
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

export default NewTripForm;

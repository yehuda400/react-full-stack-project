import { useState } from "react";
import { usePage } from "../providers/RouterProvider";
import { UserInterface } from "../Types/Types";
const UserLogIn = () => {
    const { setPage } = usePage();
    const [user, setUser] = useState<UserInterface>({
        email: "",
        password: "",
    });
    const [response, setResponse] = useState<Record<string, unknown>>({});
    if (response && response.message) {
        console.log(response.responseObj);

        alert(response.message);
        setPage("Home");
    }

    return (
        <div>
            <header>
                <button onClick={() => setPage("Trips")}>All Trips</button>
                <button onClick={() => setPage("Home")}>Home</button>
            </header>
            <h2>Log In</h2>
            <form>
                {" "}
                <label>
                    Email
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        placeholder="exsample@gmial.com"
                        onChange={(e) =>
                            setUser((prev) => ({
                                ...prev,

                                email: e.target.value,
                            }))
                        }
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        placeholder="123456ab"
                        onChange={(e) =>
                            setUser((prev) => ({
                                ...prev,

                                password: e.target.value,
                            }))
                        }
                    />
                </label>
                <button
                    onClick={(e) => {
                        e.preventDefault();

                        const toJson = JSON.stringify(user);

                        fetch(`http://localhost:3000/api/auth/login`, {
                            method: "POST",

                            headers: {
                                "Content-Type": "application/json",

                                authorization: "test-token",
                            },

                            body: toJson,
                        })
                            .then((response) => response.json())

                            .then((data) => {
                                setResponse(data);
                            })

                            .catch((error) => {
                                // Handle errors here

                                console.error("Fetch error:", error);
                            });

                        // console.log(response);
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UserLogIn;

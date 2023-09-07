import { usePage } from "../providers/RouterProvider";
const Home = () => {
    const { setPage } = usePage();
    return (
        <div className="home">
            <button onClick={() => setPage("Trips")}>All Trips</button>
            <button onClick={() => setPage("UserLogIn")}>Log In</button>
            <button onClick={() => setPage("UserRegistration")}>Sign Up</button>
            <h2>Home</h2>
            <p className="card">
                Welcome to the best trips website! Here you can find the best
                trips for you with the lowest price! If you still didn't open an
                account, now is the best time for it, just click sign up, it's
                easy! Or you can press all trips to take a look the amazing
                deals. enjoy!!!
            </p>
        </div>
    );
};

export default Home;

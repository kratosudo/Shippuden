import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const NavBar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="container bg-purple-600 p-4 text-black">
            <ul className="mx-auto justify-between flex space-x-4">
                <li>
                <Link to="/Home">Home</Link>
                </li>
                {!user ? (
                    <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    </>
                ):(
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>

                )};
            </ul>
        </nav>
    );
};

export default NavBar;

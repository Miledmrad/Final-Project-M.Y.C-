import {  useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { RiUserFill, RiLockPasswordFill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./login.css"

function Login({onLogin}) {
    const navigate = useNavigate()
    const initialValue = {
        username: "",
        password: ""
    };

    const [user, setUser] = useState(initialValue);

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
           if (!user.username || !user.password) {
                toast.error("Fill Out The Fields");
                return;
            }

            if (/\d/.test(user.username)) {
                toast.error("The Username must not Contain a Number");
                return;
            }
        try {
            const response = await axios.post("http://localhost:3001/api/usersqlz/authenticateUser", user);
            console.log(response)
            if (response.data.message === "authenticated") {
                toast.success("User authenticated successfully");
                setTimeout(()=>{
                    onLogin(user.username);
                    navigate("/")

                },3000)

            } else {
                toast.error("Failed to authenticate user. Please try again later.");
            }
        } catch (error) {
            console.error("API request error:", error);
            toast.error("An unexpected error occurred. Please try again later.");
        }
    };





    return (
        <div className="body-color">
            <div className="container bg-light divcont rounded-5">
                <h4 className="headername text-dark"> Sign in </h4>
                <div className="bgcol">
                    <RiUserFill className="input-icon m-1" />
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={user.username}
                        onChange={(e) => onValueChange(e)}
                    /><br />
                </div>
                <div className="bgcol1 mx-3">
                    <RiLockPasswordFill className="input-icon m-1 " />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={(e) => onValueChange(e)}
                    /><br />
                </div>
                <button className="btn btn-sm bg-secondary btlog" type="submit" onClick={handleLogin}>
                    <ToastContainer position="top-right" />
                    Login
                </button>
                <div className="registers pt-4">
                    <span>Don't have an account?</span>
                    <Link to="/Register" className="register">&nbsp;Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;

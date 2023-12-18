import 'react-phone-input-2/lib/style.css'
import { useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {RiUserFill, RiLockPasswordFill,} from "react-icons/ri";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillCalendarDateFill} from "react-icons/bs";
import {FaRegAddressCard} from "react-icons/fa";
import "./register.css";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';


const Register =()=> {

    const initialValue = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        dob: "",
        password: "",
        address: ""

    };

    const [user, setUser] = useState(initialValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    }
    // const handleRegister = () => {
    //
    //     // try {
    //     //     const response = await axios.post("http://localhost:3001/api/usersqlz/insertUser", user);
    //     //     if (response.status === 200) {
    //     //         toast.success("User created successfully");
    //     //         navigate("/");
    //     //     } else {
    //     //         toast.error("Failed to create user. Please try again.");
    //     //     }
    //     // } catch (error) {
    //     //     console.error("API request error:", error);
    //     //     toast.error("An error occurred while creating the user. Please try again later.");
    //     // }
    //     console.log("handlesubmit");
    //     axios.post("http://localhost:3001/api/usersqlz/insertUser", user).then(response =>{
    //         toast.success("User created successfully");
    //         console.log("user created succesfully")
    //         navigate("/");
    //     }).catch(error =>{
    //         console.log(error);
    //         console.log("here")
    //         if (error.response.data.message === "error inserting User") {
    //             toast.error("An error occurred while creating the user. Please try again later.");
    //         }
    //     })
    //
    //
    // };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!user.firstName || !user.lastName || !user.username || !user.email || !user.dob || !user.password || !user.address) {
            toast.error("Failed to create user. Please Fill out the field.");
            return;
        }
        if (/\d/.test(user.firstName) || /\d/.test(user.lastName)) {
           toast.error('FirstName and Password should not contain numbers');
            return;
        }
        try {
            console.log("User object before insertion:", user);
            const response = await axios.post(
                "http://localhost:3001/api/usersqlz/insertUser",
                JSON.stringify(user),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.status === 200) {
                toast.success("User created successfully");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                toast.error("Failed to create user. Please try again.");
            }
        } catch (error) {
            console.error("API request error:", error);
            console.log("here");

            if (error.response && error.response.data.message === "error inserting User") {
                toast.error("An error occurred while creating the user. Please try again later.");
            } else {
                toast.error("An unexpected error occurred. Please try again later.");
            }
        }
    };


    return (
        <div className="Rbody-color">
            <div className="registercont rounded-5">
                <h4 className="header text-dark">Sign Up</h4><br/>
                <form onSubmit={handleRegister}>
                   <div className="input-grid">
                       <div className="bgcol">
                           <RiUserFill className="input-icon m-1"/>

                           <input type="text" placeholder="First Name" name={'firstName'}
                                  onChange ={(e) => onValueChange(e)}/>
                       </div>
                       <div className="bgcol">
                           <RiUserFill className="input-icon m-1"/>

                           <input type="text" placeholder="Last Name" name={'lastName'}
                                  onChange ={(e) => onValueChange(e)}/>
                       </div>
                       <div className="bgcol">
                           <AiOutlineMail className="input-icon m-1"/>

                           <input type="text" placeholder="Email" name={'email'}
                                  onChange ={(e) => onValueChange(e)}/>
                       </div>
                       <div className="bgcol">
                           <BsFillCalendarDateFill className="input-icon m-1"/>

                           <input type="date" placeholder="Date and Time" name={'dob'}
                                  onChange ={(e) => onValueChange(e)}/>
                       </div>
                       <div className="bgcol">
                           <RiLockPasswordFill className="input-icon m-1"/>

                           <input type="password" placeholder="Password" name={'password'}
                                  onChange ={(e) => onValueChange(e)}/>
                       </div>
                       <div className="bgcol">
                           <RiUserFill className="input-icon m-1"/>

                           <input type="text" placeholder="username" name={'username'}
                                  onChange ={(e) => onValueChange(e)}/>
                       </div>

                       <div className="bgcol">
                           <FaRegAddressCard className="input-icon m-1"/>

                           <input type="text" placeholder="Address" name={'address'}
                                  onChange ={(e) => onValueChange(e)}/>
                       </div>

                   </div>
                   <div className="button-wrapper">
                       <button className="btreg btn btn-md bg-secondary" type="submit">
                           <ToastContainer position="top-right" autoClose={3000}/>
                           Register
                       </button>
                   </div>
               </form>
                <div className="log">
                    <small>
                        Already have an account? <Link to={"/login"} className={"smbtn"}>Sign In</Link>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Register;
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";


const Contactus =()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            toast.error("Please fill out all fields");
            return;
        }
        toast.success("Form submitted successfully!");
    };
    return(
        <>
            <div className="container formContainer mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="formFeedBack text-center  rounded-3">
                        <h3 className="text-center pb-3 text-white">Contact Us</h3>
                        <p><input  type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} id="name" name="value"/></p>
                        <p><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} id="name" name="value"/></p>
                        <p><textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea></p>
                        <button type="submit" className="btn btn-md btn-secondary">Submit</button>
                    </div>
                    <ToastContainer/>
                </form>
            </div>


        </>
    )
}



export default Contactus;
import React from "react";
import {IoIosSend}  from "react-icons/io";
import "./footer.css";
import {Link} from "react-router-dom";



const FooterJs = ()=>{
    return (

        <>
            <div className="footer container-fluid mt-5">
                <div className='container'>
                    <div className='row four'>
                        <div className='buildWeb col-md-10 col-sm-12 pt-5 text-white'>
                            <h3>Download your amazing Applicatin or software with M.Y.C SOFTWARE</h3>
                            <p>Download now for facilities, simplicity, and effortless functionality."</p>
                        </div>
                        <div className='buildWebtwo col-md-2 col-sm-12 pt-5 '>
                            <button className='btn btn-sm startFree'>Start Free Trial</button>
                        </div>
                    </div>
                    <hr className='headerline '/>
                </div>
                <div className='container pt-4 footerbottom hidden'>
                    <div className='row four'>
                        <div className='buildWebthree col-md-2 col-sm-4 '>
                            <h4>M.Y.C Software</h4>
                        </div>
                        <div className='buildWebFour col-md-2 col-sm-4 '>
                            <h3>Quick Links</h3>
                            <p>Privacy Policy</p>
                            <p>Sitemap</p>
                        </div>
                        <div className='buildWebfive col-md-4 col-sm-4 '>
                            <h3>Support</h3>
                            <p><Link to="/AboutUs" className={"text-decoration-none text-white"}>About US</Link> </p>
                            <p><Link to="/ContactUs" className={"text-decoration-none text-white"}>Contact Us</Link></p>
                        </div>
                        <div className='buildWeSix col-md-4 col-sm-12 '>
                            <h3>Newsletter</h3>
                            <p>Subscribe newsletter to get updates..</p>
                            <input className="inputype rounded-left" type="text" name="email" placeholder="Enter Your Email"/>
                            <button className="buttonemailtwo btn btn-sm btn-secondary"><IoIosSend/></button>
                        </div>
                    </div>
                </div>
                <div className='container footerEnd'>
                    <hr className='headerlineTwo'/>
                    <p className='text-center copyright'>Copyright ©2023 All rights reserved M.Y.C SOFTWARE</p>
                </div>

            </div>





        </>



        )
}

export  default FooterJs;
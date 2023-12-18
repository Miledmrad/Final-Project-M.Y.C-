import React from "react";
import {AiOutlineCloudDownload} from "react-icons/ai";
import zipFile_URL from "../../../../Download/Aus.rar";
import image4 from "../../../../assests/anti_virus/image4.jpg"
import "./Auslogics.css";
export default function Auslog({isLoggedIn}) {
    const downloadFileAtURl = (url) => {
        if (isLoggedIn) {
            const aTag = document.createElement("a");
            aTag.href = zipFile_URL;
            aTag.setAttribute("download", "Auslogics_Anti-Malware_1.22.0.rar");
            document.body.appendChild(aTag);
            aTag.click();
            document.body.removeChild(aTag);
            alert('the file is downloading')
        } else {
            alert('Please log in to download the file.');
        }
    };
    return (
        <>
            <div className="card-container maincard4 mt-3">
                <div className="card par4">
                    <div className="card-content parent4">
                        <h1 className={"smadav4"}>Auslogics Anti-Malware 2023 Free Download</h1>
                        <br/>
                        <br/>
                        <br/>
                        <small className={"smde4"}>Auslogics Anti-Malware 2023 Free Download Latest Version. It is full offline installer standalone setup of Auslogics Anti-Malware 2023.</small>
                         <br/><br/>

                         <h4>Auslogics Anti-Malware 2023 Overview</h4>
                        <p className="card-description">
                        Auslogics Anti-Malware 2023 is a reliable and powerful yet lightweight security application which can be used to 
                        protect your PC against a wide range of online threats. It is a powerful and effective malware detector and destroyer 
                        which can intelligently detect all viruses, trojans , rootkits, scarewares and keyloggers. It provides a wide range of 
                        advanced tools and features capable of providing real-time protection against all kinds of threats. 
                        It is an excellent application which keeps your PC secure and gives you the peace of mind you want.</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={image4} alt="image4" className="images" />
                            </div>
                        <br/><br/><br/>
                        <p>Auslogics Anti-Malware 2023 is an excellent application which provides the ultimate protection against all types of threats, 
                            secures your data, protects your privacy and ensures your PC remains malware-free. It provides three advanced scan modes such 
                            as Quick Scan, Deep Scan and Custom Scan. It can intelligently scan the entire system to find various threats and issues that 
                            might be affecting your computer’s performance. It can also check temporary folders for any security issues, while analyzing 
                            startup items and suspicious registry entries. The Deep Scan mode can be used to scan your entire system for any files that may 
                            cause a threat. The Quick Scan mode can be used when you only need to run a quick check of the most important folders. While 
                            the Custom Scan mode enables you to choose specific folders and files to be scanned. 
                            It offers a simple and user-friendly interface with all the tools and features easily accessible at the click of a button.</p>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={image4} alt="image4" className="images" />
                            </div>
                            <br/><br/><br/>
                            <h3> Auslogics Anti-Malware 2023 Features </h3>
                             <p>Below are some noticeable features which you will experience after Auslogics Anti-Malware 2023 Free Download</p>
                    <ul>
                        <li><p>Allows you to protect your PC against a wide range of online threats.</p></li>
                        <li><p>Intelligently detect all viruses, trojans , rootkits, scarewares and keyloggers.</p></li>
                        <li><p>Offers a wide range of advanced tools and features capable of providing real-time protection against all kinds of threats.</p></li>
                        <li><p>Keeps your PC secure and gives you the peace of mind you want.</p></li>
                        <li><p>Provides three advanced scan modes such as Quick Scan, Deep Scan and Custom Scan.</p></li>
                        <li><p>Intelligently scan the entire system to find various threats and issues that might be affecting your computer’s performance.</p></li>
                    </ul>
                    <br/><br/>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={image4} alt="image4" className="images" />
                    </div><br/><br/>
                    <h3> Auslogics Anti-Malware 2023 Technical Setup Details</h3>
                    <p>Prior to start Auslogics Anti-Malware 2023 Free Download, ensure the availability of the below listed system specifications</p>
                    <ul>
                        <li><p>Software Full Name: Auslogics Anti-Malware 2023</p></li>
                        <li><p>Setup File Name: Auslogics_Anti-Malware_1.22.0.rar</p></li>
                        <li><p>Setup Size: 15 MB</p></li>
                        <li><p>Setup Type: Offline Installer / Full Standalone Setup</p></li>
                        <li><p>Compatibility Mechanical: 32 Bit (x86) / 64 Bit (x64)</p></li>
                        <li><p>Latest Version Release Added On: 08th Jan 2023</p></li>
                    </ul>
                    
                    <br/><br/>
                    <h3> System Requirements for Auslogics Anti-Malware 2023</h3>
                    <ul>
                        <li><p>Operating System: Windows XP/Vista/7/8/8.1/10</p></li>
                        <li><p>RAM: 512 MB</p></li>
                        <li><p>Hard Disk: 100 MB</p></li>
                        <li><p>Processor: Intel Dual Core or higher processor</p></li>
                    </ul>
                    <br/><br/>
                    <h3> Auslogics Anti-Malware 2023 Free Download</h3>
                    <p>Click on the link below to start the Auslogics Anti-Malware 2023 Free Download. This is a full offline installer standalone setup for Windows Operating System. This would be compatible with both 32 bit and 64 bit windows.<b>the password of this file is :123 </b> </p>
                    <br/>
                    <div className="download4 ">
                        <button onClick={()=>{downloadFileAtURl(zipFile_URL)}}>
                            Download Full Setup <AiOutlineCloudDownload/>
                        </button></div><br/>
                    
                    </div>
                </div>


            </div>
        </>
    )
}
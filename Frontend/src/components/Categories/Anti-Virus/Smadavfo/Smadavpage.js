import React from "react";
import image2 from "../../../../assests/anti_virus/image2.jpg"
import { AiOutlineCloudDownload } from "react-icons/ai";
import "./Smadav.css";
import zipFile_URL from "../../../../Download/Smadav..rar";

export default function Smadav({isLoggedIn}) {
    const downloadFileAtURl = () => {
        if (isLoggedIn) {
            const aTag = document.createElement("a");
            aTag.href = zipFile_URL;
            aTag.setAttribute("download", "Avast_Anti-Malware_1.22.0.rar");
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
            <div className="card-container maincard2 mt-3">
                <div className="card par2">
                    <div className="card-content parent2">
                        <h1 className={"smadav2"}>Smadav Pro 2023 Free Download</h1>
                        <br/>
                        <br/>
                        <br/>
                        <small className={"smde2"}>Smadav Pro 2023 Free Download Latest Version for Windows. It is full offline installer standalone setup of Smadav Pro 2023 Free Download.</small>
                         <br/><br/>

                         <h4>Smadav Pro 2023 Overview</h4>
                        <p className="card-description">
                        Smadav Pro 2023 is a very powerful and robust antivirus 
                        application which offers complete protection against a wide range of malware, <br/>
                        including viruses, trojans, worms, ransomware, spyware, and more. <br/>It is a complete package which 
                        provides a variety of handy system optimization tools to enhance the security and performance of your computer. 
                        This great tool comes in handy for offline use to protect PCs from USB sticks,<br/> memory cards and flash drives against virus infections and other malware threats. It can detect many new unknown viruses in USB even if the virus is not in the database. 
                        It can regularly update the virus database to stay protected against the latest malware. It offers a beautiful green-themed tabbed interface with several tabs containing Scanner, 
                        Protection, Update, Tools, Settings, and more.</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={image2} alt="image2" className="images" />
                        </div>
                        <br/><br/><br/>
                        <p>Smadav Pro 2023 is the ultimate security application which offers real-time antivirus protection 
                            for your Windows PC at all times. It uses a variety of advanced scanning modes including Quick Scan,
                             Full Scan, System Area Scan and Deep System Area scan. It also includes smart filters that will help you specify
                             files, folders, or processes to be excluded from scan. It can constantly monitor your system for any suspicious 
                             activities, block malware in real-time and prevent potential infections. It also allows you to customize Windows 
                             Explorer as well as disable various system applications such as task manager, command prompt, windows hotkeys, 
                             display settings, registry editor etc. The program also includes options to set an admin password to avoid unauthorized access and provide an extra layer of security. 
                             On concluding note, Smadav Pro 2023 is a powerful 
                            security program that offers real-time antivirus protection, ensuring that your PC is protected at all times.</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={image2} alt="image2" className="images" />
                            </div>
                            <br/><br/><br/>
                            <h3> Smadav Pro 2023 Features </h3>
                             <p>Below are some noticeable features which you will experience after Smadav Pro 2023 Free Download</p>
                    <ul>
                        <li><p>Offers complete protection against a wide range of malware, including viruses, trojans, worms, ransomware, spyware, and more.</p></li>
                        <li><p>Provides a variety of handy system optimization tools to enhance the security and performance of your computer.</p></li>
                        <li><p>Protect PCs from USB sticks, memory cards and flash drives against virus infections and other malware threats.</p></li>
                        <li><p>Detect many new unknown viruses in USB even if the virus is not in the database.</p></li>
                        <li><p>Regularly update the virus database to stay protected against the latest malware.</p></li>
                        <li><p>Uses a variety of advanced scanning modes including Quick Scan, Full Scan, System Area Scan and Deep System Area scan.</p></li>
                        <li><p>Constantly monitor your system for any suspicious activities, block malware in real-time and prevent potential infections.</p></li>
                        <li><p>Allows you to customize Windows Explorer as well as disable various system applications such as task manager, command prompt, windows hotkeys, display settings, registry editor etc.</p></li>
                        <li><p>Ultimate security application which offers real-time antivirus protection for your Windows PC at all times.</p></li>
                    </ul>
                    <br/><br/>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={image2} alt="image2" className="images" />
                        </div> <br/><br/>
                    <h3> System Requirements for Smadav Pro 2023</h3>
                    <ul>
                        <li><p>Operating System: Windows XP/Vista/7/8/8.1/10</p></li>
                        <li><p>RAM: 512 MB</p></li>
                        <li><p>Hard Disk: 10 MB</p></li>
                        <li><p>Processor: Intel Dual Core or higher processor</p></li>
                    </ul>
                    
                    <br/><br/>
                    <h3> Smadav Pro 2023 Free Download</h3>
                    <p> Click on the link below to start the Smadav Pro 2023 Free Download. This is a full offline installer standalone setup for Windows Operating System. This would be compatible with both 32 bit and 64 bit windows.<br/>
                    <b>the Passwor of zip File is : 123</b></p>
                    <br/>
                    <div className="download2 ">
                    <button onClick={()=>{downloadFileAtURl(zipFile_URL)}}>
                        Download Full Setup <AiOutlineCloudDownload/>
                    </button></div><br/>
                    
                    </div>
                </div>


            </div>
        </>
    )
}
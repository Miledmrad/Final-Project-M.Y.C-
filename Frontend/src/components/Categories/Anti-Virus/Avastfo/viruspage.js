import React from "react";
import image1 from "../../../../assests/anti_virus/image1.jpg"
import "./viruspage.css"
import {AiOutlineCloudDownload} from "react-icons/ai";
import zipFile_URL from "../../../../Download/Avast.rar";

export default function VirusPage({isLoggedIn}) {
    const downloadFileAtURl = (url) => {
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
            <div className="card-container maincard mt-3">
                <div className="card par">
                    <div className="card-content parent">
                        <h1 className={"softwarename"}>Aspose.Total for .NET 2020 Free Download</h1>
                        <br/>
                        <br/>
                        <br/>
                        <small className={"smdescription"}>Aspose.Total for .NET 2020 Free Download Latest Version. It is full offline installer standalone setup of Aspose.Total for .NET 2020.</small>
                         <br/><br/>

                         <h4>Avast Ransomware Decryption Tools 2023 Overview</h4>
                        <p className="card-description">
                        Avast Ransomware Decryption Tools 2023 is an impressive application that eliminates ransomware from your machine’s 
                        with this package, which includes every one of Avast’s basic ransomware cleanup solutions. 
                        Luckily, there are several approaches to protect your machine from ransomware assaults despite the fact that you’re aware that none all-encompassing, 
                        bullet-proof option currently exists. If you’ve recently become a target of a ransomware assault, don’t panic</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={image1} alt="image1" className="images" />
                        </div>
                        <br/><br/><br/>
                        <p>Avast Ransomware Decryption Tools 2023 is simple to use and needs no setup. Just obtain the bundle, 
                            unpack it, and run the applications from the functional versions that come with it. Ransomware is a 
                            rapidly evolving digital safety issue and it might not need a lot of a description in the near future, 
                            since most experts think the situation continues to get more serious. It is suggested that you enable the 
                            Start the cracking operation as an admin option, and you should also examine backing up the data that has 
                            been encrypted. 
                            It lets you add network storage devices or local files to start the custom decoding operation.</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={image1} alt="image1" className="images" />
                            </div>
                            <br/><br/><br/>
                            <h3> Features of Avast Ransomware Decryption Tools 2023 </h3>
                             <p>Below are some noticeable features which you’ll experience after Avast Ransomware Decryption Tools 2023 free download.</p>
                    <ul>
                        <li><p>Eliminates ransomware from your machine’s with this package.</p></li>
                        <li><p>Includes every one of Avast’s basic ransomware cleanup solutions.</p></li>
                        <li><p>Simple to use and needs no setup.</p></li>
                        <li><p>Just obtain the bundle, unpack it and run the applications from the functional versions that come with it.</p></li>
                        <li><p>Lets you add network storage devices or local files to start the custom decoding operation. </p></li>
                        <li><p>Enable the Start the cracking operation as an admin option, and you should also examine backing up the data that has been encrypted.</p></li>
                    </ul>
                    <br/><br/>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={image1} alt="image1" className="images" />
                    </div> <br/><br/>
                    <h3> Avast Ransomware Decryption Tools 2023 Technical Setup Details</h3>
                    <ul>
                        <li><p>Software Full Name: Avast Ransomware Decryption Tools 2023</p></li>
                        <li><p>Setup File Name: Avast_Ransomware_Decryption.rar</p></li>
                        <li><p>Full Setup Size: 71 MB</p></li>
                        <li><p>Setup Type: Offline Installer / Full Standalone Setup</p></li>
                        <li><p>Compatibility Architecture: 32 Bit (x86) / 64 Bit (x64)</p></li>
                        <li><p>Latest Version Release Added On: 26th May 2023</p></li>
                    </ul>
                    
                    <br/><br/>
                    <h3> System Requirements For Avast Ransomware Decryption Tools 2023</h3>
                    <p>Before you start Avast Ransomware Decryption Tools 2023 free download, make sure your PC meets minimum system requirements.</p>
                    <ul>
                        <li><p>Operating System: Window 7/8/10/11</p></li>
                        <li><p>Memory (RAM): 1 GB of RAM required</p></li>
                        <li><p>Hard Disk Space: 100 MB of free space required</p></li>
                        <li><p>Processor: Intel Dual Core processor or higher</p></li>
                    </ul>
                    <br/><br/>
                    <h3> Avast Ransomware Decryption Tools 2023 Free Download</h3>
                    <p>Click on the button below to start Avast Ransomware Decryption Tools 2023 Free Download. This is a complete offline installer and standalone setup for Avast Ransomware Decryption Tools 2023. This would be compatible with both 32 bit and 64 bit windows.
                    <br/><b>the Passwor of zip File is : 123</b>
                    </p>
                    <br/>
                    <div className="download1 ">
                    <button onClick={()=>{downloadFileAtURl(zipFile_URL)}}>
                        Download Full Setup <AiOutlineCloudDownload/>
                    </button></div><br/>
                    
                    </div>
                </div>


            </div>
        </>
    )
}
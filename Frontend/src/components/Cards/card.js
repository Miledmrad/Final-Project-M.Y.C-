import "./card.css";
import {Link, redirect} from "react-router-dom";
import image1 from "../../assests/anti_virus/image1.jpg"
import image2 from "../../assests/anti_virus/image2.jpg"
import image3 from "../../assests/anti_virus/image3.jpg"
import image4 from "../../assests/anti_virus/image4.jpg"
import image5 from "../../assests/anti_virus/image5.jpg"


export default function Card() {

    const cards = [
        {
            title: <Link to="/Avastpage" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}}>Avast Ransomware Decryption Tools 2023 Free Download</Link>,
            image: image1,
            content: 'Avast Ransomware Decryption Tools 2023 Free Download. Full offline installer standalone setup of Avast Ransomware Decryption Tools 2023.'
        },
        {
            title:  <Link to="/smadav" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}} >Smadav Pro 2023 Free Download</Link>,
            image: image2,
            content: 'Smadav Pro 2023 Free Download Latest Version for Windows. It is full offline installer standalone setup of Smadav Pro 2023 Free Download.'
        },
        {
            title: <Link to="/iobitpage" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem' }} >IObit Malware Fighter Pro 2023 Free Download</Link>,
            image: image3,
            content: 'IObit Malware Fighter Pro 2023 Free Download Latest Version. It is full offline installer standalone setup of IObit Malware Fighter Pro 2023.'
        },
        {
            title: <Link to="/auslogpage" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}} >Auslogics Anti-Malware 2023 Free Download</Link>,
            image: image4,
            content: 'Auslogics Anti-Malware 2023 Free Download Latest Version. It is full offline installer standalone setup of Auslogics Anti-Malware 2023.'
        },
        {
            title: <Link to="/gridinpage" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}} >GridinSoft Anti-Malware 2022 Free Download</Link>,
            image: image5,
            content: 'GridinSoft Anti-Malware 2022 Free Download Latest Version. It is full offline installer standalone setup of GridinSoft Anti-Malware 2022.'
        },
    ];

    return (
        <>
            <div className="card-container main">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={'image'} className="card-image"/>
                        <div className="card-content child">
                        <button className="card-title">{card.title} </button>
                            <p className="card-description parg">{card.content}</p><br/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
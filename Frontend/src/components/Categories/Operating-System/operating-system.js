import {Link} from "react-router-dom";
import image1 from "../../../assests/operatingsys/image1.jpg";
import image2 from "../../../assests/operatingsys/image2.jpg";
import image3 from "../../../assests/operatingsys/image3.jpg";
import image4 from "../../../assests/operatingsys/image4.jpg";
import image5 from "../../../assests/operatingsys/image5.jpg";
import "./operating-system.css";

export default function OperatingSystem() {
    const cards = [
        {
            title: <Link to="/ospage" className="buttonclick" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}}>Windows 10 April 2023 Free Download</Link>,
            image: image1,
            content: 'Windows 10 April 2023 Free Download Latest OEM RTM version. It is Full Bootable ISO Image of Windows 10 April 2023 Free Download.'
        },
        {
            title: <Link to="/win11"style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}} > Windows 11 April 2023 Free Download </Link>,
            image: image2,
            content: 'Windows 11 April 2023 Free Download Latest OEM RTM version. It is Full Bootable ISO Image of Windows 11 April 2023 Free Download.'
        },
        {
            title: <Link to="/win7" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}} >Windows 7 Professional SP1 April 2023 Free Download</Link>,
            image: image3,
            content: 'Windows 7 Professional SP1 Multilingual APRIL 2023 Free Download Latest OEM RTM version. Bootable ISO Image of Windows 7 Professional SP1.'
        },
        {
            title: <Link to="/win7sp1" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}} > Windows 7 SP1 March 2023 Free Download</Link>,
            image: image5,
            content: 'Windows 7 SP1 March 2023 Free Download Latest OEM RTM version. It is Full Bootable ISO Image of Windows 7 SP1 March 2023 Free Download. '
        },
        {
            title: <Link to="/win8" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}} > Windows 8.1 Pro JAN 2023 Free Download </Link>,
            image: image4,
            content: 'Windows 8.1 Pro JAN 2023 Free Download Latest Version for Windows. It is full offline installer standalone setup of Windows 8.1 Pro JAN 2023.'
        },
    ];
    return (
        <>
            <div className="oshead px-5 py-4"><h1>Operating-System page</h1></div> <br/>
            <div className="card-container main">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={'image'} className="card-image"/>
                        <div className="card-content child">
                            <button className="card-title">
                                {card.title}
                            </button>
                            <p className="card-description parg">{card.content}</p><br/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
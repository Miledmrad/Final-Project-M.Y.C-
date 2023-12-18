import "./multimedia.css"
import {Link} from "react-router-dom";
import image1 from "../../../assests/multimedia/image1.jpg"
import image2 from "../../../assests/multimedia/image2.jpg"
import image3 from "../../../assests/multimedia/image3.jpg"
import image4 from "../../../assests/multimedia/image4.jpg"
import image5 from "../../../assests/multimedia/image5.jpg"

export default function Multimedia() {
    const cards = [
        {
            title: <Link to="/propresenter" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}}>ProPresenter 2023 Free Download</Link>,
            image: image1,
            content: 'ProPresenter 2023 Free Download Latest Version for Windows. It is full offline installer standalone setup of ProPresenter 2023 Free Download.'
        },
        {
            title: <Link to="/hitpaw" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}}>HitPaw Video Object Remover 2023 Free Download</Link>,
            image: image2,
            content: 'HitPaw Video Object Remover 2023 Free Download. It is full offline installer standalone setup of HitPaw Video Object Remover 2023'
        },
        {
            title: <Link to="/wincam" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}} > WinCam 2023 Free Download </Link>,
            image: image3,
            content: 'WinCam 2023 Free Download Latest Version for Windows. It is full offline installer standalone setup of WinCam 2023 Free Download'
        },
        {
            title: <Link to="/zortam" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}} > Zortam Mp3 Media Studio Pro 2023 Free Download </Link>,
            image: image4,
            content: 'Zortam Mp3 Media Studio Pro 2023 Free Download. It is full offline installer standalone setup of Zortam Mp3 Media Studio Pro 2023.'
        },
        {
            title: <Link to="/colorpicker" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}} > ColorPicker Max 2023 Free Download </Link>,
            image: image5,
            content: 'ColorPicker Max 2023 Free Download Latest Version for Windows. It is full offline installer standalone setup of ColorPicker Max 2023.'
        },
    ];
    return (
        <>
            <div className="multihead px-5 py-4"><h1>MultiMedia page</h1></div><br/>
    
            <div className="card-container main1">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={'image'} className="card-image"/>
                        <div className="card-content child1">
                            <button  className="card-title" >{card.title}</button>
                            <p className="card-description">{card.content}</p><br/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
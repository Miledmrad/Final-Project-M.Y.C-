import {Link} from "react-router-dom";
import image1 from "../../../assests/tutorialImage/image1.jpg";
import image2 from "../../../assests/tutorialImage/image2.png"
import image3 from "../../../assests/tutorialImage/image3.jpg";
import image4 from "../../../assests/tutorialImage/image4.png"
import image5 from "../../../assests/tutorialImage/image5.jpg";
import "./tutorials.css";


export default function TutorialPage() {
    const cards = [
        {
            title: <Link to="/tutorialpage" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}} >How to Find IT Jobs in the US </Link>,
            image: image1 ,
            content: 'Knowing how to hunt for a job is essential whether you’re searching for a job after graduation, looking for a change of employers, or advancing in your profession.',
        },
        {
            title: <Link to="/method" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}}>4 Methods to Fix “MP4 No Sound” Issue</Link>,
            image: image2,
            content: 'The MP4 No Sound problem is not a big deal. This article will teach you simple methods to get rid of it flawlessly.'
        },
        {
            title: <Link to="/dellcomputer" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}}>How to Screenshot on Dell Computer?</Link>,
            image: image3,
            content: 'Having trouble in screenshot the wonderful content on your Dell computer? Read it, and we will give you a step-by-step guide to help you capture what you want. '
        },{
            title: <Link to="/monitor" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}}>How to Monitor Your Child’s Phone Stealthily</Link>,
            image: image4,
            content: 'It’s not easy to be a parent nowadays. More and more dangers surround children: cyberbullying, online threats, or inappropriate content. If you want to know how to monitor your child’s phone remotely to ensure your offspring is safe and sound, keep reading the article.'
        },
        {
            title: <Link to="/prob-solution" style={{ textDecoration: 'none', color: 'black ' , padding:'0 2rem'}}>5 Simple Problem-Solving Tools</Link>,
            image: image5,
            content: 'We spend a lot of time solving problems in our personal and professional lives. Problem-solving can look very different depending on why you are doing it, the problem you’re trying to solve, and the tools you are using.'
        },
    ];
    return (
        <>
            <div className="tutorialhead px-5 py-4"><h1>Tutorial page</h1></div><br/>
            <div className="card-container main">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={'image'} className="card-image"/>
                        <div className="card-content child">
                            <button className="card-title">{card.title}
                            </button>
                            <p className="card-description parg">{card.content}</p><br/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
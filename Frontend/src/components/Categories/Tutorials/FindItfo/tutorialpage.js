import React from "react";
import {Link} from "react-router-dom";
import {AiOutlineCloudDownload} from "react-icons/ai";
import "./tutorialpage.css";
import image1 from "../../../../assests/tutorialImage/image1.jpg"

export default function TutorialPages() {
    return (
        <>
           <div className="card-container maincardtutorial1 mt-3">
                <div className="card partutorial1">
                    <div className="card-content parenttutorial1">
                        <h1 className={"smadavtutorial1"}>How to Find IT Jobs in the US</h1>
                        <br/>
                        <small className={"smdetutorial1"}>Knowing how to hunt for a job is essential whether you’re searching for a job after graduation, looking for a change of employers, or advancing in your profession.
                        <br/><br/>
                        With the demand for IT professionals increasing every year, finding a job in the field has become increasingly competitive. However, there are practical and efficient ways to get a new IT job in the industry. Whether you’re looking to find an IT jobs in Colorado or Austin, 
                        in this article, we will explore some of the best ways to find IT jobs in the US. Let’s dive in.
                        </small>
                         <br/><br/>
                       
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={image1} alt="image1" className="images" />
                            </div><br/>

                        <h4>Start Networking</h4>
                        <p className="card-description">
                        Networking is one of the most effective ways to get a job in the IT industry. Inform your network about your search so they can help you connect with people in the industry. Many job openings are filled internally through referrals before they are advertised, so it’s important to interact with the right individuals to get as many recommendations from your network as possible.
                        Make a list of people you know to start and locate any contacts who might know any job openings in the IT field. Next, get in touch with those people and maybe propose to meet for lunch or coffee to talk about your goals and interests. In order for the network to consider you first for employment openings, try to develop closer relationships with them. Attend industry events, join online groups, and be active in forums to build a strong network of contacts.</p>
                        
                        <h4>Job Boards</h4>
                        <p className="card-description">
                        Job boards are another popular way to find IT jobs in the US. You can discover job listings for several jobs on the employment boards like LinkedIn, advantis global, Glassdoor, and Monster. You can also look through all of the job descriptions on smaller or specialized job boards that appear even remotely relevant. Numerous websites feature remote employment opportunities. However, since everything is currently remote, don’t restrict yourself to only those. 
                        When you’re looking for a job, it’s important to cast a wide net and explore all the opportunities available.</p>

                        <h4>Speak With Businesses Directly</h4>
                        <p className="card-description">
                        Directly contacting businesses is another great way to find IT jobs in the US. You can directly target many company websites, making job searches significantly simpler. Direct applications will be accepted for any vacancies that are available on a company website. Reach out to a company you’re interested in by phone or email to check if they have any positions that match your skills and expertise that aren’t already listed on their website.<br/>
                        Even if a company isn’t actively hiring for your position, they could retain your resume on file just in case. When contacting businesses directly, it’s important to present yourself professionally and make a good first impression.</p>
                       
                        <h4>Make Use of Social Media</h4>
                        <p className="card-description">
                        <Link to="https://www.investopedia.com/terms/s/social-media.asp" target="_blank" rel="noopener">Social media</Link> is another tool you can use to find IT jobs. You can interact with companies you’d like to work for and seek opportunities on a variety of different social networking channels. No matter where they are in the world, you can find company pages on websites like Facebook and Instagram and follow them.<br/>
                        You may learn a lot about a company’s tone, interests, and working style by following its social media accounts. You can start a conversation with them by leaving comments on their postings. Through these networks, you might even be informed of job openings. Making your own profiles appropriate is crucial if you use social media for business. Even though you are using the platforms for personal rather than professional reasons, they should present a positive impression of you. Use your actual name and only share anything appropriate.</p>

                        <h4>Attend Career Fairs</h4>
                        <p className="card-description">
                        A career fair is a unique occasion to bring businesses and prospective employees to connect and exchange knowledge. Large corporations looking to hire a lot of people as well as recent graduates frequently attend these events. At these events, you can run into corporations of all recruiters, sizes, and perhaps even colleges and institutions.
                       Job fairs are fantastic places to network and hand out resumes to prospective companies. Following are some pointers to have in mind if you choose to go to a job fair:</p>
                       <ul>
                       <li> Do some research on the fair to find out which companies will be present.</li>
                       <li>  Don’t forget to bring plenty of resumes and business cards.</li>
                       <li> Take a portfolio, and references from a previous employer</li>
                       </ul>


                       <h4>Endnote</h4>
                        <p className="card-description">
                        Finding a job in the <Link to="https://www.statista.com/outlook/tmo/it-services/united-states" target="_blank" rel="noopener"> IT industry in the US</Link> requires a multi-faceted approach. It’s important to stay proactive and persistent in your job search and to remain open to new opportunities. By utilizing these strategies, you can increase your chances of finding a 
                        fulfilling and rewarding career in the exciting field of IT.</p>
                    <h3 className="end"> This Post was Last Updated On: May 15, 2023</h3>
                    
                    <br/>
                
                    
                    </div>
                </div>


            </div>
        </>
    )
}
import React from "react";
import {Link} from "react-router-dom";
import {AiOutlineCloudDownload} from "react-icons/ai";
import "./SolvingTools.css";
import image5 from "../../../../assests/tutorialImage/image5.jpg";

export default function SolvingsTools() {
    return (
        <>
           <div className="card-container maincardtutorial5 mt-3">
                <div className="card partutorial5">
                    <div className="card-content parenttutorial5">
                        <h1 className={"smadavtutorial5"}>5 Simple Problem-Solving Tools</h1>
                        
                        <small className={"smdetutorial5"}>We spend a lot of time solving problems in our personal and professional lives. Problem-solving can look very different depending on why you are doing it, the problem you’re trying to solve, and the tools you are using. Understanding the problem is one part of solving it, with the other being finding the right tools to help you with the process. In this article, we look at some simple problem-solving tools that you could start using today.</small>
                         <br/>
                         <br/><br/> <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={image5} alt="image5" className="images" />
                            </div><br/>

                         <h4>Venn Diagrams</h4> 
                        <p className="card-description">
                        Venn diagrams define and make it easier to see the relationships between sets. These could be sets of data, sets of items, or sets of almost anything else. Most <Link to="https://miro.com/graphs/what-is-a-venn-diagram/"> basic Venn diagrams </Link> consist of two circles, 
                        which denote the boundaries of the sets being compared, although they can use more data sets and circles. The similarities or commonalities between the two sets are then added where the circles overlap.<br/>,<br/>
                        Businesses often use Venn diagrams during the hiring process. A three-set Venn diagram that includes the professional skills, experience, and leadership qualities a business is looking for. The right candidate meets all three requirements, and they will be at the center of the three-set diagram where all three qualities intersect.</p>
                       
                        <h4>Fishbone Diagrams</h4> 
                        <p>Fishbone diagrams are called that because they resemble the structure of a fish when they are complete. The head is the problem you are trying to solve and the ribs or bones are the potential causes of the issue.<br/>
                        <Link to="https://miro.com/diagramming/what-is-a-fishbone-diagram/"> Fishbone diagrams</Link> are an excellent option when there could be more than one solution or problem causing the main issue. They help you lay everything out in an organized manner so you can investigate each cause or issue thoroughly and ensure you do not miss anything.<br/>
                          They can also let you see how different factors are related while also allowing you to break down the potential issues even further if you want to go deeper.</p>
                            
                            <h3> Mental Maps </h3>
                             <p><Link to="https://www.thoughtco.com/mental-map-definition-1434793">Mental maps </Link> help with the organizational aspect of problem-solving. They help you put the problem and possible solutions onto a diagram which makes it easier to work through possible solutions.<br/>
                             They can often resemble fishbone diagrams, but they go much further by helping you drill down and further into single issues. Many of them exist in a digital space, thereby making it much easier to extend them as you like.<br/>
                             Mental maps are also great for taking in information and brainstorming. You can share your mind map with colleagues so you can work through potential issues together. They can add possible solutions, refine what you have already added, and help you drill down further into an issue.</p>

                             <h3> Five Whys</h3>
                            <p>Five whys is more of a technique rather than a tool, but it is great for getting down to the root of an issue. To use this technique, you state the problem you have and ask why in succession for each possible cause you get.<br/>
                             For example, if your competitor’s product is outcompeting yours, you could use the five whys to eventually get to the answer, which might be that they have a larger marketing budget, better packaging, or even better pricing.</p>
                    
                    
                            <h3> Flowcharts</h3>
                            <p>Flowcharts are a very versatile tool because they can be used for much more than problem-solving. They can help you outline an issue and examine the steps that got you to that issue.
                               Flow charts are also incredibly helpful in helping you track decisions that occur in a process or system over time. If an issue occurs, it becomes much easier to backtrack to see how the decisions made led to the problem you are having.
                               You can also <Link to="https://www.ucl.ac.uk/culture-online/case-studies/2021/jun/what-significance-flowchart">use flowcharts </Link> to go the other way. Instead of seeing how a problem occurred, you can use flowcharts to get to a solution. When used like this, you can walk through potential solutions or talk to people to get their input. This is especially important for processes that require a lot of user input.</p>
                    
                            <h3> Conclusion </h3>
                           <p>Problem-solving is an integral part of our professional lives. Tools make it much easier to complete the processes and steps that lead us to solutions for the issue we may be having. Leveraging these tools can also save you a lot of time and headaches.</p>
                           <br/>
                           <h4 style={{color:'darkgreen'}}>This Post was Last Updated On: March 13, 2023</h4>
                    </div>
                </div>


            </div>
        </>
    )
}
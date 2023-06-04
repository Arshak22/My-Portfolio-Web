import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import { useGlobalContext } from "../../Context/Context";

import { ImCross } from "react-icons/im";


import WaterElement1 from '../../assets/FinalPics/WaterElement1.png';
import WaterElement2 from '../../assets/FinalPics/WaterElement2.png';

import PoseidonPopUpL from '../../assets/FinalPics/Poseidon-PopUpL.png';
import PoseidonPopUpM from '../../assets/FinalPics/Poseidon-PopUpM.png';
import PoseidonPopUpR from '../../assets/FinalPics/Poseidon-PopUpR.png';

//Project-1
import Project1_1 from '../../assets/PortfolioWebPics/6-1.jpg';
import Project1_2 from '../../assets/PortfolioWebPics/6-2.jpg';
import Project1_3 from '../../assets/PortfolioWebPics/6-3.jpg';
import Project1_4 from '../../assets/PortfolioWebPics/6-4.jpg';

//Project-2
import Project2_1 from '../../assets/PortfolioWebPics/3-1.jpg';
import Project2_2 from '../../assets/PortfolioWebPics/3-2.jpg';
import Project2_3 from '../../assets/PortfolioWebPics/3-3.jpg';
import Project2_4 from '../../assets/PortfolioWebPics/3-4.jpg';

//Project-3
import Project3_1 from '../../assets/PortfolioWebPics/1-1.jpg';
import Project3_2 from '../../assets/PortfolioWebPics/1-2.jpg';
import Project3_3 from '../../assets/PortfolioWebPics/1-3.jpg';
import Project3_4 from '../../assets/PortfolioWebPics/1-4.jpg';

//Project-4
import Project4_1 from '../../assets/PortfolioWebPics/2-1.jpg';
import Project4_2 from '../../assets/PortfolioWebPics/2-2.jpg';
import Project4_3 from '../../assets/PortfolioWebPics/2-3.jpg';
import Project4_4 from '../../assets/PortfolioWebPics/2-4.jpg';

//Project-5
import Project5_1 from '../../assets/PortfolioWebPics/5-1.jpg';
import Project5_2 from '../../assets/PortfolioWebPics/5-2.jpg';
import Project5_3 from '../../assets/PortfolioWebPics/5-3.jpg';
import Project5_4 from '../../assets/PortfolioWebPics/5-4.jpg';

//Project-6
import Project6_1 from '../../assets/PortfolioWebPics/4-1.jpg';
import Project6_2 from '../../assets/PortfolioWebPics/4-2.jpg';
import Project6_3 from '../../assets/PortfolioWebPics/4-3.jpg';
import Project6_4 from '../../assets/PortfolioWebPics/4-4.jpg';

export default function Portfolio() {
    const {popUpOpen, setPopUpOpen} = useGlobalContext();
    const [popUpState, setPopUpState] = useState(Array(6).fill(false));
    const firstProject = [Project1_1, Project1_2, Project1_3, Project1_4];
    const secondProject = [Project2_1, Project2_2, Project2_3, Project2_4];
    const thirdProject = [Project3_1, Project3_2, Project3_3, Project3_4];
    const fourthProject = [Project4_1, Project4_2, Project4_3, Project4_4];
    const fifthProject = [Project5_1, Project5_2, Project5_3, Project5_4];
    const sixthProject = [Project6_1, Project6_2, Project6_3, Project6_4];
    const handleOpen = (index) => {
        setPopUpState(popUpState.map((popup, i) => i === index ? true : false));
        document.body.classList.add('hiddenScroll');
        setPopUpOpen(true);
    };

    const handleClose = () => {
        setPopUpState(Array(6).fill(false));
        document.body.classList.remove('hiddenScroll');
        setPopUpOpen(false);
    };

    return(
    <div className={popUpOpen ? 'Portfolio bluredSection' : 'Portfolio'}>
        <h1>My Portfolio</h1>
        <img src={WaterElement1} alt='WaterElement-1' className='waterElement1'/>
        <div className='portfolioContainer'>
            <Popup trigger={
                <div className='project'>
                    <img src={Project1_1} alt='Project-1'/>
                </div>
            } 
            position="center"
            open={popUpState[0]}
            onOpen={() => handleOpen(0)}
            onClose={handleClose}>
            {close => (
                <div className='popUpContainer'>
                    <div className='myPopUp'>
                        <div className='popUpSlider'>
                            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={false} swipeable={true} emulateTouch={true} dynamicHeight={false}>
                                {firstProject.map((image, index) => (
                                    <div key={index} className='sliderImages'>
                                        <img src={image} alt={`Image ${index + 1}`}/>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className='popUpInfo'>
                            <h1>Movie Website with Recommendation System</h1> 
                            <h3>Capstone Project</h3>
                            <p>Introducing my capstone project, a dynamic movie website inspired by IMDB, showcasing a personalized recommendation system that enhances the user experience by suggesting films tailored to individual preferences.</p>
                            <a href="https://github.com/Arshak22/Capstone-Project" target="_blank" rel="noopener noreferrer"><button className='popBtn'>View Code</button></a>
                        </div>
                        <button onClick={close} className='closeBtn'><ImCross/></button>
                    </div>
                    <img src={PoseidonPopUpL} alt="PoseidonPopUpL" className='PoseidonPopUpL'/>
                </div>
            )}
            </Popup>
            <Popup trigger={
                <div className='project'>
                    <img src={Project2_1} alt='Project-2'/>
                </div>
            } 
            position="center"
            open={popUpState[1]}
            onOpen={() => handleOpen(1)}
            onClose={handleClose}>
            {close => (
                <div className='popUpContainer'>
                    <div className='myPopUp'>
                        <div className='popUpSlider'>
                            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={false} swipeable={true} emulateTouch={true} dynamicHeight={false}>
                                {secondProject.map((image, index) => (
                                    <div key={index} className='sliderImages'>
                                        <img src={image} alt={`Image ${index + 1}`}/>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className='popUpInfo'>
                            <h1>Insurance Agent<br/>Website</h1> 
                            <h3>Insurance Template</h3>
                            <p>Presenting my customizable Insurance Agent Website template, designed to empower insurance professionals by showcasing their expertise, services, and personal brand, helping them connect with clients effectivel.</p>
                            <a href="https://demo26.mbswebsite.com/" target="_blank" rel="noopener noreferrer"><button className='popBtn'>View Demo</button></a>
                        </div>
                        <button onClick={close} className='closeBtn'><ImCross/></button>
                    </div>
                    <img src={PoseidonPopUpM} alt="PoseidonPopUpM" className='PoseidonPopUpM'/>
                </div>
            )}
            </Popup>
            <Popup trigger={
                <div className='project'>
                    <img src={Project3_1} alt='Project-3'/>
                </div>
            } 
            position="center"
            open={popUpState[2]}
            onOpen={() => handleOpen(2)}
            onClose={handleClose}>
            {close => (
                <div className='popUpContainer'>
                    <div className='myPopUp'>
                        <div className='popUpSlider'>
                            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={false} swipeable={true} emulateTouch={true} dynamicHeight={false}>
                                {thirdProject.map((image, index) => (
                                    <div key={index} className='sliderImages'>
                                        <img src={image} alt={`Image ${index + 1}`}/>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className='popUpInfo'>
                            <h1>Real Estate Agent<br/>Website</h1> 
                            <h3>IDX Template</h3>
                            <p>Introducing my creation, a cutting-edge Real Estate Agent Website that revolutionizes the way buyers and sellers connect. This dynamic platform combines powerful branding tools with an integrated IDX (Internet Data Exchange) feature.</p>
                            <a href="https://www.demo1.mbswebsite.com/" target="_blank" rel="noopener noreferrer"><button className='popBtn'>View Demo</button></a>
                        </div>
                        <button onClick={close} className='closeBtn'><ImCross/></button>
                    </div>
                    <img src={PoseidonPopUpR} alt="PoseidonPopUpR" className='PoseidonPopUpR'/>
                </div>
            )}
            </Popup>
            <Popup trigger={
                <div className='project'>
                    <img src={Project4_1} alt='Project-4'/>
                </div>
            } 
            position="center"
            open={popUpState[3]}
            onOpen={() => handleOpen(3)}
            onClose={handleClose}>
            {close => (
                <div className='popUpContainer'>
                    <div className='myPopUp'>
                        <div className='popUpSlider'>
                            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={false} swipeable={true} emulateTouch={true} dynamicHeight={false}>
                                {fourthProject.map((image, index) => (
                                    <div key={index} className='sliderImages'>
                                        <img src={image} alt={`Image ${index + 1}`}/>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className='popUpInfo'>
                            <h1>Insurance Agent<br/>Website</h1> 
                            <h3>Insurance Template</h3>
                            <p>Introducing a dynamic Insurance Website Template that empowers agencies to establish a compelling online presence, featuring engaging design and robust customer engagement tools for effective client connections.</p>
                            <a href="https://demo97.tcy.nsq.mybluehost.me/" target="_blank" rel="noopener noreferrer"><button className='popBtn'>View Demo</button></a>
                        </div>
                        <button onClick={close} className='closeBtn'><ImCross/></button>
                    </div>
                    <img src={PoseidonPopUpL} alt="PoseidonPopUpL" className='PoseidonPopUpL'/>
                </div>
            )}
            </Popup>
            <Popup trigger={
                <div className='project'>
                    <img src={Project5_1} alt='Project-5'/>
                </div>
            } 
            position="center"
            open={popUpState[4]}
            onOpen={() => handleOpen(4)}
            onClose={handleClose}>
            {close => (
                <div className='popUpContainer'>
                    <div className='myPopUp'>
                        <div className='popUpSlider'>
                            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={false} swipeable={true} emulateTouch={true} dynamicHeight={false}>
                                {fifthProject.map((image, index) => (
                                    <div key={index} className='sliderImages'>
                                        <img src={image} alt={`Image ${index + 1}`}/>
                                    </div>
                                ))}
                            </Carousel>
                        </div> 
                        <div className='popUpInfo'>
                            <h1>Real Estate Agent<br/>Website</h1> 
                            <h3>IDX Template</h3>
                            <p>Elevate your real estate brand with a dynamic website template designed exclusively for agents. Featuring stunning visuals and integrated IDX functionality, this platform effortlessly connects you with potential buyers and sellers.</p>
                            <a href="https://demo107.tcy.nsq.mybluehost.me/" target="_blank" rel="noopener noreferrer"><button className='popBtn'>View Demo</button></a>
                        </div>
                        <button onClick={close} className='closeBtn'><ImCross/></button>
                    </div>
                    <img src={PoseidonPopUpM} alt="PoseidonPopUpM" className='PoseidonPopUpM'/>
                </div>
            )}
            </Popup>
            <Popup trigger={
                <div className='project'>
                    <img src={Project6_1} alt='Project-6'/>
                </div>
            } 
            position="center"
            open={popUpState[5]}
            onOpen={() => handleOpen(5)}
            onClose={handleClose}>
            {close => (
                <div className='popUpContainer'>
                    <div className='myPopUp'>
                        <div className='popUpSlider'>
                            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={false} swipeable={true} emulateTouch={true} dynamicHeight={false}>
                                {sixthProject.map((image, index) => (
                                    <div key={index} className='sliderImages'>
                                        <img src={image} alt={`Image ${index + 1}`}/>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className='popUpInfo'>
                            <h1>Insurance Agent<br/>Website</h1> 
                            <h3>Insurance Template</h3>
                            <p>Unlock your insurance agency's online potential with a sleek and modern website template tailored specifically for agents. Seamlessly showcase your services, expertise, and personalized branding, while effortlessly connecting with clients.</p>
                            <a href="https://demo82.tcy.nsq.mybluehost.me/" target="_blank" rel="noopener noreferrer"><button className='popBtn'>View Demo</button></a>
                        </div>
                        <button onClick={close} className='closeBtn'><ImCross/></button>
                    </div>
                    <img src={PoseidonPopUpR} alt="PoseidonPopUpR" className='PoseidonPopUpR'/>
                </div>
            )}
            </Popup>
        </div>
        <img src={WaterElement2} alt='WaterElement-1' className='waterElement2'/>
    </div>);
};
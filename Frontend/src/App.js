import './App.css';
import Navbar from '../src/components/Navbar/navbar';
import Login from '../src/components/Auth/login';
import Register from '../src/components/Auth/register';
import Virus from './components/Categories/Anti-Virus/virus';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Multimedia from './components/Categories/Multimedia/multimedia';
import OperatingSystem from './components/Categories/Operating-System/operating-system';
import Tutorial from './components/Categories/Tutorials/tutorials';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import MultimediaPage from "./components/Categories/Multimedia/ProPresenterfo/multimediapage";
import Hitpaws from "./components/Categories/Multimedia/HitPawfo/Hitpaw";
import Wincams from "./components/Categories/Multimedia/Wincamfo/Wincam";
import Zortams from "./components/Categories/Multimedia/Zortamfo/Zortam";
import Colorpickers from "./components/Categories/Multimedia/Colorpickerfo/Colorpicker";

import VirusPage from "./components/Categories/Anti-Virus/Avastfo/viruspage";
import Smadav from "./components/Categories/Anti-Virus/Smadavfo/Smadavpage";
import Iobit from "./components/Categories/Anti-Virus/IObitfo/IObit";
import Auslog from "./components/Categories/Anti-Virus/Auslogucsfo/Auslogics";
import Grid from "./components/Categories/Anti-Virus/GridinSoftfo/GridinSoft";

import OsPage from "./components/Categories/Operating-System/Windfo/ospage"
import Methods from './components/Categories/Operating-System/Windows/method';
import Screenshots from './components/Categories/Operating-System/Spwind/scrennShot';
import Monitors from './components/Categories/Operating-System/Profess/monitor';
import ProbSolvs from './components/Categories/Operating-System/Prowin/probsolv';

import TutorialPages from './components/Categories/Tutorials/FindItfo/tutorialpage';
import MethodFixs from './components/Categories/Tutorials/Methods/methodFix';
import DellComputers from './components/Categories/Tutorials/dellComputer/DellComps';
import MonitorChilds from './components/Categories/Tutorials/monitor/MonitorChild';
import SolvingsTools from './components/Categories/Tutorials/solvingTools/SolvingTools';
import FooterJs from "./components/Footer/Footer";
import Contactus from "./components/Footer/ContactUs/Contac"
import AboutUs from "./components/Footer/AboutUs/About";

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

function AppContent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (username) => {
        setIsLoggedIn(true);
        setUsername(username);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };
    const location = useLocation();
    const isLoginRoute = location.pathname === '/login' || location.pathname === '/Register';

    const renderFooter = !isLoginRoute  && <FooterJs />;



    const GoToTopButton = () => {
        const [isVisible, setIsVisible] = useState(false);

        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        if (location.pathname === '/login' || location.pathname === '/Register') {
            return null;
        }

        return (
            <div className={`go-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
                <BsFillArrowUpCircleFill size={35} />
            </div>
        );
    };
    const showNavbarAndFooter = !location.pathname.includes('/login');
    return (
        <>
            <div className={"body"}>
                {showNavbarAndFooter && <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />}
            <Routes>
                <Route
                    path="/login"
                    element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
                />
                <Route path="/Register" element={<Register />} />
                <Route path="/" element={<Virus />} />

                <Route path="/virus" element={<Virus />} />
                <Route path="/Avastpage" element={<VirusPage />} />
                <Route path="/smadav" element={<Smadav />} />
                <Route path="/iobitpage" element={<Iobit/>} />
                <Route path="/auslogpage" element={<Auslog isLoggedIn={isLoggedIn} />} />
                <Route path="/gridinpage" element={<Grid/>} />

                <Route path="/multimedia" element={<Multimedia />} />
                <Route path="/propresenter" element={<MultimediaPage />} />
                <Route path="/hitpaw" element={<Hitpaws />} />
                <Route path="/wincam" element={<Wincams />} />
                <Route path="/zortam" element={<Zortams />} />
                <Route path="/colorpicker" element={<Colorpickers />} />


                <Route path="/operating-system" element={<OperatingSystem />} />
                <Route path="/ospage" element={<OsPage />} />
                <Route path="/win11" element={<Methods />} />
                <Route path="/win7" element={<Screenshots />} />
                <Route path="/win7sp1" element={<Monitors />} />
                <Route path="/win8" element={<ProbSolvs />} />



                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/tutorialpage" element={<TutorialPages />} />
                <Route path="/method" element={<MethodFixs />} />
                <Route path="/dellcomputer" element={<DellComputers />} />
                <Route path="/monitor" element={<MonitorChilds />} />
                <Route path="/prob-solution" element={<SolvingsTools />} />

                <Route path="/ContactUs" element={<Contactus/>}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
            </Routes>
                {renderFooter}
            <GoToTopButton location={location} />
            </div>
        </>
    );
}

export default App;

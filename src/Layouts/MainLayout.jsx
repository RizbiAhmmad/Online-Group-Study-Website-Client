import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ThemeContext } from '../provider/ThemeProvider';

const MainLayout = () => {
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <div className={`${isDarkMode ? "bg-black text-teal-500" : "bg-white text-black"} mx-auto`}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
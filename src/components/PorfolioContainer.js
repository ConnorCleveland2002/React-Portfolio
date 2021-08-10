// import logo from './logo.svg';
import React, {useState} from "react";
import NavTabs from "./NavTabs"
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact"
import "./App.css";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Homepage');
    const renderPage = () => {
        if (currentPage === 'Homepage') {
            return <Homepage />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        return <Contact />;
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage}    
        </div>
    )
};
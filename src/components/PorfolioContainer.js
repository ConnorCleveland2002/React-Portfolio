import React, {useState} from 'react';
import NavTabs from './NavTabs';
import Homepage from './pages/homepage.js';
import Works from './pages/Works';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Homepage');
    const renderPage = () => {
        if (currentPage === 'Homepage') {
            return <Homepage />;
        }
        if (currentPage === 'Works') {
            return <Works />;
        }
        return <Contact />;
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
};
import React, { useState, useEffect } from 'react';

// Router
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [themeState, setThemeState] = useState(false);

    const handleChange = () => {
        setThemeState(!themeState);

        if (themeState) {
            // Set to Dark Mode
            localStorage.setItem('Theme', 'dark');

            // Add Dark Mode class to body
            document.body.classList.add('dark_mode');

            // Remove light Bootstrap classes from Navbar
            document.getElementById('nav_toggle').classList.remove('bg-light');
            document
                .getElementById('nav_toggle')
                .classList.remove('navbar-light');

            // Add new dark Bootstrap classes to Navbar
            document.getElementById('nav_toggle').classList.add('navbar-dark');
            document.getElementById('nav_toggle').classList.add('bg-dark');
        } else {
            // Set to Light Mode
            localStorage.setItem('Theme', 'light');

            // Remove Dark Mode class from body
            document.body.classList.remove('dark_mode');

            // Remove dark Bootstrap classes from Navbar
            document
                .getElementById('nav_toggle')
                .classList.remove('navbar-dark');
            document.getElementById('nav_toggle').classList.remove('bg-dark');

            // Add new light Bootstrap classes from Navbar
            document.getElementById('nav_toggle').classList.add('navbar-light');
            document.getElementById('nav_toggle').classList.add('bg-light');
        }
    };

    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');

        if (getTheme === 'dark')
            return document.body.classList.add('dark_mode');
    });

    return (
        <header>
            <nav className="navbar navbar-light bg-light" id="nav_toggle">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">
                        Where in the world?
                    </span>
                    <Link
                        to="#"
                        className="toggle_mode ms-auto"
                        onClick={handleChange}
                    >
                        Dark Mode
                    </Link>
                </div>
            </nav>
        </header>
    );
}

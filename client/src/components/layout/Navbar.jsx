import React, { useState, useEffect } from 'react';

// Router
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.classList.add('light');
    }, []);

    const handleChange = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.body.classList.add('dark');
            document.body.classList.remove('light');

            document.body.classList.add('navbar-dark');
            document.body.classList.remove('navbar-light');

            document.body.classList.add('bg-dark');
            document.body.classList.remove('bg-light');

            document.body.classList.add('text-light');
            document.body.classList.remove('text-dark');
        } else if (theme === 'dark') {
            setTheme('light');
            document.body.classList.add('light');
            document.body.classList.remove('dark');

            document.body.classList.add('navbar-light');
            document.body.classList.remove('navbar-dark');

            document.body.classList.add('bg-light');
            document.body.classList.remove('bg-dark');

            document.body.classList.add('text-dark');
            document.body.classList.remove('text-light');
        }
    };

    return (
        <header>
            <nav className="navbar shadow-sm" id="nav_toggle">
                <div className="container-fluid mx-5">
                    <span className="navbar-brand mb-0 h1">
                        Where in the world?
                    </span>

                    <div className="toggle ms-auto d-flex align-items-center">
                        <i className="far fa-moon me-2"></i>
                        <Link
                            to="#"
                            className="toggle_link"
                            onClick={handleChange}
                        >
                            Dark Mode
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Country({ name, population, region, capital, flag }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <Link to={`/countries/${name}`}>
                <img src={flag} className="card-img-top" alt="flag" />
            </Link>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>

                <p className="card-text">
                    <strong>Population:</strong> {population}
                </p>

                <p className="card-text">
                    <strong>Region:</strong> {region}
                </p>

                <p className="card-text">
                    <strong>Capital:</strong> {capital}
                </p>
            </div>
        </div>
    );
}

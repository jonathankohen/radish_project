import React from 'react';

// Router
import { Link } from 'react-router-dom';

export default function Country({ name, population, region, capital, flag }) {
    return (
        <div className="card rounded" style={{ width: '18rem' }}>
            <Link to={`/countries/${name}`}>
                <img
                    src={flag}
                    className="card-img-top"
                    alt="flag"
                    style={{ width: '100%', height: '200px' }}
                />
            </Link>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>

                <p className="card-text">
                    <span className="card_bold">Population:</span>{' '}
                    {population.toLocaleString()}
                </p>

                <p className="card-text">
                    <span className="card_bold">Region:</span> {region}
                </p>

                <p className="card-text">
                    <span className="card_bold">Capital:</span> {capital}
                </p>
            </div>
        </div>
    );
}

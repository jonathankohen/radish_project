import React from 'react';

// Router
import { Link } from 'react-router-dom';

export default function Country({ name, population, region, capital, flag }) {
    return (
        <div className="card my-2 h-100 rounded-3">
            <div className="card_top">
                <Link to={`/countries/${name}`}>
                    <img
                        src={flag}
                        className="card-img-top img-fluid rounded-3"
                        alt="flag"
                    />
                </Link>
            </div>

            <div className="card-body ms-3">
                <h5 className="card-title py-3">{name}</h5>

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

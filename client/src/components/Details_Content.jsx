import React from 'react';

// Routing
import { Link } from 'react-router-dom';

export default function Details_Content({ country, results }) {
    return (
        <div className="container details my-5">
            <div className="row my-5 mx-lg-2">
                <div className="col my-3">
                    <Link
                        to="/"
                        type="button"
                        className="btn btn-secondary shadow px-5 ms-3"
                    >
                        <i class="fas fa-long-arrow-alt-left me-2"></i>
                        Back
                    </Link>
                </div>
            </div>

            <div className="row d-flex justify-content-around">
                <div className="col-xs-12 col-lg-6 d-flex justify-content-center mx-lg-3 mb-4">
                    <img
                        src={country.flag}
                        className="img-fluid shadow-lg details_flag"
                        alt="flag"
                    />
                </div>

                <div className="col-xs-12 col-lg-5 details_text">
                    <div className="row">
                        <div className="col mb-4 mt-5">
                            <h1 id="details_title">{country.name}</h1>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-xs-12 col-lg-6">
                            <p>
                                <span className="details_bold">
                                    Native Name:
                                </span>
                                {country.nativeName}
                            </p>
                            <p>
                                <span className="details_bold">
                                    Population:
                                </span>
                                {country.population.toLocaleString()}
                            </p>
                            <p>
                                <span className="details_bold">Region:</span>
                                {country.region}
                            </p>
                            <p>
                                <span className="details_bold">
                                    Sub Region:
                                </span>
                                {country.subregion}
                            </p>
                            <p>
                                <span className="details_bold">Capital: </span>
                                {country.capital}
                            </p>
                        </div>

                        <div className="col-xs-12 col-lg-6">
                            <p>
                                <span className="details_bold">
                                    Top Level Domain:
                                </span>
                                {country.topLevelDomain}
                            </p>
                            <p>
                                <span className="details_bold">
                                    Currencies:
                                </span>

                                {country.currencies.map((curr, i) => (
                                    <span key={i}>{curr.name}</span>
                                ))}
                            </p>
                            <p>
                                <span className="details_bold">Languages:</span>

                                {country.languages.map((lan, i) => (
                                    <span key={`${i}`}>
                                        {(i ? ', ' : '') + lan.name}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>

                    {country.borders.length > 0 ? (
                        <div className="row mt-5 d-flex align-items-baseline">
                            <div className="col-xs-12 col-lg-4 mb-4">
                                <p className="details_bold">
                                    Border Countries:
                                </p>
                            </div>

                            <div className="col">
                                {results.map((r, i) => (
                                    <Link
                                        to={`/countries/${r.name}`}
                                        key={i}
                                        type="button"
                                        className="btn btn-sm btn-secondary details_btn shadow-sm me-3 mb-3"
                                    >
                                        {r.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
}

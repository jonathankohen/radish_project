import React, { useState, useEffect } from 'react';

// Routing
import { Link, useParams } from 'react-router-dom';

// Axios
import axios from 'axios';
const baseURL = 'https://restcountries.eu/rest/v2';

export default function Details() {
    const [country, setCountry] = useState({});
    const [countries, setCountries] = useState([]);
    const [results, setResults] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);
    const { name } = useParams();
    const { currencies, population, languages } = country;

    useEffect(() => {
        let unmounted = false;

        setPageLoading(true);

        axios
            .get(`${baseURL}/name/${name}`)
            .then(res => setCountry(res.data[0]))
            .then(() => {
                axios
                    .get(`${baseURL}/all`)
                    .then(res => setCountries(res.data))
                    .catch(err => console.log(err));
            })
            .then(() =>
                setResults(
                    countries.filter(c =>
                        country.borders.includes(c.alpha3Code)
                    )
                )
            )
            .then(() => {
                if (!unmounted) {
                    setPageLoading(false);
                }
            })
            .catch(err => {
                if (!unmounted) {
                    console.log(err);
                    setPageLoading(false);
                }
            });
    }, [name]);

    return (
        <>
            {!pageLoading ? (
                <div className="container-fluid details">
                    <div className="row m-5">
                        <div className="col">
                            <Link
                                to="/"
                                type="button"
                                className="btn btn-secondary px-5 py-2 shadow"
                            >
                                <i class="fas fa-long-arrow-alt-left me-3"></i>
                                Back
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <img
                                src={country.flag}
                                className="img-fluid shadow detail_flag"
                                alt="flag"
                            />
                        </div>

                        <div className="col">
                            <div className="col">
                                <h1 id="details_title">{country.name}</h1>
                            </div>

                            <div className="row py-3">
                                <div className="col">
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
                                        {population.toLocaleString()}
                                    </p>
                                    <p>
                                        <span className="details_bold">
                                            Region:
                                        </span>
                                        {country.region}
                                    </p>
                                    <p>
                                        <span className="details_bold">
                                            Sub Region:
                                        </span>
                                        {country.subregion}
                                    </p>
                                    <p>
                                        <span className="details_bold">
                                            Capital:{' '}
                                        </span>
                                        {country.capital}
                                    </p>
                                </div>
                                <div className="col">
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

                                        {currencies.map((curr, i) => (
                                            <span key={i}>{curr.name}</span>
                                        ))}
                                    </p>
                                    <p>
                                        <span className="details_bold">
                                            Languages:
                                        </span>

                                        {languages.map((lan, i) => (
                                            <span key={`${i}`}>
                                                {(i ? ', ' : '') + lan.name}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>

                            <div className="row mt-3 d-flex justify-content-center align-items-center">
                                <span className="details_bold">
                                    Border Countries:
                                </span>

                                {results.map((r, i) => (
                                    <div className="col wrap" key={i}>
                                        <Link
                                            to={`/countries/${r.name}`}
                                            type="button"
                                            className="btn btn-secondary"
                                        >
                                            {r.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
}

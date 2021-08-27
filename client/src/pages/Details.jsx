import React, { useState, useEffect } from 'react';

// Routing
import { Link, useParams } from 'react-router-dom';

// Axios
import axios from 'axios';
const baseURL = 'https://restcountries.eu/rest/v2';

export default function Details() {
    const [country, setCountry] = useState({});
    const [currBorders, setCurrBorders] = useState([]);
    const [countries, setCountries] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const { name } = useParams();

    useEffect(() => {
        setLoading(true);

        axios
            .get(`${baseURL}/all`)
            .then(res => setCountries(res.data))
            .catch(err => console.log(err));

        if (countries) {
            axios
                .get(`${baseURL}/name/${name}`)
                .then(res => {
                    setCountry(res.data[0]);
                })
                .then(res => {
                    setCurrBorders(res.data[0].borders);
                })
                .then(() => {
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                });
        }
        // eslint-disable-next-line
    }, [name]);

    useEffect(() => {
        if (country && countries && currBorders) {
            setResults(
                countries.filter(c => country.borders.includes(c.alpha3Code))
            );
        }
    }, [country, countries, currBorders]);

    return (
        <>
            {!loading ? (
                <div className="container-fluid details my-5">
                    <div className="row my-5 mx-lg-5">
                        <div className="col">
                            <Link
                                to="/"
                                type="button"
                                className="btn btn-secondary px-lg-5 py-2 shadow-sm"
                            >
                                <i class="fas fa-long-arrow-alt-left me-3"></i>
                                Back
                            </Link>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-around">
                        <div className="col-xs-12 col-lg-6 d-flex justify-content-center">
                            <img
                                src={country.flag}
                                className="img-fluid shadow-lg details_flag"
                                alt="flag"
                            />
                        </div>

                        <div className="col-xs-12 col-lg-5">
                            <div className="row">
                                <div className="col mb-3 mt-5">
                                    <h1 id="details_title">{country.name}</h1>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-xs-12 col-lg-5">
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
                                        <span className="details_bold">
                                            Languages:
                                        </span>

                                        {country.languages.map((lan, i) => (
                                            <span key={`${i}`}>
                                                {(i ? ', ' : '') + lan.name}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>

                            <div className="row mt-5 d-flex align-items-baseline">
                                <div className="col-xs-12 col-lg-3">
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
                                            className="btn btn-sm btn-secondary details_btn shadow-sm me-3"
                                        >
                                            {r.name}
                                        </Link>
                                    ))}
                                </div>
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

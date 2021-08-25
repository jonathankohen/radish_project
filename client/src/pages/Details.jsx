import React, { useState, useEffect } from 'react';

// Routing
import { Link, useParams } from 'react-router-dom';

// Axios (HTTP calls)
import axios from 'axios';
const baseURL = 'https://restcountries.eu/rest/v2';

export default function Details() {
    const [country, setCountry] = useState({});
    const { name } = useParams();

    useEffect(() => {
        axios
            .get(`${baseURL}/name/${name}`)
            .then(res => setCountry(res.data[0]))
            .catch(err => console.log(err));
    });

    return (
        <div className="container details my-5">
            <div className="row my-5">
                <div className="col">
                    <Link
                        to="/"
                        type="button"
                        className="btn btn-secondary px-5 py-2 shadow-sm"
                    >
                        <i class="fas fa-long-arrow-alt-left me-3"></i>
                        Back
                    </Link>
                </div>
            </div>

            <div className="row d-flex justify-content-around">
                <div className="col">
                    <img
                        src={country.flag}
                        className="img-fluid shadow"
                        alt="flag"
                    />
                </div>
                <div className="col p-5">
                    <h1 id="details_title">{country.name}</h1>
                </div>
            </div>
        </div>
    );
}

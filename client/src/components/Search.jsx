import React, { useState, useEffect } from 'react';

// Axios
import axios from 'axios';
const baseURL = 'https://restcountries.eu/rest/v2';

export default function Search({ onNewInput }) {
    const [name, setName] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        if (name === '') return;
        const url = `${baseURL}/name/${name}`;

        axios
            .get(`${url}`)
            .then(res => onNewInput(res.data))
            .catch(err => console.log(err));
        // eslint-disable-next-line
    }, [name]);

    useEffect(() => {
        if (region === '') return;
        const url = `${baseURL}/region/${region}`;

        axios
            .get(`${url}`)
            .then(res => onNewInput(res.data))
            .catch(err => console.log(err));
        // eslint-disable-next-line
    }, [region]);

    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleRegionChange = e => {
        setRegion(e.target.value);
    };

    return (
        <section>
            <div className="row mt-5 d-flex justify-content-between">
                <div className="col-xs-12 col-lg-4 mb-4">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="search_icon">
                            <i className="fas fa-search"></i>
                        </span>
                        <input
                            type="search"
                            name="search_input"
                            className="form-control shadow-sm"
                            id="search_input"
                            placeholder="Search for a country"
                            onChange={e => handleNameChange(e)}
                        />
                    </div>
                </div>

                <div className="col-xs-12 col-lg-4 mb-5">
                    <select
                        className="form-select shadow-sm"
                        name="select"
                        id="select"
                        aria-label="Filter by Region"
                        onChange={e => handleRegionChange(e)}
                    >
                        <option selected>Filter by Region</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </div>
        </section>
    );
}

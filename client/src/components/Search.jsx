import React, { useState, useEffect } from 'react';

import useWindowDimensions from './hooks/useWindowDimensions';

// Axios
import axios from 'axios';
const baseURL = 'https://restcountries.eu/rest/v2';

export default function Search({ onNewInput }) {
    const [name, setName] = useState('');
    const [region, setRegion] = useState('');
    const { width } = useWindowDimensions();

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
        <div className="row mt-5 d-flex justify-content-between align-items-center">
            <div className="col-xs-12 col-lg-4 mb-4">
                <div className="input-group mb-3 shadow-sm">
                    <span className="input-group-text" id="search_icon">
                        <i className="fas fa-search"></i>
                    </span>
                    <input
                        type="search"
                        name="search_input"
                        className="form-control p-3"
                        id="search_input"
                        placeholder="Search for a country"
                        onChange={e => handleNameChange(e)}
                        value={name}
                    />
                </div>
            </div>
            <div className="col-7 col-lg-2 mb-5">
                <div className="input-group mb-3 shadow-sm">
                    <select
                        className="form-select shadow-sm p-3"
                        name="select"
                        id="select"
                        aria-label="Filter by Region"
                        onChange={e => handleRegionChange(e)}
                    >
                        {width < 576 ? (
                            <option selected>Filter by...</option>
                        ) : (
                            <option selected>Filter by Region</option>
                        )}
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                    <span className="input-group-text" id="search_icon">
                        <i class="fas fa-chevron-down"></i>
                    </span>{' '}
                </div>
            </div>
        </div>
    );
}

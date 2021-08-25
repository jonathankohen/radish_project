import React, { useState, useEffect } from 'react';

// Axios (HTTP calls)
import axios from 'axios';

// Components
import Form from '../components/Form';
import Filter from '../components/Filter';
import Country from '../components/Country';

const url = 'https://restcountries.eu/rest/v2';

export default function Home() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
            .get(`${url}/all`)
            .then(res => setCountries(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <main>
            <div className="container">
                <div className="row mt-5 d-flex justify-content-between">
                    <Form />
                    <Filter />
                </div>

                <div className="row">
                    {countries.map((country, i) => (
                        <div className="col" key={i}>
                            <Country {...country} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

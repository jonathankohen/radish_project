import React, { useState, useEffect } from 'react';

// Components
import Search from '../components/Search';
import Countries from '../components/Countries';

// Axios
import axios from 'axios';
const baseURL = 'https://restcountries.eu/rest/v2';

export default function Home() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        axios
            .get(`${baseURL}/all`)
            .then(res => setCountries(res.data))
            .then(() => setLoading(false))
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const onNewInput = newCountries => {
        setCountries(newCountries);
    };

    return (
        <>
            {!loading ? (
                <main className="container">
                    <Search onNewInput={onNewInput} />

                    <div className="row">
                        <Countries countries={countries} />
                    </div>
                </main>
            ) : (
                ''
            )}
        </>
    );
}

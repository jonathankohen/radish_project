import React, { useState, useEffect } from 'react';

// Components
import Search from '../components/Search';
import Countries from '../components/Countries';

// Axios
import axios from 'axios';
const baseURL = 'https://restcountries.eu/rest/v2';

export default function Home() {
    const [countries, setCountries] = useState([]);
    const [pageLoading, setPageLoading] = useState([]);

    useEffect(() => {
        let unmounted = false;
        setPageLoading(true);

        axios
            .get(`${baseURL}/all`)
            .then(res => setCountries(res.data))
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
    }, []);

    const onNewInput = newCountries => {
        setCountries(newCountries);
    };

    return (
        <main>
            {!pageLoading ? (
                <div className="container">
                    <Search onNewInput={onNewInput} />

                    <div className="row">
                        <Countries countries={countries} />
                    </div>
                </div>
            ) : (
                ''
            )}
        </main>
    );
}

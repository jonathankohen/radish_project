import React, { useState, useEffect } from 'react';

// Components
import Countries from '../components/Countries';
import Country from '../components/Country';

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
                    <Countries onNewInput={onNewInput} />

                    <div className="row">
                        {countries ? (
                            countries.map((country, i) => (
                                <div
                                    className="col-xs-12 col-lg-3 mb-5"
                                    key={i}
                                >
                                    <Country {...country} />
                                </div>
                            ))
                        ) : (
                            <div className="col-xs-12 col-lg-12 ms-auto">
                                <h1>Please try again!</h1>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                ''
            )}
        </main>
    );
}

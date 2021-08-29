import React, { useState, useEffect } from 'react';

// Routing
import { Link, useParams } from 'react-router-dom';

// Axios
import axios from 'axios';

// Components
import DetailsContent from '../components/Details_Content';

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
        // eslint-disable-next-line
    }, [name]);

    useEffect(() => {
        if (country && countries && currBorders && country.borders) {
            setResults(
                countries.filter(c => country.borders.includes(c.alpha3Code))
            );
        }
    }, [country, countries, currBorders]);

    return (
        <>
            {!loading ? (
                <DetailsContent country={country} results={results} />
            ) : (
                ''
            )}
        </>
    );
}

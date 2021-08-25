import React from 'react';

export default function Filter() {
    return (
        <div className="col-xs-12 col-lg-2 mb-5">
            <select
                name="select"
                id="select"
                className="form-select"
                aria-label="Filter by Region"
            >
                <option defaultValue>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}

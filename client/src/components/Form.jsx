import React from 'react';

export default function Form() {
    return (
        <div className="col-xs-12 col-lg-4 mb-5">
            <form className="shadow">
                <input
                    type="search"
                    name="search_input"
                    className="form-control"
                    id="search_input"
                    placeholder="Search for a country"
                />
            </form>
        </div>
    );
}

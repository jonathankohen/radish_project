import React from 'react';

export default function Form() {
    return (
        <div className="col-xs-12 col-lg-4 mb-5">
            <form>
                <input
                    type="search"
                    name="search"
                    className="form-control"
                    placeholder="Search for a country"
                />
            </form>
        </div>
    );
}

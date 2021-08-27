import React from 'react';

import Country from './Country';

export default function Countries({ countries }) {
    return (
        <>
            {countries ? (
                countries.map((country, i) => (
                    <div
                        className="col-xs-12 col-lg-3 mb-5 d-flex justify-content-center"
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
        </>
    );
}

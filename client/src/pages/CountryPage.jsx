import React from 'react';

// Routing
import { Link } from 'react-router-dom';

export default function CountryPage() {
    return (
        <div className="countryPage">
            <div className="row">
                <div className="col">
                    <Link to="/" type="button" class="btn btn-secondary">
                        Back
                    </Link>
                    <p>asdf</p>
                </div>
            </div>

            <div className="row">
                <div className="col">{/* img */}</div>
                <div className="col">
                    <p>asdf</p>
                </div>
            </div>
        </div>
    );
}

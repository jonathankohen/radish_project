import React from 'react';

import Form from './Form';
import Filter from './Filter';

export default function Countries() {
    return (
        <div className="row mt-5 d-flex justify-content-between">
            <Form />
            <Filter />
        </div>
    );
}

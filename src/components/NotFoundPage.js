import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h3>404 - Page not found</h3>
        <Link to="/">Home Page</Link>
    </div>
);

export default NotFoundPage;

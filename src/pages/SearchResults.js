import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
    const query = new URLSearchParams(useLocation().search).get('q');

    return (
        <div className="search-results">
            <h2>Search Results for: "{query}"</h2>
            {/* Add logic to display results based on the query */}
        </div>
    );
};

export default SearchResults;

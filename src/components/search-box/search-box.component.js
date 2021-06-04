import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, onChangeFilter}) => (
    <input
    type="search"
    placeholder={placeholder}
    className="search"
        onChange={onChangeFilter}
    />
);
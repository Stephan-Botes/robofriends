import React from 'react';

const SearchBox = ( { searchField, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange} // on change event is linked to searchChange property given from App
            />
        </div>
    );
};

export default SearchBox;

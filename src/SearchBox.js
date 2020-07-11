import React from 'react';

const SearchBox = ({SearchChange}) => {
    return (
        <div 
        className='pa3 '>
            <input 
                className='pa2 b--green bg-lightest-blue'
                type='search' 
                placeholder='Serach Robots' 
            />
        </div>
    );
}

export default SearchBox;

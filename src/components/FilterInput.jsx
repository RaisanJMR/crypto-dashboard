import React from 'react'

const FilterInput = ({ filter, onFilterChange }) => {
    return (
        <div className='filter'>
            <input type="text" name="filter" id="filter" value={filter} placeholder='Filters coins by name or symbol' onChange={(e) => onFilterChange(e.target.value)} />
        </div>
    )
}

export default FilterInput
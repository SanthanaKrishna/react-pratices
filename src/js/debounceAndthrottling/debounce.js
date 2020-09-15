import React, { useState, useEffect } from 'react';

export const Debounce = () => {
    const [search, setSearch] = useState('');



    const useDebounce = (value, delay) => {
        const [debounceValue, setDebounceValue] = useState(value);
        useEffect(() => {
            let timerId = setTimeout(() => {
                console.log('setting ')
                setDebounceValue(value)
            }, delay)
            return () => {
                console.log('clear')
                clearTimeout(timerId)
            }
        }, [search, delay]);

        return debounceValue;
    }
    const handleDebounce = useDebounce(search, 5000)
    const makeApiCall = () => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }
    const handleSearch = (event) => {
        setSearch(event.target.value);
        handleDebounce(event.target.value)
    };

    return (
        <div>
            <input type="text" name="search-input" value={search} onChange={handleSearch} />
        </div>
    )
}

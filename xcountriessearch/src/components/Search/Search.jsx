import {React, useState} from 'react';
import styles from './Search.module.css';

const Search = ({placeholder, data, onInputChange})=>{
    const [inputVal, setInputVal] = useState('');

    return (
        <>
            <input className={styles.search} type="text" placeholder={placeholder} onChange={(e)=>{
                setInputVal(e.target.value.trim())
                onInputChange(data, e.target.value.trim())
            }} value={inputVal}/>
        </>
    )
}
export default Search
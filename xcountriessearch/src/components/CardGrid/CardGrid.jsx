import {React, useState, useEffect} from 'react';
import Card from "../Card/Card"
import styles from "./CardGrid.module.css"
import { errorHandler, filterData } from '../../config/helper-methods';
import { Toaster } from 'react-hot-toast';
import Search from '../Search/Search'
import { fetchAllCountries } from '../../api/api';

const CardGrid = ()=>{
    const [countries, setCountries] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loadingState, setLoadingState] = useState(false)
    
    const handleSearchChange= (countryData, searchParam)=>{
        try{
            setFilteredData(filterData(countryData, searchParam))
        }
        catch(error){
            errorHandler(error);
        }
    }

    const generateCountryData = async ()=>{
        try{
            setLoadingState(true);
            const data = await fetchAllCountries();
            setCountries(data)
            setLoadingState(false);
        }
        catch(error){
            setLoadingState(false);
            errorHandler(error);
        }
    }

    useEffect(()=>{
        generateCountryData();
    }, [])

    useEffect(()=>{
        setFilteredData(filterData(countries, ''))
    }, [countries])

    return (
        <>
            <Toaster position="bottom-right" reverseOrder={false} />
            {countries && countries.length? (
                <>
                <Search data={countries} placeholder={'Search for countries'} 
                onInputChange={handleSearchChange}
                />
                <div className={styles.wrapper}>
                {
                    filteredData.map((country)=>{
                        return <Card country={country}/>
                    })
                }
                </div>
                </>
            )
            :loadingState?(
                <div className={styles.loader}>Loading...</div>
            )
            :(<p>No Data Found</p>)
            }
            
        </>

    )
}

export default CardGrid;
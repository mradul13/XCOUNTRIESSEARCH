import React from "react";
import FlagImage from "../FlagImage/FlagImage";
import styles from "./Card.module.css";

const Card = ({country})=>{
    return (
        <div className={styles.countryCard}>
            <FlagImage path={country["flags"]["svg"]} alt={country["flags"]["alt"]}/>
        <h2 className={styles.country_name}>{country["name"]["common"]}</h2>
        </div>
    )
}

export default Card;
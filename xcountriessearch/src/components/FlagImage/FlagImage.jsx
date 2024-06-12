import React from "react";

const FlagImage = ({path, alt})=>{
    return (
        <>
            <img src={path} alt={alt} height={50} width={50}/>
        </>
    )
};

export default FlagImage;
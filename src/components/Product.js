import React from "react";
import { useLocation, useParams } from "react-router-dom";


function Product() {
    const {id} = useParams()
    const query = new URLSearchParams(useLocation().search)
    return ( 
        <p>
            I'm product - {id} <br/>
            {query.get("mark")}
        </p>
     );
}

export default Product;
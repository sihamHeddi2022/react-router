import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


function Student({match}) {
    
    const [accept,isAccept] = useState(false)

    const history = useHistory()
    
    useEffect(()=>{
        if(!accept) history.push("/")
    },[])


    return ( <p>
        hi I'm student {match.params.id}
    </p> );
}

export default Student;
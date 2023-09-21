import { useState, useEffect } from "react";

export function useFetch(url){
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(url, {
            method : 'POST',
            headers : ""
        })
        .then((response) => response.json)
        .then((data) => setData(data))
    }, []);
    return { data }
}
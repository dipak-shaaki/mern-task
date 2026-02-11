import { useState,useEffect } from "react";


export function usefetch(url){
    const [data, setData] =useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        async function fetchData(){
            setLoading(true);

            const res = await fetch(url);
            const json = await res.json();
            setData(json);
            setLoading(false);
        }
        fetchData();
    },[url]);

    return {data,loading};
    
}
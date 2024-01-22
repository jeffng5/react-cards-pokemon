import { useState, useEffect } from "react";
import axios from "axios"


const useAxios = (url)  => {

const [response, setResponse] = useState()
const [error, setError] = useState()
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {    
const getData = () =>  {
    try{    
        let res = axios.get(url)
        // const json = res.json()
        console.log(res)
        setResponse(res);
        
    } catch (error){
        setError(error);
    }
    setIsLoading(false)
}
        getData();
}, [url]);
    console.log(response)

    return {response, error, isLoading};
};


export default useAxios;
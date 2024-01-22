import { useState, useEffect } from "react";
import axios from "axios"


const useAxios = (url)  => {

const [response, setResponse] = useState()
const [error, setError] = useState()
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {    
 async function getData() {
    try{    
        let res = await axios.get()
        // const json = res.json()
        console.log(res)
        setResponse(res);
        
    } catch (error){
        setError(error);
    }
    setIsLoading(false)
}
        getData();
}, []);
    console.log(response)

    return {response, error, isLoading};
};


export default useAxios;
import { useState, useEffect } from "react";
import axios from "axios"

const useAxios = (url) => {
    const [response, setResponse] = useState(null)
    
    
   let getData =  async() => {
        try{ 
        const res = await axios.get(url);
        setResponse(res)
        }catch (error) {
    
        }
        }

    return {response}
}

export default useAxios;
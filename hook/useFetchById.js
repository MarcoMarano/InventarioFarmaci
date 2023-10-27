import axios from 'axios';
import { useEffect, useState } from 'react';
const url = "http://localhost:8080/drugItemByID"

const useFetchById = ( itemId ) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () =>{
        setIsLoading(true);
        try{
            console.log("item id :", itemId);
            await axios.get(url, itemId).then((response)=>{
                setData(response.data);
              })
            setIsLoading(false);
        }catch(error){
            console.error("An error occured during retrieving data..",error);
            alert("Qualcosa e' andato storto")
        }
    }

    useEffect( ()=>{
        fetchData()
    },[])

    const reFetch = () =>{
        setIsLoading(true);
        fetchData();
    }
    return {data, isLoading, reFetch}
}

export default useFetchById;
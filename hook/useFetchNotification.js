import axios from "axios";
import { useEffect, useState } from "react";
const url = "http://localhost:8080/notifications";

const useFetchNotification = () =>{
    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const fetchData = async () => { 
        setIsLoading(true);
        try{
            await axios.get(url).then( (response)=>{setData(response.data);})
        }catch(error){
            console.log("An error occured retrieving notification data...", error);
            alert("Qualcosa e' andato storto");
        }
    }
}

export default useFetchNotification;
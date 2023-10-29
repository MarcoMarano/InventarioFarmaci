import axios from 'axios';

const useDelete = async (drugId) =>{
    const url = "http://localhost:8080/drug/" + drugId;
    try{
      return await axios.delete(url);
    }catch(error){
      console.error("An error occured during deleting data.. ", error)
      alert("Qualcosa e' adnato storto");
    }
}

export default useDelete;
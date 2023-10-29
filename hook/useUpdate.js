import axios from 'axios';

const useUpdate = async ( drugId, name, descriscption, insDate, expDate) =>{
    console.log(name," ",descriscption," ",insDate," ",expDate);
    const url = "http://localhost:8080/drug/" + drugId;
    try{
      const newItem = {drugName: name, drugDescription: descriscption, drugInsertionDate: insDate, drugExpirationDate: expDate}
      return await axios.put(url,newItem);
    }catch(error){
      console.error("An error occured during updateing data.. ", error)
      alert("Qualcosa e' adnato storto");
    }
}

export default useUpdate;
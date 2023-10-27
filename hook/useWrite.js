import axios from 'axios';
const url = "http://localhost:8080/insertDrug"

const useWrite = async ( name, descriscption, insDate, expDate) =>{
    console.log(name," ",descriscption," ",insDate," ",expDate);
    try{
      const newItem = {drugName: name, drugDescription: descriscption, drugInsertionDate: insDate, drugExpirationDate: expDate}
      return await axios.post(url, newItem)
    }catch(error){
      console.error("An error occured during savign data.. ", error)
      alert("Qualcosa e' adnato storto");
    }
}

export default useWrite;
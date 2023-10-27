import useRead from "./useRead";

function useSearchById(inputId) {
  const {data, isLoading} = useRead();
    if(!isLoading){
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == inputId) {
          return data[i];
        }
      }
      return null; 
    }
  }

export default useSearchById;
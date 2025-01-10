import { useContext } from "react"
import { AuthContext } from "../contex"


const useAuth = () => {
    return useContext(AuthContext);
  };

export default useAuth
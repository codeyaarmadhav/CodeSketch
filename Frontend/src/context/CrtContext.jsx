import { createContext } from "react";
import {create} from "../assets/frontend_assets/assets"

const CrtContext = createContext();

const CrtContextProvider = (props) => {
  const values = {
    create
  }

  return (
    <CrtContext.Provider value={values}>
      {props.children}
    </CrtContext.Provider>
  )
}

export { CrtContext };
export default CrtContextProvider;
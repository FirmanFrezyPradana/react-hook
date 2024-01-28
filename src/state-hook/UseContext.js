import Navbar from "../componen/Navbar";
import { useState, useContext, createContext } from "react";
import Page from "../componen/Page";
import '../App.css'

export const LoginContext = createContext();
const UseContext = () => {
  const [isLogin, setIslogin] = useState(false);
  const handlingLogin = () => {
    setIslogin((isLogin) => !isLogin);
  };
  return (
    <div>
      <LoginContext.Provider value={[isLogin,setIslogin]}>
        <Navbar/>
        <Page/>
      </LoginContext.Provider>
    </div>
  );
};

export default UseContext;

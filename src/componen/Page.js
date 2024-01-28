import React, { useContext } from "react";
import { LoginContext } from "../state-hook/UseContext";
import '../App.css'

const Page = () => {
  const [isLogin, setIsLogin] = useContext(LoginContext);
  return (
    <div className="container">
      <div className="hooks mt-4">
        {isLogin ? "Your Are Logout" : "You Are Logout, please Login ..."}
      </div>
    </div>
  );
};

export default Page;

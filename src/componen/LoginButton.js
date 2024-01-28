// import React, { useState } from "react";
// import { LoginContext } from "../state-hook/UseContext";
// import '../App.css'

// const LoginButton = () => {
//   const [isLogin, setIsLogin] = useState(LoginContext);
//   const handleClick = () => {
//     setIsLogin((login) => !isLogin);
//   };
//   return (
//     <li>
//       <a href="#home" className={`${!isLogin ? "login" : "Logout"}`}>
//         {!isLogin ? "login" : "logut"}
//       </a>
//     </li>
//   );
// };

// export default LoginButton;
import React, { useContext } from 'react';
import { LoginContext } from '../state-hook/UseContext';

const LoginButton = () => {
  const [isLogin, setIsLogin] = useContext(LoginContext);
  const handleClick = () => {
    setIsLogin((login) => !login);
  };
  return (
    <li>
      <a
        onClick={handleClick}
        className={`${!isLogin ? 'login' : 'logout'}`}
        href="#home">
        {!isLogin ? 'Login' : 'Logout'}
      </a>
    </li>
  );
};

export default LoginButton;
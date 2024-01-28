import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import UseId from "./state-hook/UseId";
// import UseState from './state-hook/UseState';
// import UseReducer from "./state-hook/useReducer";
// import UseEffect from "./state-hook/UseEffect";
// import UseLayoutEffect from "./state-hook/UseLayoutEffect";
// import UseContext from "./state-hook/UseContext";
// import UseRef from "./state-hook/UseRef";
// import UseMemo from "./state-hook/UseMemo";
// import UseCallback from "./state-hook/UseCallback";
// import UseDebugValue from "./state-hook/UseDebugValue";
import CustomHook from "./state-hook/CustomHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <UseState /> */}
    {/* <UseReducer /> */}
    {/* <UseEffect/> */}
    {/* <UseLayoutEffect/> */}
    {/* <UseContext/> */}
    {/* <UseRef/> */}
    {/* <UseMemo /> */}
    {/* <UseCallback /> */}
    {/* <UseDebugValue /> */}
    {/* <UseId/> */}
    <CustomHook/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

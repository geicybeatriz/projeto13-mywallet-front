import { BrowserRouter, Routes, Route} from "react-router-dom";
import UserContext from "../Context/context.jsx";
import { useState } from "react";

import SignIn from "../SignIn/SignIn.jsx";
import SignUp from "./../SignUp/SignUp.jsx";
import Home from "./../Home/Home.jsx";

export default function App(){
    const [apiData, setApiData] = useState({});
    
    return (
        <UserContext.Provider value={{apiData, setApiData}} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>}></Route>
                    <Route path="/sign-up" element={<SignUp/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
import { BrowserRouter, Routes, Route} from "react-router-dom";
import UserContext from "../Context/context.jsx";
import { useState } from "react";

import SignIn from "../SignIn/SignIn.jsx";
import SignUp from "./../SignUp/SignUp.jsx";
import Home from "./../Home/Home.jsx";
import AddCash from "../Entry/AddEntry.jsx";
import SubtractCash from "../Exit/SubtractCash.jsx";

export default function App(){
    const [apiData, setApiData] = useState({});
    
    return (
        <UserContext.Provider value={{apiData, setApiData}} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>}></Route>
                    <Route path="/sign-up" element={<SignUp/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/add-data" element={<AddCash />}></Route>
                    <Route path="/subtract-data" element={<SubtractCash />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
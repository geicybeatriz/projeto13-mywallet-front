import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./../Login/Login";
import SignUp from "./../SignUp/SignUp";
import Home from "./../Home/Home";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "../SignIn/SignIn.jsx";
import SignUp from "./../SignUp/SignUp.jsx";
import Home from "./../Home/Home.jsx";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}></Route>
                <Route path="/sign-up" element={<SignUp/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
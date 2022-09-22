import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "../SignIn/SignIn.jsx";
import SignUp from "./../SignUp/SignUp.jsx";
import Home from "./../Home/Home.jsx";
import AddCash from "../Entry/AddEntry.jsx";
import SubtractCash from "../Exit/SubtractCash.jsx";
import { UserProvider } from "../../contexts/userContext.js";

export default function App(){
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>}></Route>
                    <Route path="/sign-up" element={<SignUp/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/add-data" element={<AddCash />}></Route>
                    <Route path="/subtract-data" element={<SubtractCash />}></Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}
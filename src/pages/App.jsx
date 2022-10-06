import { BrowserRouter, Routes, Route} from "react-router-dom";
import { UserProvider } from "../contexts/userContext.js";
import SignIn from "./auth/SignIn.jsx";
import SignUp from "./auth/SignUp.jsx";

//faltam
import Home from "./Home.jsx";
import AddCash from "../Components/Entry/AddEntry.jsx";
import SubtractCash from "../Components/Exit/SubtractCash.jsx";

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
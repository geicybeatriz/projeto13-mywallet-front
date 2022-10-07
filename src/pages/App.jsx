import { BrowserRouter, Routes, Route} from "react-router-dom";
import { UserProvider } from "../contexts/userContext.js";
import { TransactionProvider } from "../contexts/transactionContext.js"
import SignIn from "./auth/SignIn.jsx";
import SignUp from "./auth/SignUp.jsx";
import Home from "./Home.jsx";
import NewData from "./NewData.jsx";

export default function App(){
    return (
        <UserProvider>
            <TransactionProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SignIn/>}></Route>
                        <Route path="/sign-up" element={<SignUp/>}></Route>
                        <Route path="/home" element={<Home/>}></Route>
                        <Route path="/addData" element={<NewData/>}></Route>
                    </Routes>
                </BrowserRouter>
            </TransactionProvider>
        </UserProvider>
    );
}
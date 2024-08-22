import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login/Login.jsx"
import Signup from "./components/Signup/Signup.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer.jsx"
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/login" element = {<Login/>}/>
                <Route path="/signup" element = {<Signup/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, LoginPage, AboutPage, Navbar } from "../09-useContext";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar/>
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                <Route path="/*" element={<Navigate to="/about" />} /> 
                {/* el * es un comodin para todo lo que no tenga path, x default lo manda a about*/}
            </Routes>
        </UserProvider>
    );
};

import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";

export const ApplicationRoutes = () => (
    <>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
        </Routes>
    </>
)
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { MovieDetail } from "./views/MovieDetail";

export const ApplicationRoutes = () => (
    <>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/movie/:id" element={<MovieDetail />}></Route>
        </Routes>
    </>
)
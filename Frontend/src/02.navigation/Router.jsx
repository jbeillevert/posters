import { Routes, Route } from "react-router-dom";
import HomePage from "../03.globals/01.pages/HomePage";


function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default Router;
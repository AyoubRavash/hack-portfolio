import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import AboutMePage from "./pages/AboutMePage.tsx";

function App() {
    return <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'about-me'} element={<AboutMePage/>}/>
        </Route>
    </Routes>
}

export default App

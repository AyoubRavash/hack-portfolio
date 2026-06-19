import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import AboutMePage from "./pages/AboutMePage.tsx";
import WorksPage from "./pages/WorksPage.tsx";
import ContactsPage from "./pages/ContactsPage.tsx";

function App() {
    return <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'works'} element={<WorksPage/>}/>
            <Route path={'about-me'} element={<AboutMePage/>}/>
            <Route path={'contacts'} element={<ContactsPage/>}/>
        </Route>
    </Routes>
}

export default App

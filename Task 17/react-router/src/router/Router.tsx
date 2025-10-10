import { Routes, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import App from "../App";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Item from "../pages/Item";
import StudentDetail from "../pages/StudentDetail";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/item/:itemid" element={<Item />} />
                <Route path="/student/:studentId" element={<StudentDetail />} />
                <Route path="/dashboard" element={<Dashboard />} >      
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
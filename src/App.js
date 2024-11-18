import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "./components/ui/provider"
import { Container } from "@chakra-ui/react";


//pages 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

//pages/books
import ProjectsIndex from './pages/projects/Index';
import ProjectsShow from './pages/projects/Show';

//components
import Navbar from "./components/NavBar";
import RedirectExample from "./pages/RedirectExample";
import Footer from "./components/Footer";

const App = () => {

    return (
        <Provider>

            <Router>
                <Container>
                    <Navbar />
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/about"} element={<About />} />
                        <Route path={"/contact"} element={<Contact />} />
                        <Route path={"/redirect-example"} element={<RedirectExample />} />

                        <Route path="/projects" element={<ProjectsIndex />} />
                        <Route path="/projects/:slug" element={<ProjectsShow />} />

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Container>

            </Router>
        </Provider>

    )
}



export default App;
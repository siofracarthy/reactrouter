import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//pages 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

//pages/books
import BooksIndex from './pages/books/Index';
import BooksShow from './pages/books/Show';

//components
import Navbar from "./components/NavBar";
import RedirectExample from "./pages/RedirectExample";

const App = () => {

    return (
        <Router>
            <Navbar />


            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/redirect-example"} element={<RedirectExample />} />

                <Route path="/books" element={<BooksIndex />} />
                <Route path="/books/:id" element={<BooksShow />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>


        </Router>

    )
}



export default App;
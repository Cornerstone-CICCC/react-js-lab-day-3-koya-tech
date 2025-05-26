import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./BlogContext";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./Home";
import BlogList from "./BlogList";
import BlogDetail from "./BlogDetail";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import Header from "./Header";
import Footer from "./Footer";

function App() {
    return (
        <BlogProvider>
            <BrowserRouter>
                <Header firstname="YourFirstName" />
                <Toaster />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/blog/new" element={<AddPost />} />
                    <Route path="/blog/:id" element={<BlogDetail />} />
                    <Route path="/blog/edit/:id" element={<EditPost />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </BlogProvider>
    );
}

export default App;

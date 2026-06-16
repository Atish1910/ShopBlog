import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import BlogListPage from "./pages/BlogListPage";
import AddNewBlog from "./pages/AddNewBlog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/category/:category" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/add-blog" element={<AddNewBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
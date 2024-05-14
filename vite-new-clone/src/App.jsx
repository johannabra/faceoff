import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { BlogPostProvider } from "./context/BlogContext";
import BlogArticle from "./pages/BlogArticle";
import Header from "./components/Header";
function App() {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <BlogPostProvider>
      <BrowserRouter>
        <Header />
        {isLoggedIn ? (
          <>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/profile" element={<UserPage />} />
              <Route path="/article" element={<BlogArticle />} />
            </Routes>
          </>
        ) : (
          <p>Please log in</p>
        )}
      </BrowserRouter>
    </BlogPostProvider>
  );
}

export default App;

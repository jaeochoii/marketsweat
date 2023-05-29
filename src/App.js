import MainPage from "./component/Page/MainPage";
import LogInPage from "./component/Page/LogInPage";
import IntroPage from "./component/Page/IntroPage";
import SignUpPage from "./component/Page/SignUpPage";
import SearchPage from "./component/Page/SearchPage";
import HeartPage from "./component/Page/HeartPage";
import MyPage from "./component/Page/MyPage";
import MenuPage from "./component/MenuPage";
import ProductDetailPage from "./component/Page/ProductDetailPage";
import PostPage from "./component/Page/PostPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="MainPage" element={<MainPage />} />
        <Route path="MenuPage" element={<MenuPage />} />
        <Route path="MyPage" element={<MyPage />} />
        <Route path="LogInPage" element={<LogInPage />} />
        <Route path="SignUpPage" element={<SignUpPage />} />
        <Route path="SearchPage" element={<SearchPage />} />
        <Route path="HeartPage" element={<HeartPage />} />
        <Route path="ProductDetailPage" element={<ProductDetailPage />} />
        <Route path="PostPage" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

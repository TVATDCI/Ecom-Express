import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ImageGalleryContext } from "./context/ImageGalleryContext";

import LoginSignup from "./components/Login/LoginSignup";
import ForgotPassword from "./components/Login/ForgotPassword";
import ForgotEmail from "./components/Login/ForgotEmail";
import SingleProduct from "./components/Products/SingleProduct";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Hero from "./components/Herosection/Hero";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout";
import Trending_products from "./components/Trending/Trending_products";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ImgFetcher from "./components/Product_gallery/ImgFetcher";
import ImgSlider from "./components/Product_gallery/ImgSlider";
import ProductGal from "./components/Product_gallery/ProductGal";

const AppRoute = () => {
  const {
    images,
    mainImageId,
    selectedImageIndex,
    isVisible,
    handleImagesFetched,
    handleImageSelect,
    handleMainImageClick,
    toggleVisibility,
  } = useContext(ImageGalleryContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Hero />
            <Trending_products />
            <ImgFetcher count={8} onImagesFetched={handleImagesFetched} />
            <ImgSlider
              images={images}
              onSelect={handleImageSelect}
              onMainImageClick={handleMainImageClick}
            />
            <ProductGal
              mainImageId={mainImageId}
              selectedImage={images[selectedImageIndex]}
              isVisible={isVisible}
              toggleVisibility={toggleVisibility}
            />
            <Footer />
          </Layout>
        }
      />

      <Route
        path="/products"
        element={
          <Layout>
            <Products />
          </Layout>
        }
      />
      <Route
        path="/products/:id"
        element={
          <Layout>
            <SingleProduct />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <LoginSignup />
          </Layout>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <Layout>
            <ForgotPassword />
          </Layout>
        }
      />
      <Route
        path="/forgot-email"
        element={
          <Layout>
            <ForgotEmail />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <PageNotFound />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoute;

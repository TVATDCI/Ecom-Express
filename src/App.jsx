import "./App.css";

import ImageGalleryContextProvider from "./context/ImageGalleryContext";
import AppRoute from "./AppRoute";

const App = () => {
  return (
    <ImageGalleryContextProvider>
      <AppRoute />
    </ImageGalleryContextProvider>
  );
};

export default App;

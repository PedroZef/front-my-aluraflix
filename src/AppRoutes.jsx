
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Footer  />
    </BrowserRouter>
  );
}

export default App;

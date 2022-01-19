import "./app.scss";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails";
import ProductsList from "./Components/ProductsList";
import ShoppingCard from "./Components/ShoppingCard";

function App() {
  
  return (
    <div className="App">
      <Header />
      <ProductDetails />
      <ProductsList  />
      <Footer />
      <ShoppingCard/>




    </div>
  );
}

export default App;

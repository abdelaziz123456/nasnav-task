import { Component } from "react";
import "./app.scss";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails";
import ProductsList from "./Components/ProductsList";
import ShoppingCard from "./Components/ShoppingCard";

class App extends Component {

  state={quantity:0};

 addToCart =(num) =>{
   if(this.state.quantity){
     this.setState({quantity:this.state.quantity+num})
   }else{
      this.setState({quantity:num})
   }
   
    
  }


  clearCart=()=>{
    this.setState({quantity:0})
  }

  render(){
  return (
  
    <div className="App">
      <Header products={this.state.quantity}/>
      <ProductDetails  addProduct={this.addToCart} />
      <ProductsList  />


      
      <Footer />
      <ShoppingCard products={this.state} clearCart={this.clearCart}/>




    </div>
  );
}
}

export default App;
